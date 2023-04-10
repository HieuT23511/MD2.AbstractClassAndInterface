"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tiger_1 = require("./Animals/Tiger");
var Chicken_1 = require("./Animals/Chicken");
var Apple_1 = require("./Fruits/Apple");
var Orange_1 = require("./Fruits/Orange");
console.log("--Animals--");
var animals = [new Tiger_1.Tiger(), new Chicken_1.Chicken()];
animals.forEach(function (eltAnimals) {
    console.log(eltAnimals.makeSound());
    if (eltAnimals instanceof Chicken_1.Chicken) {
        console.log(eltAnimals.howToEat());
    }
});
console.log("--Fruits--");
var fruit = [new Apple_1.Apple(), new Orange_1.Orange()];
fruit.forEach(function (eltFruits) {
    console.log(eltFruits.howToEat());
});
