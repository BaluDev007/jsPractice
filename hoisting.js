// Hoisting is behaviour of js to move all the "declarations" to top of it's scope

//ex 1 

console.log(name) // undefined
var name = "balu"
console.log(name) // balu

// In ex 1. we can see that 1st console given undefined. i.e because the declaration of name
// will be moved to top of it's scope and initialised with undefined. this behaviour is called hoisting and it will happen with only var declarations.


// //ex 2 
console.log(name2) // error : name2 can't be acceseed before its initialization
let name2 = "bala"
console.log(name2) // bala

// // from ex 2 : we can understand that unlike var , let and const variables are just hoisted 
// //with declarations but not initialized with undefined. so that is the reson to get that error message.

// // ex3 

console.log(abc()) // Lagadapati
function abc(){
    let name = "Lagadapati"
    return name
    
}

// in ex3 : same as variables function declaration also hoisted. only regular function declaration 
// function expressions or arrow functions will not be hoisted 

// ex : function expressions
getName() //  error : getName is not a function
var getName = function abcd(){
    console.log("hello")
}


// ex : arrow function 
getName2() // ReferenceError: Cannot access 'getName2' before initialization
const getName2 = () => {
    console.log("namaste")
}


