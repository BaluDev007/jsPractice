let arr = [1,2,4,2,5,7,3,3,3,4,1,2,7]
// let uniqArr = []
// for (let i of arr){
//     if(!uniqArr.includes(i)){
//         uniqArr.push(i)
//     }
// }

let repArr = []

function findRepeatedNumbers(arr) {
    const numCount = {};
    const repeatedNumbers = [];
  
    // Count the occurrences of each number
    for (const num of arr) {
      numCount[num] = (numCount[num] || 0) + 1;
    }
    return numCount
}

let numCount = findRepeatedNumbers(arr)
for (let i in numCount){
    if(numCount[i] > 1){
        console.log(i)
    }
}


