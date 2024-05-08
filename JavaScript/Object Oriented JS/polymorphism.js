class Animal {
    constructor(name){
        this.name = name
    }
    makeSound(){
        console.log("Generic Sound");
    }
}

class Dog extends Animal {
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
    makeSound(){
        console.log("Woof Woof");
    }
}

class Cat extends Animal {
    constructor(name, color){
        super(name)
        this.color = color
    }
    makeSound(){
        console.log("Meow");
    }
}

const gp = new Animal("GP");
const tim = new Dog("tim", "Golden Retreiver");
const tom = new Cat("TOM", "white");

gp.makeSound();
tim.makeSound();
tom.makeSound();