class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    static Organization = "TATA"
    greet(){
        console.log(`hello my name is ${this.name} and i am ${this.age} years old`);
    }
}

const john = new Person('john', 21);
const johnny = new Person('johnny', 29);
john.greet();
johnny.greet();
// console.log(john.Organization);
console.log(Person.Organization); //This is for static keyword


//Above Class is Actually works behind like a function.
function NewPerson(name, age){
    this.name = name;
    this.age = age;
}

NewPerson.prototype.greet = function(){
    console.log(`hello my name is ${this.name} and i am ${this.age} years old`);
}

let rahul = new NewPerson("rahul", 32);
rahul.greet();

//-----------------------------------------------------------------------------------------------
//Inheritance:

class Animal {
    constructor(name){
        this.name = name
    }
}

class Dog extends Animal {
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
}

const myDog = new Dog("rex", "Golden Retriever");
