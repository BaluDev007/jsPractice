// Program to find number of special indices of an array 
// an index said to be special index if we remove that element, the sum of even elemtes of Remining
// array must be equal to odd elements. 

// Observation, Once an element removed, all the even indexes after that element become odd and odd will become even


// Function to get even and odd prefix sums
function getPreSums(A) {
    let preSums = {
        preEvenSum : [],
        preOddSum : []
    }
    preSums.preEvenSum[0] = A[0]
    preSums.preOddSum[0] = 0
    for(let i = 1; i < A.length; i++){

        if(i % 2 == 0){ // for even index adding new even sum to even array and old odd sum to odd array
            preSums.preEvenSum[i] = preSums.preEvenSum[i-1] + A[i]
            preSums.preOddSum[i] = preSums.preOddSum[i - 1]
        }else{
            preSums.preOddSum[i] = preSums.preOddSum[i - 1] + A[i] 
            preSums.preEvenSum[i] = preSums.preEvenSum[i-1]
            
        }
    }
    

    return preSums

    
}

let {preOddSum, preEvenSum} = getPreSums(A)
let l = A.length
let count = 0
for(let i = 0; i<l;i++){
    if( i > 0){
        if(preEvenSum[i-1] + (preOddSum[l -1] - preOddSum[i]) == preOddSum[i - 1] + (preEvenSum[l -1] - preEvenSum[i]) ){
            count++
        }
    }else if(i == 0 && ((preOddSum[l -1] - preOddSum[i]) == (preEvenSum[l -1] - preEvenSum[i]))){
        count++

    }
   
}

console.log(count)