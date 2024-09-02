// Ques 1 : Given the head of a singly linked list, return true if it is
// a palindrome or false otherwise

// Input: head = [1,2,2,1]      ----->>>>>      Output: true;
// Input: head = [1,2]          ----->>>>>      Output: false;

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

// This is the Solution but we need the head from LinkedList so we want to create the head through below code
var isPalindrome = function(head) {
  let string1 = "";
  let string2 = "";
  let current = head;

  while (current !== null) {
    string1 = `${string1}${current.data}`;
    string2 = `${current.data}${string2}`;
    current = current.next;
  }
  return string1 === string2;
}  

//------------------------------------------------------------------------------------------------------------

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
linkedList.addAt(2, 2);
linkedList.addAt(3, 1);
linkedList.print();
console.log(`size = ${linkedList.size()}`);

const linkedList1 = new LinkedList();
linkedList1.addAt(0, 1);
linkedList1.addAt(1, 2);
linkedList1.print();
console.log(`size = ${linkedList1.size()}`);


console.log(isPalindrome(linkedList.head));
console.log(isPalindrome(linkedList1.head));

//------------------------------------------------------------------------------------------------------------

// Another Method to create Node head and Run the Function

function PalindromeRunFunction(){
  const head = new Node(1);
  head.next = new Node(5);
  head.next.next = new Node(2);
  head.next.next.next = new Node(5);
  head.next.next.next.next = new Node(1);

  const head1 = new Node(1);
  head1.next = new Node(2);

  console.log(isPalindrome(head));
  console.log(isPalindrome(head1));
};

PalindromeRunFunction();


// DataStructuresAndAlgorithms/RoadSideCoderDSA/LinkedList/palindromeLinkedList.js