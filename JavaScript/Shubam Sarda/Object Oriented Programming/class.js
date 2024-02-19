class User {
    constructor(username, age){
        this.username = username;
        this.age = age;
        this.active = false;
    }
    login(){
        this.active = true;
        return this;
    }
    logout(){
        this.active = false;
        return this;
    }
    display(){
        if (this.active) {
            console.log(`Username: ${this.username}, Age: ${this.age}`);
        } else {
            console.log("Please Login First!");
        }
        
    }
}

class Student extends User{
    constructor(username, age, semester, rank){
        super(username, age);
        this.semester = semester;
        this.rank = rank;
    }
    updateRank(newRank){
        this.rank = newRank;
        console.log(this.rank);
    }
    display(){
        if (this.active) {
            console.log(`Username: ${this.username}, Age: ${this.age}, Semester: ${this.semester}, Rank: ${this.rank}`);
        } else {
            console.log("Please Login First!");
        }
        
    }
}

const userOne = new User("shubham", 25);
userOne.login();
userOne.display();
userOne.login().display(); //this method chaining is used when we return this, in login and logout methods, otherwise it will throw error 
// like userOne.login().display(), is like undefined.display() because the login method did'nt return any value so this is giving undefined or error in console.
// to overcome this we need to return this; in methods, then only we can able to use method chaining.


const studentOne = new Student("john", 60, 5, 10);
studentOne.login().display();
console.log(studentOne.rank);
studentOne.updateRank(15);

