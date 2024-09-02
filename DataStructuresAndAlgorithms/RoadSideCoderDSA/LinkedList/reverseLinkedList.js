// Ques 2 : Given the head of a singly linked list, reverse the list, and
// return the reversed list.

// Input: head = [1,2]      ----->>>>>      Output: [2,1];

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseList(head){
    let prev = null;
    let current = head;

    while(current != null){
        const nextNode = current.next
        current.next = prev
        prev = current
        current = nextNode;
    }
    return prev;
}

//-------------------------------------------------------------------------------------------

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

const linkedList = new LinkedList();
linkedList.addAt(0, 1);
linkedList.addAt(1, 2);
linkedList.addAt(2, 3);
linkedList.addAt(3, 4);
linkedList.addAt(4, 5);
linkedList.print();
console.log(`Size = ${linkedList.size()}`);

console.log(linkedList.head);

// Node {
//     data: 1,
//     next: Node { data: 2, next: Node { data: 3, next: [Node] } }
// }

console.log(reverseList(linkedList.head));

// Node {
//     data: 5,
//     next: Node { data: 4, next: Node { data: 3, next: [Node] } }
// }

//-------------------------------------------------------------------------------------------

// Alternate 

function reverseListRunFunction(){
    const head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);
    head.next.next.next.next = new Node(5);

    return reverseList(head);
}

console.log(reverseListRunFunction());
// Node {
//     data: 5,
//     next: Node { data: 4, next: Node { data: 3, next: [Node] } }
// }


// DataStructuresAndAlgorithms/RoadSideCoderDSA/LinkedList/reverseLinkedList.js