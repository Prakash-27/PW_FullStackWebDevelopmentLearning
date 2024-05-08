function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.greet = function(){
    console.log(`hello my name is ${this.name} and i am ${this.age} years old`);
}

let rahul = new Person("rahul", 21);
rahul.greet();
console.log(Person.prototype);
console.log(Person.prototype.constructor);