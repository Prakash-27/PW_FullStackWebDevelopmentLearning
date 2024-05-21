// var vs let vs const 
// Scope:
// The scope is a certain region of a program where a define variable exist and can be recognised and beyond that it cannot be recognized.

// Gobal scope 
// var a = 5;
// console.log(a);

// function scope 
// function name(){

// }

// block scope
// {

// }

// ----------------------------------------------------------------------------------------------

// var is a functional scope but let and const are block scoped.

// {
//     var a = 5;
// }
// console.log(a);

// {
//     let b = 5;
// }
// console.log(b); // ReferenceError: b is not defined

// {
//     let b = 5;
//     console.log(b); // let is only accessble inside the block scope, otherwise it will throw error.
// }

// {
//     const c = 5;
// }
// console.log(c); // ReferenceError: c is not defined

// {
//     const c = 5;
//     console.log(c); // const also is only accessble inside the block scope, otherwise it will throw error.
// }

// ----------------------------------------------------------------------------------------------

// variable shadowing:

// function test(){
//     let a = "Hello";

//     if(true){
//         let a = 'Hi';
//         console.log(a);
//     }

//     console.log(a);
// }

// test();


// function tests(){
//     var a = "Hello";
//     let b = "Bye";

//     if(true){
//         let a = 'Hi';
//         var b = "Goodbye"; // Identifier 'b' has already been declared 
//         console.log(a);
//         console.log(b); // This is called illegal shadowing
//     }
// }

// tests();

// ----------------------------------------------------------------------------------------------

// Declaration:

// var a;
// var a; // This is absolutely fine we can redeclare it as many times you want.

// let b;
// let b; // SyntaxError: Identifier 'b' has already been declared, we cannot redeclare a variable by let.

// const c;
// const c; // SyntaxError: Missing initializer in const declaration, we cannot redeclare a variable by const.

// let d;
// {
//     let d; // this won't give you error, this type is comes under shadowing. 
// }

// ----------------------------------------------------------------------------------------------

// Declaration without initialisation:

// var a; // we can declare it without initialization.

// let b; // we can declare it without initialization.

// const c; // SyntaxError: Missing initializer in const declaration.
// const c = 10; // we need to provide const some value while declaring it, some it cannot be declared without initializing it with any value.

// ----------------------------------------------------------------------------------------------

// Re-Initialization:

// var a = 5;
// a = 6; // we can able to reinitialize variable in var.

// let b = 5;
// b = 6; // we can able to reinitialize variable in let.

// const c = 5;
// c = 6; // we cannot able to reinitialize variable in const, TypeError: Assignment to constant variable.

// ----------------------------------------------------------------------------------------------

// Hoisting:

// var count;

// console.log(count); // undefined
// count = 1;


// console.log(count); // Cannot access 'count' before initialization, but it is hoisted in temporal dead zone, In devtools open sources page and put the breakPoint over this line, after refresh the page and run the program, in the Scope column we can see the Script, inside the script we can see count: undefined.   
// let count = 1;
// var count2 = 2; // after delcared and initialized the count2 using var, try to refresh the sources page once again, in the scope column the Global is created in that we can see the count2: undefined. 

// Temporal dead zone is a time between declaration and initialization of let and const variable.

// ----------------------------------------------------------------------------------------------

// function abc(){
//     console.log(a); // undefined


//     var a = 10;
// }

// abc();

// function abc(){
//     console.log(a, b, c); 

//     const c = 30;
//     let b = 20;
//     var a = 10;
// }

// abc();

// Temporal dead zone is the term to describe the states were variables are in the scope but not yet declared, that Why b and c are in the temporal dead zone. 