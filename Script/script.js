// What is typeScrript 
// Typescript is typed superset of Js that compiles to plain JS
// It is pure object oriented and typed like c# and java
// compile time error
// This allow us to identify the error erlier, and potentially save hours of debugging
// Our JS code
// console.log("Hello World")
// Decelarition Data Types
var myNum;
myNum = 15;
console.log(myNum);
var myName;
console.log("Muhammad Usman");
var boolVal = true;
console.log(boolVal);
// Arrays
var array = ["usman"];
array.push("Ramzan");
console.log(array);
var Mixarray = ["Muhammad Usman", 19];
console.log(Mixarray);
// Push Different DataType Values in array
// Just String type Variables are store in this array 
var arrayStr = [];
arrayStr.push("Usman");
arrayStr.push("Ramzan");
console.log(arrayStr);
// Any type of varrible can store in this type in array
var anyArray = [];
anyArray.push("Usman"),
    anyArray.push(19);
anyArray.push(false);
console.log(anyArray);
// type Assertions 
// Type Assertion has two forms 
// i)"Angle Bracket"syntax
// ii) the other is "as-syntax"
var myFirstName = "Usman";
// (myFirstName as string).length;
console.log(myFirstName.length);
console.log(myFirstName.length);
// ?Arrow Function 
var myNameFun = function () {
    var firstName = "Muhammad";
    var lastName = "Ramzan";
    console.log(firstName + " " + lastName);
};
myNameFun();
// Calling the parametere name as the object in the function 
var nameTS = function (name) {
    console.log(name.firstName);
    console.log(name.lastName);
};
nameTS({
    firstName: "Muhammad",
    lastName: "Ramzan"
});
var objDelr = function (namePro) {
    console.log(namePro.MynameAgain);
    console.log(namePro.MyFatherName);
};
objDelr({
    MynameAgain: "usman",
    MyFatherName: "Rmazan"
});
