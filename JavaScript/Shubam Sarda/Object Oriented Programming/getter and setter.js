class User{
    constructor(first, last){
        this.first = first;
        this.last = last;
    }
    full_Name(){
        return `${this.first} ${this.last}`;
    }
    get fullName(){
        return `${this.first} ${this.last}`;
    }
    set fullName(newValue){ //we are updating the value here, SHUBHAM SARDA is a newValue here
        const [first, last] = newValue.split(" "); //newValue is split SHUBHAM SARDA, SHUBHAM stored in deconstructed array first, SARDA stored in deconstructed array last
        this.first = first; //then we are updating it to the constructor
        this.last = last;
    }
}

const guest = new User("Shubham", "Sarda");
console.log(guest.first);
console.log(guest.last);
console.log(guest.full_Name()); //Normal Method
console.log(guest.fullName); //get keyword can make a method to property

console.log("--------");
// set the first and fullName
guest.first = "SHUBHAM";
console.log(guest.fullName); // SHUBHAM Sarda
guest.fullName = "SHUBHAM SARDA";
console.log(guest.fullName); // SHUBHAM SARDA