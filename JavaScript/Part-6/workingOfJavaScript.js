// 1. Execution Of JavaScript
// 2. GEC, CallStack And Scope
// 3. Working Of JavaScript Function

var vari1 = 1;

one();
two();

console.log(vari1);

function one() {
    var a = 10;
    console.log(a);
}

function two() {
    var b = 20;
    console.log(b);
}