// Ques 3 : Implement Queue using Stacks
// Implement a first in first out(FIFO) queue using only two stacks.
// The implemented queue should have all functions of queue(enqueue, front, dequeue, and empty).

let myQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

myQueue.prototype.enqueue = function(value) {
    this.s1.push(value);
};

myQueue.prototype.dequeue = function() {
    if(this.s2.length === 0) {
        while(this.s1.length > 0) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2.pop();
};

myQueue.prototype.Front = function() {
    if(this.s2.length === 0) {
        while(this.s1.length > 0) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2[this.s2.length - 1];
};

myQueue.prototype.Empty = function() {
    return this.s1.length === 0 && this.s2.length === 0;
};

myQueue.prototype.print = function() {
    if (this.s1.length === 0 && this.s2.length === 0) {
        return false;
    } 
    return {
        s2: this.s2.map(stac => stac),
        s1: this.s1.map(stac => stac),
    }; 
};

const queue = new myQueue();
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.print());
queue.dequeue();
console.log(queue.print());

console.log(queue.Front());

// DataStructuresAndAlgorithms/RoadSideCoderDSA/QueueInJS/implementQueueUsingStack.js
