// Closures in js means that when functions are nested the inner function can access outer function's variables.
// But, it generally happens by the concept of lexical scope right?...

// Yes, but a closure means that once the outer function's scope finished, 
// we can still access it's variables using inner function, outside of the outer function as shown below.


function outer(){
const name = "Balu"
console.log("from outer functon : " , name)
function inner(){
    let surname = "Lagadapati"
    console.log("From inner function : ", name + " " + surname)
}

return inner
}

const getFullName = outer() // as we called outer() means outer function will be executed and returned something means it's executional scope end here.
getFullName() // But, we can still able to access outer function's variable i.e name as outer function returning a function which has access to it's variable name. and all this is happening outside of outer function. that is what a closure can do.

// Now let's think about can we access a functional variable outside the function..? after it returns something :)