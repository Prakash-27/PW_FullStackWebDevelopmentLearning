// Object of one individual User
// const user1 = {
//     name: "Alex",
//     birthday: "14/07/1997",
//     gender: "Male",
//     age: function() {
//         return Date.now() - this.birthday;
//     },
// }

// Object of second individual User
// const user2 = {
//     name: "Deepika",
//     birthday: "17/05/1995",
//     gender: "Female",
//     age: function() {
//         return Date.now() - this.birthday;
//     },
// }

// -----------------------------------------------------------------

class User {
    constructor(name, birthday, gender) {
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
    }

    calcAge() {
        return Date.now() - this.birthday;
    }
}

const user1 = new User("Alex", "14/07/1997", "Male");
const user2 = new User("Deepika", "17/05/1995", "Female");