// Ques 1: Circular Queue Implementation
// Design your Implementation of the circular queue. The circular queue is a 
// linear data structure in which the operations are performed based on First In First out
// principle, and the last position is connected back to the first position to make a circle.

let myCircularQueue = function(k) {
    this.queue = [];
    this.size = k;
};

myCircularQueue.prototype.enQueue = function(value) {
    if (this.size === this.queue.length) return "Queue is Full";
    this.queue.push(value);
    return true;
};
myCircularQueue.prototype.deQueue = function() {
    if (this.queue.length === 0) return false;
    this.queue.shift();
    return true;
};
myCircularQueue.prototype.Front = function() {
    if (this.queue.length === 0) return -1;
    return this.queue[0];    
};
myCircularQueue.prototype.Rear = function() {
    if (this.queue.length === 0) {
        return -1;
    } else if (this.queue.length > this.size) {
        return "Queue is Full."
    }
    return this.queue[this.queue.length - 1];
};
myCircularQueue.prototype.isEmpty = function() {
    return this.queue.length === 0;
};
myCircularQueue.prototype.isFull = function() {
    return this.size === this.queue.length;
};

myCircularQueue.prototype.printQueue = function() {
    if (this.queue.length === 0) return false;
    return this.queue.map(que => que);
};

const obj = new myCircularQueue(3);
obj.enQueue(1);
obj.enQueue(4);
obj.enQueue(2);
console.log("queue: " + obj.printQueue());
console.log(`Front: ${obj.Front()}, Rear: ${obj.Rear()}`);
obj.deQueue();
console.log("queue: " + obj.printQueue());
console.log(`Front: ${obj.Front()}, Rear: ${obj.Rear()}`);
obj.enQueue(5);
console.log("queue: " + obj.printQueue());
console.log(`Front: ${obj.Front()}, Rear: ${obj.Rear()}`);
obj.deQueue();
console.log("queue: " + obj.printQueue());
console.log(`Front: ${obj.Front()}, Rear: ${obj.Rear()}`);
obj.enQueue(72);
console.log("queue: " + obj.printQueue());
console.log(`Front: ${obj.Front()}, Rear: ${obj.Rear()}`);


// DataStructuresAndAlgorithms/RoadSideCoderDSA/QueueInJS/circularQueue.js
