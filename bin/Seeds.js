const mongoose = require('mongoose');
const Menus = require('../models/Menus');

const dbtitle = 'library-project';
mongoose
	.connect('mongodb://localhost/module2', {useNewUrlParser: true, useUnifiedTopology: true})

const menus = [
	{
		"name": "Tortilla de queso, espinacas y aceitunas",
		"day": "lunes",
		"ingredientes": ["Huevo", "queso", "espinaca", "aceituna"],
		"schedule": "desayuno",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Crepas con mantequilla de almendra",
		"day": "Martes",
		"ingredientes": ["Huevo", "harina", "almendra", "leche deslactosada","mantequilla"],
		"schedule": "desayuno",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Huevos fritos con tocino",
		"day": "Miercoles",
		"ingredientes": ["Huevo", "aceite", "vegetal", "tocino normal"],
		"schedule": "desayuno",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Huevos revueltos",
		"day": "Jueves",
		"ingredientes": ["huevo", "mantequilla"],
		"schedule": "desayuno",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Wrap de salmon ahumado con aguacate",
		"day": "Viernes",
		"ingredientes": ["tortilla", "salmon ahumado", "aguacate"],
		"schedule": "desayuno",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Hotcakes",
		"day": "Sabado",
		"ingredientes": ["Huevo", "requeson", "mantequilla", "arandanos", "crema", "batida"],
		"schedule": "desayuno",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Ensalada de carne de res",
		"day": "Lunes",
		"ingredientes": ["aceite de sesamo", "jugo de limon", "tomate cherry", "bife de chorizo", "pepino", "lechuga", "cebolla", "cilantro", "semillas de sesamo"],
		"schedule": "comida",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Omelet",
		"day": "Martes",
		"ingredientes": ["Huevo", "mantequilla", "tomate cherry", "albaca", "queso mozarella"],
		"schedule": "comida",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Ensalada de aguacate y tocino",
		"day": "Miercoles",
		"ingredientes": ["limon", "mayonesa", "aceite de aguacate", "crema para batir", "queso de cabra", "tocino", "aguacate", "arugula", "nueces"],
		"schedule": "comida",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Plato de salmon",
		"day": "Jueves",
		"ingredientes": ["salmon", "ahumado", "mayonesa", "espinacas", "aceite de oliva"],
		"schedule": "comida",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Sopa de pollo",
		"day": "Viernes",
		"ingredientes": ["mantequilla", "apio",  "zetas", "ajo", "cebolla", "perejil", "pimienta negra", "caldo de pollo", "zanahoria", "pollo desmenusado"],
		"schedule": "comida",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Quesadillas",
		"day": "Sabado",
		"ingredientes": ["huevos", "queso crema", "queso canasta", "aceite de oliva"],
		"schedule": "comida",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Pollo con pesto",
		"day": "Lunes",
		"ingredientes": ["pollo", "aceite de oliva", "pesto rojo", "crema para batir", "aceitunas", "queso feta", "diente de ajo"],
		"schedule": "cena",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Pastel de carne",
		"day": "Martes",
		"ingredientes": ["almendra molida", "semilla de sesamo", "harina de almendra", "bicarbonato", "aceite de coco", "huevo", "agua", "requeson", "queso rayado", "carne molida", "albahaca"],
		"schedule": "cena",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Pizza",
		"day": "Miercoles",
		"ingredientes": ["Huevo", "queso mozzarella", "tomate", "oregano", "aceitunas", "aceite de oliva"],
		"schedule": "cena",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Tacos",
		"day": "Jueves",
		"ingredientes": ["Tortilla", "Queso crema", "res", "aguacate", "tomate", "limon", "cilantro"],
		"schedule": "cena",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Chuletas de cerdo",
		"day": "Viernes",
		"ingredientes": ["chulata de cerdo", "mantequilla", "ejotes", "perejil", "limon"],
		"schedule": "cena",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Hamburguesas",
		"day": "Sabado",
		"ingredientes": ["cordero", "queso feta", "perejil", "aceite de oliva", "crema", "tomate", "lechuga"],
		"schedule": "cena",
		"diet": "Keto",
		"Photo": "foto"
	}
]

const createMenus = menus.map(map => {
  const newMenu = new Menus(menu)
  return newMenu.save()
  .then(menu => {
    console.log(menu.name);
  })
  .catch(error => {
    throw new Error(`Impossible to add the author. ${error}`)
  })
})