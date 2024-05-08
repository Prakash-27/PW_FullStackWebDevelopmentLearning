function Person(name, age){
    this.name = name;
    this._age = age; //private (we can use # or _ to make private)
    this.greet = function(){
        console.log(`Hello my name is ${this.name} and Iam ${this._age} years old`);
    }
    this.getAge = function(){
        return this._age;
    }
    this.setAge = function(){
        if (age > 0) {
            this._age = age;
        }else {
            console.log("Invalid age");
        }
    }
}

let rahul = new Person("rahul", 21);
console.log(rahul.name);
console.log(rahul.age); //undefined
console.log(rahul._age);
rahul.greet();
console.log(rahul.getAge());

