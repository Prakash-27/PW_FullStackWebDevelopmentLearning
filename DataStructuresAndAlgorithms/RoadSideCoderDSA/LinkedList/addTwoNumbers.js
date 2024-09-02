// You are given two non-empty linked lists representing two non-negative 
// integers. The digits are stored in reverse order, and each of their nodes
// contains a single digit. Add the two numbers and return the sum as a Linked List.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself

//Examples 1:
//Input:  2 -----> 4 -----> 3 l1 = [2,4,3]     Output:  7 -----> 0 -----> 8 [7,0,8]
//        5 -----> 6 -----> 4 l2 = [5,6,4]
// Explanation: 342 + 465 =  708

//Examples 2:
//Input: l1 = [0], l2 = [0]
//Output: [0]

//Examples 3:
//Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//Output: [8,9,9,9,0,0,0,1]

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function addTwoNumbers(L1, L2){
    let dummyList = new Node(0);
    let current = dummyList;
    let carry = 0;

    while(L1 !== null || L2 !== null || carry > 0){
        const listOneValue = L1 ? L1.data : 0; 
        const listTwoValue = L2 ? L2.data : 0; 

        let sum = listOneValue + listTwoValue + carry;
        carry = Math.floor(sum/10);
        sum = sum % 10;

        current.next = new Node(sum);
        current = current.next;
        
        if(L1) L1 = L1.next;
        if(L2) L2 = L2.next;
    }
    return dummyList.next;
}

function addTwoNumbersRunFunc(){
    const listOne = new Node(2);
    listOne.next = new Node(4);
    listOne.next.next = new Node(3);

    const listTwo = new Node(5);
    listTwo.next = new Node(6);
    listTwo.next.next = new Node(4);

    const listThree = new Node(9);
    listThree.next = new Node(9);
    listThree.next.next = new Node(9);
    listThree.next.next.next = new Node(9);
    listThree.next.next.next.next = new Node(9);
    listThree.next.next.next.next.next = new Node(9);
    listThree.next.next.next.next.next.next = new Node(9);

    const listFour = new Node(9);
    listFour.next = new Node(9);
    listFour.next.next = new Node(9);
    listFour.next.next.next = new Node(9);

    return {
       addTwoNumbersFirstFunc: addTwoNumbers(listOne, listTwo),
       addTwoNumbersSecondFunc: addTwoNumbers(listThree, listFour),
    };
}

console.log(addTwoNumbersRunFunc());



//------------------------------------------------------------------------------------------------------------------

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

const linkedlistOne = new LinkedList();
linkedlistOne.addAt(0, 0);
linkedlistOne.print();
console.log("size = " + linkedlistOne.size());


const linkedlistTwo = new LinkedList();
linkedlistTwo.addAt(0, 0);
linkedlistTwo.print();
console.log("size = " + linkedlistTwo.size());


console.log(addTwoNumbers(linkedlistOne.head, linkedlistTwo.head)); // Node { data: 0, next: null }




// DataStructuresAndAlgorithms/RoadSideCoderDSA/LinkedList/addTwoNumbers.js



