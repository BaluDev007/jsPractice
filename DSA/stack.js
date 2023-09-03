// ****************** STACK **************************

//  "A stack is an ordered collection of items in which the addition of 
// new items and the removal of existing items always occurs at the same end, known as the 'top.'
// This end represents the most recently added item, while the opposite end is called the 'base.'
// The 'last in, first out' (LIFO) principle governs the behavior of a stack, 
// meaning that the item most recently added to the stack is the first one to be removed."

// For EX : Stacks can be used in any real world applications where there is a need of LIFO requirement
// like if we have stack of books and get to know what is on the top, or we can access the 
//most recent app that opened on the phone or to get back to out previous tab by removing(pop) the current tab...etc

// **************** creating a STACK *******************
// we can perform below operatopns on stack. let's create a Stack here.
// push -> adding a new item in the end of array,
// pop -> removing the most recent/ top element of the stack
// peak -> access the most recent element of the stack
// size => know the size of the stack.

class Stack{
    constructor(){
         this.count = 0
         this.items = []
    }

    // push method to add a new element to the stack of items 
    push(newItem){
        this.items[this.count] =  newItem
        
        this.count++
        return this.count
    }

    // pop method to remove the most recently added element
    pop(){
        if(this.isEmpty()){

            throw new Error ("Stack is Empty.")
        }
       let result = this.items[this.count-1]
        delete this.items[this.count-1]
        this.count--
        return result
    }
    // peak method to get the most recent/top element of the stack
    peek(){
        if(this.isEmpty())
            throw new Error("No element present in the Stack")
        return this.items[this.count-1]
    }
// size method to get the size of the stack
    size(){
        return this.count
    }

    // isEmpty method to check if the stack is empty or not
    isEmpty(){
        if (this.count === 0)
        return true
        return false

    }
}

const myStack = new Stack()
myStack.push(1312)
myStack.push(1313)
myStack.push(1314)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.size())
console.log(myStack.peek())