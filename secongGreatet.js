// *********************** 2nd and 3rd largest numbers *************************************

const arr = [4,2,7,23,123,979,20,432]

let highest = arr[0]
let secHighest = arr[0]
let thirdHighest = arr[0]

for (let i = 0; i < arr.length; i++){
    if(highest < arr[i]){            // If heighest is updating, assign heighest to 2nd height and second heighest to 3rd heighest
        thirdHighest = secHighest 
        secHighest = highest 
        highest = arr[i]
    }else if(secHighest < arr[i]){
        thirdHighest = secHighest
        secHighest = arr[i]
    }else if(thirdHighest < arr[i]){    // condition to check if a number is greater than 3rd heighest after finding 2nd heighest
        thirdHighest = arr[i]
    }
}

console.log(highest, secHighest, thirdHighest)