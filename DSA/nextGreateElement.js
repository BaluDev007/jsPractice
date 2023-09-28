function nextGreaterElement(nums) {
    let resultArray = [-1,-1,-1,-1,-1]
    let stack = []
    for (let i = 0; i < nums.length; i++){

        while(stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]){
            let index = stack.pop()
            resultArray[index] = nums[i]
        }
        stack.push(i)

    }
    return  resultArray
}

// Example usage:
const inputArray = [4,5,2,10,8];
const resultArray = nextGreaterElement(inputArray);
console.log(resultArray); // Output: [5, 10, 10, -1, -1]
