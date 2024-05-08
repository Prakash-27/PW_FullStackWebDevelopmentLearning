function Person(name){
    this.name = name // instance member
}

Person.prototype.greet = function(){ //prototype member
    console.log(`My name is ${this.name}`);
}

function Employee(name, empId){
    this.name = name
    this.empId = empId
}

//1st Type
Employee.prototype = Object.create(Person.prototype);
//2nd Type
// Employee.prototype.constructor = Employee

let sanket = new Employee("sanket", 2323);
sanket.greet();