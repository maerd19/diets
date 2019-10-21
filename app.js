require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("./helpers/passport");

mongoose
  .connect("mongodb://localhost/module2", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  // .connect(process.env.DB, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true
  // })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SECRET,
    cookie: { maxAge: 3600000 },
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    })
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Express View engine setup
//testsgit
app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// routes
const index = require("./routes/index");
const auth = require("./routes/auth");
const objectives = require("./routes/objectives");
const food = require("./routes/food");
const menu = require("./routes/menu");

app.use("/", index);
app.use("/", auth);
app.use("/", objectives);
app.use("/foods", food);
app.use("/menus", menu);

module.exports = app;
