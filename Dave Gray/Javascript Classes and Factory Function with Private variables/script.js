// Javascript Classes
// class Pizza {
//     constructor(pizzaType, pizzaSize) {
//         this.type = pizzaType;
//         this.size = pizzaSize;
//         this.crust = "original";
//         this.toppings = [];
//     }
//     // get pizzaCrust() {
//     //     return this.crust;
//     // }
//     // set pizzaCrust(pizzaCrust) {
//     //     this.crust = pizzaCrust;
//     // }
//     getCrust() { // instead of using get we are creating the meaning full names of function
//         return this.crust;
//     }
//     setCrust(pizzaCrust) { // instead of using set we are creating the meaning full names of function
//         this.crust = pizzaCrust;
//     }
//     getToppings() {
//         return this.toppings;
//     }
//     setToppings(topping) {
//         this.toppings.push(topping);
//     }
//     bake() { 
//       console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`); 
//     }
// }

// const myPizza = new Pizza("pepperoni", "medium");
// // myPizza.pizzaCrust = "thin"
// myPizza.setCrust("thin");
// myPizza.bake(); // Baking a medium pepperoni thin crust pizza.
// console.log(myPizza.type); // pepperoni

// /* myPizza.type = "supreme"; // this kind of reassign value is not ideal so we need to use get and set method.
//    console.log(myPizza.type); // supreme
//  */

// myPizza.setToppings("sausage");
// myPizza.setToppings("olives");

// console.log(myPizza.getToppings()); // (2) ['sausage', 'olives']
// console.log(myPizza.getCrust()); // thin 

//---------------------------------------------------------------------------------------------------------------

// //Parent Class
// class Pizza {
//     constructor(pizzaSize) {
//         this.size = pizzaSize;
//         this.crust = "original";
//     }
//     getCrust() { 
//         return this.crust;
//     }
//     setCrust(pizzaCrust) { 
//         this.crust = pizzaCrust;
//     }
// }

// // Child Class
// class SpecialityPizza extends Pizza {
//     constructor(pizzaSize) {
//         super(pizzaSize);
//         this.type = "The Works";
//     }
//     slice() {
//       console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
//     }
// }

// const mySpeciality = new SpecialityPizza("medium");
// mySpeciality.slice(); // Our The Works medium pizza has 8 slices. 

//---------------------------------------------------------------------------------------------------------------

// Private variables 
// class Pizza {
//     constructor(pizzaSize) {
//         this._size = pizzaSize;
//         this._crust = "original";
//     }
//     getCrust() { 
//         return this._crust;
//     }
//     setCrust(pizzaCrust) { 
//         this._crust = pizzaCrust;
//     }
// }

// Factory Function: solution for a private variables we cannot access a variable outside the function.
// function pizzaFactory(pizzaSize) {
//     const crust = "original";
//     const size = pizzaSize;
//     return {
//         bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
//     };
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake(); // Baking a small original crust pizza.

//---------------------------------------------------------------------------------------------------------------

class Pizza {
    // public feild
    crust = "original";
    // private feild
    #sauce = "traditional";
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust() { 
        return this.crust;
    }
    setCrust(pizzaCrust) { 
        this.crust = pizzaCrust;
    }
    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo(); // Here's your original traditional sauce large pizza.
console.log(myPizza.getCrust()); // original
console.log(myPizza.sauce); // undefined
// console.log(myPizza.#sauce); // SyntaxError: Private field '#sauce' must be declared in an enclosing class










