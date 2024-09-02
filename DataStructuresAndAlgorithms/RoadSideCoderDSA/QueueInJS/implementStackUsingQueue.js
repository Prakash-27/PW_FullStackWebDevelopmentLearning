// Ques 2 : Implement Stack using Queues
// Implement a last -in -first -out(LIFO) stack using only two queues.
// The implemented stack should support all the functions of a stack (push, top, pop, and empty).

let myStack = function() {
    this.q1 = [];
    this.q2 = [];
};

myStack.prototype.push = function(value) {
    while(this.q1.length !== 0) {
        this.q2.push(this.q1.shift());
    }
    this.q1.push(value);
    while(this.q2.length !== 0) {
        this.q1.push(this.q2.shift());
    }
};

myStack.prototype.pop = function() {
    return this.q1.shift();
};

myStack.prototype.top = function() {
    return this.q1[0];
};

myStack.prototype.empty = function() {
    return this.q1.length === 0;
};

myStack.prototype.print = function() {
    if (this.q1.length === 0) return false;
    return this.q1.map(que => que);
};

const stack = new myStack();
stack.push(3);
stack.push(5);
stack.push(96);
stack.push(24);
stack.pop();
console.log(stack.top());
console.log(stack.print());



// DataStructuresAndAlgorithms/RoadSideCoderDSA/QueueInJS/implementStackUsingQueue.js