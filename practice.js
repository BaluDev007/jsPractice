// 2nd and 3rd largest number ***********************************************************************

// const arr = [4,2,7,23,123,979,20,432]

// let highest = arr[0]
// let secHighest = arr[0]
// let thirdHighest = arr[0]

// for (let i = 0; i < arr.length; i++){
//     if(highest < arr[i]){
//         thirdHighest = secHighest
//         secHighest = highest
//         highest = arr[i]
//     }else if(secHighest < arr[i]){
//         thirdHighest = secHighest
//         secHighest = arr[i]
//     }else if(thirdHighest < arr[i]){
//         thirdHighest = arr[i]
//     }
// }

// console.log(highest, secHighest, thirdHighest)


// Fizz Buzz ***********************************************************************************

// const n = 16

// for (let i = 1; i < n; i++){
//     let word = ""
//     if(i %3 == 0){
// word += "FIZZ"
//     }
//     if(i % 5 == 0){
//         word += "BUZZ"
//     }
//     console.log(word || i)
// }


// Valid palindrome 2 -> you can remove atmost one char from string 

const ValidPalindrome = (ipStr) => {
    let leftIndex = 0
    let rightIndex = ipStr.length - 1

    while(leftIndex < rightIndex){
        if(ipStr[leftIndex] !== ipStr[rightIndex]){
            return isPalindrome(leftIndex+1, rightIndex, ipStr) || isPalindrome(leftIndex, rightIndex-1, ipStr)
        }

        leftIndex++
        rightIndex--
    }
    return true

}
const isPalindrome = (leftIndex, rightIndex, ipStr) => {
    console.log(leftIndex, rightIndex)
while(leftIndex<rightIndex){
    if(ipStr[leftIndex] != ipStr[rightIndex]){
        return false
    }
    leftIndex++
    rightIndex--
}
return true
}



let ipStr = "malayalaam"
console.log(ValidPalindrome(ipStr))
