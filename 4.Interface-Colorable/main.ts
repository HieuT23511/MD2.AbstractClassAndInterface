import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";
import {Shape} from "./Shape";

let circle = new Circle('circle 1', 5);
let rectangle = new Rectangle(5, 10, 'rect');
let square = new Square('sqr', 5);
let arr = [square, circle, rectangle];
arr.forEach((elt:Square|Rectangle|Circle) => {
    console.log(elt);
    console.log(`The Area is: ${elt.calculateArea()}`)
    if ("howToColor" in elt) {
        elt.howToColor();
    }
    // console.log(`are is ${elt.calculateArea()}`)
    // if (elt instanceof Square){
    //     elt.howToColor()
    // }
});
