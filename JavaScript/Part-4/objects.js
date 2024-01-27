// 1st type of creation Objects:

// const user = {
//     name: "pw",
//     org: "pwskills",
//     city: "Delhi"
// }
// console.log(user.city);

// 2nd type of creating Objects using new key word:

// const user = new Object()
// user.id = 101
// user.name = "Alex"
// user.salary = 100000

// console.log(user.salary);

// 3rd type of creating objects using constructor:

// function Emp(id, name, salary) {
//     this.id = id;
//     (this.name = name), (this.salary = salary);
// }

// const emp = new Emp(101, "alex", 10000);
// console.log(emp.id + " " + emp.name + " " + emp.salary);

// ----------------------------------------------------------

// accessing -
// const emp = {
//     id: 101,
//     name: "Alex",
//     salary: "Doe",
// };
// console.log(emp.id);
// console.log(emp["name"]);

// ----------------------------------------------------------

// adding -
// let emp = {
//     id: 101,
//     name: "Alex",
//     salary: 10000,
// };

// emp.items = 10;
// console.log(emp);

// emp["type"] = "intern";
// console.log(emp);

// ----------------------------------------------------------

// update --
// let emp = {
//     id: 101,
//     name: "Alex",
//     salary: 10000,
// };

// using dot notation
// emp.id = 102; //changing id for an emp
// console.log(emp);

// using brackets notation
// emp["name"] = "Sam"; //Changing name for an emp
// console.log(emp);

// ----------------------------------------------------------
/**
 **** delete object ****
 */
// let emp = {
//     id: 101,
//     name: "Alex",
//     salary: 10000,
// };

// emp.name = null;
// console.log(emp);

// delete emp.name;
// console.log(emp);

// -----------------------------------------------------------
/**
 ******* for...in object loop *******
 */
const user = {
    name: "Suham",
    id: "1111",
    depart: "Wed dev",
};

for (const key in user) {
   console.log(user[key]);
}

for (const key in user) {
    console.log(`${key} : ${user[key]}`);
}
