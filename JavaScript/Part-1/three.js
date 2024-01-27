// Scope are Three types 
// Global level scope 
// Local - Function, Block level scope
// Module level scope (file level scope, anybody in the file level can actually go ahead and work with)

// Scope is a ability to access the variable 

// Global level scope:

let globalVariable = 10

function xyz() {
    console.log(globalVariable);
}
// calling functions in this way 
xyz()
console.log(globalVariable);

// Local - Function, Block level scope:

function xyz() {
    let globalVariable = 10
    console.log(globalVariable);
}
// calling functions in this way 
xyz()
