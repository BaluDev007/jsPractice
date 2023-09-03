function callBackFun(){
    console.log("I am a callback function")
}

function originalFun(abc){
    abc()
console.log("I am original function")

}

originalFun(callBackFun)