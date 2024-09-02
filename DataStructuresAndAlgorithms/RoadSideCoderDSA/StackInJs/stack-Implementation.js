class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if(this.isEmpty()) {
           return "Stack is Empty. Can't perform pop."; 
        }

        return this.stack.pop();
    }

    peek(){
        if(this.isEmpty()) {
            return "Stack is Empty. Can't perform peek.";
        }
        
        return this.stack[this.size() - 1];
    }

    isEmpty(){
        return this.size() === 0;
    }

    size(){
        return this.stack.length;
    }

    printStack() {
        if(this.isEmpty()) {
            return "Stack is Empty."
        }
        return [...this.stack];
    }
}

const stack = new Stack();
stack.push(10);
stack.push(69);
stack.push(420);

console.log(stack.printStack());
console.log(stack.size());


console.log(stack.pop());
console.log(stack.peek());
console.log(stack.printStack());

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop()); // Stack is Empty. Can't perform pop.
// console.log(stack.peek()); // Stack is Empty. Can't perform peek.
// console.log(stack.isEmpty()); // true
// console.log(stack.size()); // 0
// console.log(stack.printStack()); // Stack is Empty.




// DataStructuresAndAlgorithms/RoadSideCoderDSA/StackInJs/stack-Implementation.js
