function BankAccount(accountNumber, initBalance){
    let _balance  = initBalance;

    let _isAmountValid = function(amount){
        return typeof amount === 'number' && amount > 0;
    }

    this.deposit = function(amount){
        if (_isAmountValid(amount)) {
            _balance += amount
            console.log(`Deposit success, new amount is ${_balance}`);
        } else {
            console.log("Invalid amount");
        }
    }

    let _isAmountWithDraw = function(amount){
        return typeof amount === 'number' && amount > 0 && amount < _balance;
    }

    this.withDraw = function(amount){
        if (_isAmountWithDraw(amount)) {
            _balance -= amount;
            return console.log(`Amount withDrawn is ${amount}`);
        } else {
            console.log("Invalid Amount");
        }
    }

    this.getBalance = function(){
        return console.log(`Available Balance is ${_balance}`);
    }
}

let pwAccount = new BankAccount(123, 8000);
pwAccount.deposit(100);
pwAccount.withDraw(2000);
pwAccount.getBalance();
pwAccount.deposit(100);
pwAccount.getBalance();

// console.log(pwAccount._balance); //undefined because there is no this binding