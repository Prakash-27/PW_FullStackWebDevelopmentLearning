//closures

//function + lexical environment

//innerfunction remembers the variables, functions of outer function

function outerFn(num){
    let a = 200;
    let b = 500;
    function x(){

    }
    return function(){
        console.log(num, a, b, x());
    }

}

let innerFn = outerFn(10);
innerFn();

outerFn(10)(); //function currying type