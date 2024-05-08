//Constructor Function
function Person(name, age){
    this.name = name
    this.age = age
    this.greet = function(){
        console.log(`hello my name is ${this.name} and i am ${this.age} years old`);
    }
}

let john = new Person('john', 21);
john.greet();

// new => {}, {} -> prototype, bind -> this, return {}

//-------------------------------------------------------------------------------------------------
//Factory Function

function createPerson(name, age){
    return {
        name: name,
        age: age,
        greet: function(){
            console.log(`hello my name is ${this.name} and i am ${this.age} years old`);
        }
    }
}

let jane = createPerson("jane", 34);
jane.greet();