import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

let circle = new Circle('circle 1', 5);
let rectangle = new Rectangle(5, 10, 'rect');
let square = new Square('sqr', 5);
let arr = [square, circle, rectangle];
arr.forEach((elt: any) => {
    console.log(elt);
    console.log(`The Area is: ${elt.calculateArea()}`)
    if ("howToColor" in elt) {
        elt.howToColor();
    }
});
