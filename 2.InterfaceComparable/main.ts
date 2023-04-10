import {ComparableCircle} from "./ComparableCircle";

let circle = [new ComparableCircle(10),new ComparableCircle(20)];
let resultCompare = circle[0].compareTo(circle[1]);
if(resultCompare ===1){
    console.log(`The circle with radius = ${circle[0].getRadius()} is larger the circle with radius ${circle[1].getRadius()} `)
}else if (resultCompare !==1){
    console.log(`The circle with radius = ${circle[0].getRadius()} is smaller the circle with radius ${circle[1].getRadius()}`)
}else {
    console.log(`Two circle is equal size`);
}