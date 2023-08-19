// Valid palindrome 2 -> you can remove atmost one char from string 


// Function to check if the main string is palindrome.
const ValidPalindrome = (ipStr) => {
    let leftIndex = 0
    let rightIndex = ipStr.length - 1

    while(leftIndex < rightIndex){
        // if there is any mismatch then checking for two passinble cases by skipping
        // one char from left or one char from right if the reminig string a palindrome
        if(ipStr[leftIndex] !== ipStr[rightIndex]){
            return isPalindrome(leftIndex+1, rightIndex, ipStr) || isPalindrome(leftIndex, rightIndex-1, ipStr)
        }

        leftIndex++
        rightIndex--
    }
    return true

}
// Function to check if the reminig string is a palindrome or not
const isPalindrome = (leftIndex, rightIndex, ipStr) => {
    
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
