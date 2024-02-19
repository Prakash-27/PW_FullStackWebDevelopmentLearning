class Calculator{
    static result = 0;

    static add(num){
        Calculator.result += num;
    }

    static sub(num){
        this.result -= num;
    }

    static mul(num){
        this.result *= num;
    }

    static div(num){
        this.result /= num;
    }

    static{
        console.log("Hello Static");
    }
}

console.log(Calculator.result);

Calculator.add(5);
console.log(Calculator.result);

Calculator.sub(2);
console.log(Calculator.result);

Calculator.mul(10);
console.log(Calculator.result);

Calculator.div(5);
console.log(Calculator.result);