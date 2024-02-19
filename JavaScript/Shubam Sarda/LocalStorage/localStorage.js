// localStorage.setItem("name", "Tom");
// localStorage.setItem("age", 25);

// localStorage.age = 26;
// localStorage.setItem("age", 27);

// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");

// console.log(name, age);
// console.log(typeof name, typeof age);

// localStorage.removeItem("name");
// localStorage.removeItem("age");

// localStorage.clear();

// ----------------------------------------------------------------------------------

const data = [
    {username: "shubham", age: 25},
    {username: "john", age: 29},
];

const dataStringify = JSON.stringify(data);
localStorage.setItem("data", dataStringify);

const accessData = JSON.parse(localStorage.getItem("data"));
console.log(accessData);

localStorage.clear();
