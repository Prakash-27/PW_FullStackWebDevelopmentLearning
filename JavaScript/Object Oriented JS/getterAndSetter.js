class Person{
    constructor(name, age){
        this.name = name
        this._age = age
    }

    get age(){
        return this._age;
    }

    set age(value){
        if (value > 0) {
            this._age = age
        } else {
            console.log("Invalid age");
        }
    }
}

const gaurav = new Person("gaurav", 22);
console.log(gaurav.age);
