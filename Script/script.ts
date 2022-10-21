// What is typeScrript 
// Typescript is typed superset of Js that compiles to plain JS

// It is pure object oriented and typed like c# and java

// compile time error
// This allow us to identify the error erlier, and potentially save hours of debugging
// Our JS code

// console.log("Hello World")

// Decelarition Data Types

let myNum:number;
myNum=15;
console.log(myNum);
let myName:string;
console.log("Muhammad Usman");
const boolVal:boolean=true;
console.log(boolVal);

// Arrays
let array=["usman"];
array.push("Ramzan");
console.log(array);
let Mixarray=["Muhammad Usman",19]
console.log(Mixarray);

// Push Different DataType Values in array

// Just String type Variables are store in this array 
let arrayStr:string[]=[];
arrayStr.push("Usman");
arrayStr.push("Ramzan")

console.log(arrayStr);

// Any type of varrible can store in this type in array
let anyArray:any[]=[];
anyArray.push("Usman"),
anyArray.push(19)
anyArray.push(false)
console.log(anyArray);

// type Assertions 
// Type Assertion has two forms 
// i)"Angle Bracket"syntax
// ii) the other is "as-syntax"

let myFirstName="Usman";
// (myFirstName as string).length;
console.log((myFirstName as string).length);
console.log((<string>myFirstName).length);

// ?Arrow Function 
let myNameFun=()=>{
    let firstName :string="Muhammad";
    let lastName :string="Ramzan";
    console.log(firstName+" "+lastName);
    
}
myNameFun();

// Calling the parametere name as the object in the function 
let nameTS=(name)=>{
console.log(name.firstName);
console.log(name.lastName);

}
nameTS({
    firstName:"Muhammad",
    lastName:"Ramzan"
})

// decleration of object varibles 

// interface 

interface NamePro{
     MynameAgain:string;
      MyFatherName:string;
}
let objDelr=(namePro:NamePro)=>{
console.log(namePro.MynameAgain);
console.log(namePro.MyFatherName);
}
objDelr({
     MynameAgain:"usman",
     MyFatherName:"Rmazan"
});