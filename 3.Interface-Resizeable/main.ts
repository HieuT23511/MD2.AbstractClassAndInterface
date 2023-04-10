import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

let percent = Math.floor(Math.random()*100);
let circle = new Circle('circle 1',5);
let rectangle = new Rectangle(5,10,'rect');
let square = new Square('sqr',5);
let arr = [circle,rectangle,square];
arr.forEach(elt=>{
    console.log(elt);
    console.log(`The initial Area is: ${elt.calculateArea()}`);
    elt.resize(percent);
    console.log(`The after resize Area is: ${elt.calculateArea()}`);
});
