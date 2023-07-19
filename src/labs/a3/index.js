import JavaScript from "./java-script";

function Assignment3() {

    return (
    <div>
        <h1>Assignment 3</h1>
        <JavaScript />

    </div>
    );

    
    }
export default Assignment3;

var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
functionScoped, blockScoped,
constant1, numberArray1, stringArray1
];
console.log(variableArray1)