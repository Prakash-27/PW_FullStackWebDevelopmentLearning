// Normal type of using 

// class Store {
//     constructor(user){
//         // this.stripe = new Stripe(user)
//         this.paypal = new Paypal()
//         this.user = user
//     }

//     purchaseBike(quantity){
//         // this.stripe.makePayment(200 * quantity * 100)
//         this.paypal.makePayment(this.user, 200 * quantity)
//     }
    
//     purchaseHelmet(quantity){
//         // this.stripe.makePayment(15 * quantity * 100)
//         this.paypal.makePayment(this.user, 15 * quantity)

//     }
// }

// class Stripe {
//     constructor(user){
//         this.user = user
//     }

//     makePayment(amountInCents){
//         console.log(`${this.user} made payment of $${amountInCents / 100} with Stripe`);
//     }
// }

// class Paypal {
//     makePayment(user, amountInDollars){
//         console.log(`${user} made payment of $${amountInDollars / 100} with Paypal`);
//     }
// }

// const store = new Store('Sean')
// store.purchaseBike(2)
// store.purchaseHelmet(2)

//---------------------------------------------------------------------------------------------------------------------

// Dependency Inversion

class Store {
    constructor(paymentProcessor){
        this.paymentProcessor = paymentProcessor
    }

    purchaseBike(quantity){
        this.paymentProcessor.pay(200 * quantity)
    }
    
    purchaseHelmet(quantity){
        this.paymentProcessor.pay(15 * quantity)
    }
}

class StripePaymentProcessor {
    constructor(user){
        this.stripe = new Stripe(user)
    }

    pay(amountInCents){
        this.stripe.makePayment(amountInCents * 100)
    }
}

class PaypalPaymentProcessor {
    constructor(user){
        this.user = user
        this.paypal = new Paypal()
    }

    pay(amountInDollars){
        this.paypal.makePayment(this.user, amountInDollars)
    }
}

class Stripe {
    constructor(user){
        this.user = user
    }

    makePayment(amountInCents){
        console.log(`${this.user} made payment of $${amountInCents / 100} with Stripe`);
    }
}

class Paypal {
    makePayment(user, amountInDollars){
        console.log(`${user} made payment of $${amountInDollars} with Paypal`);
    }
}

const store1 = new Store(new StripePaymentProcessor('John'))
store1.purchaseBike(2)
store1.purchaseHelmet(2)

const store2 = new Store(new PaypalPaymentProcessor('Smith'))
store2.purchaseBike(2)
store2.purchaseHelmet(2)

