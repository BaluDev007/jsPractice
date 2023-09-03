// Balanced: "()()()"
// In this case, the stack size remains zero throughout, but the parentheses are balanced.

// Balanced: "((()))"
// Here, the stack size varies, but the parentheses are still balanced.

// Not Balanced: "())("
// In this case, the stack size is even (0), but the parentheses are not balanced.

// must understand : what ever is the size of input string, most recent open bracket will always matched with current closing bracket in a balanced Paranthesis.




function isBalanced(ipStr){
    let matchingBrackets = {
        '{' : '}',
        "[" : ']',
        "(" : ')'
    }

    let stack = []

    for (let i of ipStr){
        if(i in matchingBrackets) // checking if i is the key... means that checking if i is open bracket
        {
            stack.push(i)
        }
        else{  // if currently iterating char is not open bracket
            let recentBracket = stack.pop()  // get the recent open bracket
            if(matchingBrackets[recentBracket] != i){  // check if current closing bracket is matching with recent open bracket
                return false
            }
        }

       
    }

     return stack.length === 0 
}

let ipStr = "{{{()}}[]}"
console.log(isBalanced(ipStr))