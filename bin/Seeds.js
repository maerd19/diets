const mongoose = require('mongoose');
const Food = require('../models/Food');

const dbtitle = 'library-project';
mongoose
	.connect('mongodb://localhost/module2', {useNewUrlParser: true, useUnifiedTopology: true})

const foods = [
	{
		"name": "Tortilla de queso, espinacas y aceitunas",
		"day": "lunes",
		"Ingredientes": ["Huevo", "queso", "espinaca", "aceituna"],
		"schedule": "desayuno",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Crepas con mantequilla de almendra",
		"day": "Martes",
		"Ingredientes": ["Huevo", "harina", "almendra", "leche", "deslactosada","mantequilla"],
		"schedule": "desayuno",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Huevos fritos con tocino",
		"day": "Miercoles",
		"Ingredientes": ["Huevo", "aceite", "vegetal", "tocino", "normal"],
		"schedule": "desayuno",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Huevos revueltos",
		"day": "Jueves",
		"Ingredientes": ["huevo", "mantequilla"],
		"schedule": "desayuno",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Wrap de salmon ahumado con aguacate",
		"day": "Viernes",
		"Ingredientes": ["tortilla", "salmon", "ahumado", "aguacate"],
		"schedule": "desayuno",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Hotcakes",
		"day": "Sabado",
		"Ingredientes": ["Huevo", "requeson", "mantequilla", "arandanos", "crema", "batida"],
		"schedule": "desayuno",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Ensalada de carne de res",
		"day": "Lunes",
		"Ingredientes": ["aceite de sesamo", "jugo de limon", "tomate cherry", "bife de chorizo", "pepino", "lechuga", "cebolla", "cilantro", "semillas de sesamo"],
		"schedule": "comida",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Omelet",
		"day": "Martes",
		"Ingredientes": ["Huevo", "mantequilla", "tomate cherry", "albaca", "queso mozarella"],
		"schedule": "comida",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Ensalada de aguacate y tocino",
		"day": "Miercoles",
		"Ingredientes": ["limon", "mayonesa", "aceite de aguacate", "crema para batir", "queso de cabra", "tocino", "aguacate", "arugula", "nueces"],
		"schedule": "comida",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Plato de salmon",
		"day": "Jueves",
		"Ingredientes": ["salmon", "ahumado", "mayonesa", "espinacas", "aceite de oliva"],
		"schedule": "comida",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Sopa de pollo",
		"day": "Viernes",
		"Ingredientes": ["mantequilla", "apio",  "zetas", "ajo", "cebolla", "perejil", "pimienta negra", "caldo de pollo", "zanahoria", "pollo desmenusado"],
		"schedule": "comida",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Quesadillas",
		"day": "Sabado",
		"Ingredientes": ["huevos", "queso crema", "queso canasta", "aceite de oliva"],
		"schedule": "comida",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Pollo con pesto",
		"day": "Lunes",
		"Ingredientes": ["pollo", "aceite de oliva", "pesto rojo", "crema para batir", "aceitunas", "queso feta", "diente de ajo"],
		"schedule": "cena",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Pastel de carne",
		"day": "Martes",
		"Ingredientes": ["almendra molida", "semilla de sesamo", "harina de almendra", "bicarbonato", "aceite de coco", "huevo", "agua", "requeson", "queso rayado", "carne molida", "albahaca"],
		"schedule": "cena",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Pizza",
		"day": "Miercoles",
		"Ingredientes": ["Huevo", "queso mozzarella", "tomate", "oregano", "aceitunas", "aceite de oliva"],
		"schedule": "cena",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Tacos",
		"day": "Jueves",
		"Ingredientes": ["Tortilla", "Queso crema", "res", "aguacate", "tomate", "limon", "cilantro"],
		"schedule": "cena",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Chuletas de cerdo",
		"day": "Viernes",
		"Ingredientes": ["chulata de cerdo", "mantequilla", "ejotes", "perejil", "limon"],
		"schedule": "cena",
		"diet": "Keto",
		"Photo": "foto"
	},
	{
		"name": "Hamburguesas",
		"day": "Sabado",
		"Ingredientes": ["cordero", "queso feta", "perejil", "aceite de oliva", "crema", "tomate", "lechuga"],
		"schedule": "cena",
		"diet": "Keto",
		"Photo": "foto"
	}
]

const createFoods = foods.map(food => {
  const newFood = new Food(food)
  return newFood.save()
  .then(food => {
    return food.name;
  })
  .catch(error => {
    throw new Error(`Impossible to add the author. ${error}`)
  })
})