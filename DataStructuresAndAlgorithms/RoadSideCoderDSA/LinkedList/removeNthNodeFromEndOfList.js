// Given the head of a linked list remove the nth Node from the end of the list and return its head.

// Input: head = [1,2,3,4,5], n = 2 ----->>>>> Output: [1,2,3,5]
// Input: head = [1], n = 1 ----->>>>> Output: []

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
}

function removeNthNodeFromEndList(head, n){
    let slow = head;
    let fast = head;

    for(let i = 0; i < n; i++){
        fast = fast.next;
    }

    if(fast === null){
        return head.next;
    }

    while(fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    
    return head;
};


function removeNthNodeFromEndListRunFunc(){
    const head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);
    head.next.next.next.next = new Node(5);

    return removeNthNodeFromEndList(head, 2);
        
}

// console.log(removeNthNodeFromEndListRunFunc());

//-----------------------------------------------------------------------------------------------------------------

class LinkedList {
   constructor() {
     this.head = null;
   }
   
   addFirst(data) {
     const newNode = new Node(data);
     newNode.next = this.head;
     this.head = newNode;
   }
   
   addLast(data) {
     const newNode = new Node(data);
   
     if (!this.head) {
       this.head = newNode;
       return;
     }
   
     let current = this.head;
     while (current.next) {
       current = current.next;
     }
   
     current.next = newNode;
   }
   
   size() {
     let count = 0;
     let current = this.head;
     while (current) {
       count++;
       current = current.next;
     }
     return count;
   }
   
   addAt(index, data) {
     if (index < 0 || index > this.size()) {
       console.error("Invalid Index");
       return;
     }
   
     const newNode = new Node(data);
     if (index === 0) {
       newNode.next = this.head;
       this.head = newNode;
       return;
     }
   
     let current = this.head;
     for (let i = 0; i < index - 1; i++) {
       current = current.next;
     }
   
     newNode.next = current.next;
     current.next = newNode;
   }
   
   removeTop() {
     if (!this.head) {
       return;
     }
   
     this.head = this.head.next;
   }
   
   removeLast() {
     if (!this.head) {
       return;
     }
   
     let current = this.head;
     while (current.next.next) {
       current = current.next;
     }
   
     current.next = null;
   }
   
   removeAt(index) {
     if (index < 0 || index > this.size()) {
       console.error("Invalid Index");
       return;
     }
   
     if (index === 0) {
       this.head = this.head.next;
       return;
     }
   
     let current = this.head;
     for (let i = 0; i < index - 1; i++) {
       current = current.next;
     }
   
     if (current.next) {
       current.next = current.next.next;
     }
   }
   
   print() {
     let current = this.head;
     while (current != null) {
       console.log(current.data);
       current = current.next;
     }
   }
}  
  
const linkedlist = new LinkedList();
linkedlist.addAt(0, 1);
linkedlist.addAt(1, 2);
linkedlist.addAt(2, 3);
linkedlist.addAt(3, 4);
linkedlist.addAt(4, 5);
linkedlist.print();
console.log("size = " + linkedlist.size());

console.log(linkedlist.head);
// Node {
//     data: 1,
//     next: Node { data: 2, next: Node { data: 3, next: Node { data: 5, next: null } } }
// }
console.log(removeNthNodeFromEndList(linkedlist.head, 2));
// Node {
//     data: 1,
//     next: Node { data: 2, next: Node { data: 3, next: Node { data: 5, next: null } } }
// }
console.log(linkedlist.head === removeNthNodeFromEndList(linkedlist.head, 2)); // true

const linkedlist1 = new LinkedList();
linkedlist1.addAt(0, 1);
linkedlist1.print();
console.log("size = " + linkedlist1.size());

console.log(linkedlist1.head); // Node { data: 1, next: null }

console.log(removeNthNodeFromEndList(linkedlist1.head, 1)); // null

console.log(linkedlist1.head === removeNthNodeFromEndList(linkedlist1.head, 1)); // false


// DataStructuresAndAlgorithms/RoadSideCoderDSA/LinkedList/removeNthNodeFromEndOfList.js