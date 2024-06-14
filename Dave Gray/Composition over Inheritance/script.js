class Pizza {
    constructor(size, crust, sauce) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.toppings = [];
    }
    prepare() { console.log('Preparing...') }
    bake() { console.log('Baking...') }
    ready() { console.log('Ready!') }
}

// Problem: Repeating methods - Not D.R.Y (Don't Repeat Yourself).
class Salad {
    constructor(size, dressing) {
        this.size = size;
        this.dressing = dressing
    }
    prepare() { console.log('Preparing...') }
    toss() { console.log('Tosssing...') }
    ready() { console.log('Ready!') }
}


class stuffedCrustPizza extends Pizza {
    stuff() { console.log('Stuffing the crust...') }
}

class butterCrustPizza extends Pizza {
    butter() { console.log('Buttering the crust...') }
}

// Problem: Repeating methods - Not D.R.Y (Don't Repeat Yourself).
class stuffedButteredCrustPizza extends Pizza {
    stuff() { console.log('Stuffing the crust...') }
    butter() { console.log('Buttering the crust...') }
}

const myPizza = new stuffedButteredCrustPizza();
myPizza.stuff(); // Stuffing the crust...
myPizza.butter(); // Buttering the crust...

//----------------------------------------------------------------------------------------------------------

// Instead, use composition for methods
const prepare = () => {
    return {
        prepare: () => console.log("Preparing...")
    }
}
const bake = () => {
    return {
        bake: () => console.log("Baking...")
    }
}
const toss = () => {
    return {
        toss: () => console.log("Tossing...")
    }
}
const ready = () => {
    return {
        ready: () => console.log("Ready!")
    }
}
const stuff = () => {
    return {
        stuff: () => console.log("Stuffing the crust...")
    }
}

const butter = () => {
    return {
        butter: () => console.log("Buttering the crust...")
    }
}

const createPizza = (size, crust, sauce) => {
    const pizza = {
        size: size,
        crust: crust,
        sauce: sauce,
        toppings: []
    }

    return {
        ...pizza,
        ...prepare(),
        ...bake(),
        ...ready()
    }
}

const createSalad = (size, dressing) => {
    return {
        size: size,
        dressing: dressing,
        ...prepare(),
        ...toss(),
        ...ready()
    }
}

// Compare to ES6 Class syntax with extends and super()
const createStuffedButteredCrustPizza = (pizza) => {
    return {
        ...pizza,
        ...stuff(),
        ...butter()
    }
}

const anotherPizza = createPizza("medium", "thin", "original");
const somebodysPizza = createStuffedButteredCrustPizza(anotherPizza);
// OR
const davesPizza = createStuffedButteredCrustPizza(createPizza("medium", "thin", "original"));

const davesSalad = createSalad("side", "ranch");

davesPizza.bake(); // Baking...
davesPizza.stuff(); // Stuffing the crust...
davesSalad.prepare(); // Preparing... 
console.log(davesPizza);
console.log(davesSalad);


// What about the toppings?
const addTopping = (pizza, topping) => {
    pizza.toppings.push(topping);
    return pizza;
}

const jimsPizza = createPizza("medium", "thin", "original");
console.log(jimsPizza);
console.log(addTopping(jimsPizza, "pepperoni")); // toppings: ['pepperoni']
console.log(jimsPizza); // toppings: ['pepperoni'] (which is mutation in original array as well.)


// We need to clone the pizza object to avoid mutation
// Function composition:
const shallowPizzaClone = (fn) => {
    return (obj, array) => {
        const newObj = { ...obj };
        return fn(newObj, array);
    }
}

// One liner of shallowPizzaClone Function composition:
// const shallowPizzaClone = (fn) => (obj, array) => fn({ ...obj }, array);

let addToppings = (pizza, toppings) => {
    pizza.toppings = [...pizza.toppings, ...toppings];
    return pizza;
}

// Decorate the addToppings function with shallowPizzaClone
addToppings = shallowPizzaClone(addToppings);

const timsPizza = createPizza("medium", "thin", "original");
const timsPizzaWithToppings = addToppings(timsPizza, ["olives", "cheese", "pepperoni"]);
console.log(timsPizzaWithToppings); // toppings: ["olives", "cheese", "pepperoni"]
console.log(timsPizza); // toppings: []
console.log(timsPizzaWithToppings === timsPizza); // false

