import {Tiger} from "./Animals/Tiger";
import {Chicken} from "./Animals/Chicken";
import {Apple} from "./Fruits/Apple";
import {Orange} from "./Fruits/Orange";

console.log(`--Animals--`);
let animals = [new Tiger(), new Chicken()];
animals.forEach(eltAnimals => {
    console.log(eltAnimals.makeSound())
    if (eltAnimals instanceof Chicken) {
        console.log(eltAnimals.howToEat());
    }
});
console.log(`--Fruits--`);
let fruit = [new Apple(), new Orange()];
fruit.forEach(eltFruits=>{
    console.log(eltFruits.howToEat())
})

