function Person(name){
    this.name = name
}

// let rahul = new Person("rahul");

Person.createPerson = function(name){
    return new Person(name)
}

let rahul = Person.createPerson("rahul");
console.log(rahul.name);