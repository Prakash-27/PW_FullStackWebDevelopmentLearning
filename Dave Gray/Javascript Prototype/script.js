// Prototypal Inheritance and the Prototype Chain

// ES6 introduced classes which is the modern way to construct objects

// That said, prototypal inheritance and the prototype chain are:
// 1) "under the hood", (ES6 Classes are considered "syntactic sugar")
// 2) often in interview questions.
// 3) and are useful to understand.

// Object literals
const person = {
    alive: true
}

const musician = {
    plays: true
}

console.log(musician.plays); // true 
console.log(musician.alive); // undefined

musician.__proto__ = person;

console.log(musician.plays); // true
console.log(musician.alive); // true
console.log(musician);
// After assigning musician.__proto__ = person then musician.alive delivers true that is through inheritance it is saying person is the parent of musician or it is proto of musician and if we go ahead and log musician to console without a property but we log the object itself.
// we can see some of the details we get little arrow in the console {plays: true}, if we expand that we have plays : true here not alive but then we have the [[Prototype]] : Object and if we expand that there is the alive set to true and the proto chain is right here and underneath that the proto of the javascript Object over all  
    
// => {plays: true}
//      plays: true
//  => [[Prototype]]: Object
//       alive: true 
//       [[Prototype]]: Object
/**
        =>  constructor: ƒ Object()
        =>  hasOwnProperty: ƒ hasOwnProperty()
        =>  isPrototypeOf: ƒ isPrototypeOf()
        =>  propertyIsEnumerable: ƒ propertyIsEnumerable()
        =>  toLocaleString: ƒ toLocaleString()
        =>  toString: ƒ toString()
        =>  valueOf: ƒ valueOf()
        =>  __defineGetter__: ƒ __defineGetter__()
        =>  __defineSetter__: ƒ __defineSetter__()
        =>  __lookupGetter__: ƒ __lookupGetter__()
        =>  __lookupSetter__: ƒ __lookupSetter__()
        =>  __proto__: (...)
        =>  get __proto__: ƒ __proto__()
        =>  set __proto__: ƒ __proto__()
 */

//-------------------------------------------------------------------------------------------------------------

// Javascript now has getPrototypeOf and setPrototypeOf methods instead of using __proto__

Object.setPrototypeOf(musician, person);
console.log(Object.getPrototypeOf(musician)); // {alive: true}
console.log(musician.__proto__); // {alive: true}

// => {alive: true}
//      alive: true
//   => [[Prototype]]: Object
/**
        =>  constructor: ƒ Object()
        =>  hasOwnProperty: ƒ hasOwnProperty()
        =>  isPrototypeOf: ƒ isPrototypeOf()
        =>  propertyIsEnumerable: ƒ propertyIsEnumerable()
        =>  toLocaleString: ƒ toLocaleString()
        =>  toString: ƒ toString()
        =>  valueOf: ƒ valueOf()
        =>  __defineGetter__: ƒ __defineGetter__()
        =>  __defineSetter__: ƒ __defineSetter__()
        =>  __lookupGetter__: ƒ __lookupGetter__()
        =>  __lookupSetter__: ƒ __lookupSetter__()
        =>  __proto__: (...)
        =>  get __proto__: ƒ __proto__()
        =>  set __proto__: ƒ __proto__()
 */

console.log(Object.getPrototypeOf(musician) === musician.__proto__); // true
console.log(musician.plays); // true
// missing alive property in musician is inherited by Person by using Prototype chain.
console.log(musician.alive); // true

//-------------------------------------------------------------------------------------------------------------

// Extending the prototype chain => general to specific to more specific
const guitarist = {
    strings: 6,
    __proto__: musician
} 

console.log(guitarist.alive); // true
console.log(guitarist.plays); // true
console.log(guitarist.strings); // 6

console.log(guitarist); // {strings: 6}

//=> {strings: 6}
//      strings: 6
// => [[Prototype]]: Object
//       plays: true 
//   => [[Prototype]]: Object
//         alive: true
//     =>[[Prototype]]: Object
/**
         =>  constructor: ƒ Object()
         =>  hasOwnProperty: ƒ hasOwnProperty()
         =>  isPrototypeOf: ƒ isPrototypeOf()
         =>  propertyIsEnumerable: ƒ propertyIsEnumerable()
         =>  toLocaleString: ƒ toLocaleString()
         =>  toString: ƒ toString()
         =>  valueOf: ƒ valueOf()
         =>  __defineGetter__: ƒ __defineGetter__()
         =>  __defineSetter__: ƒ __defineSetter__()
         =>  __lookupGetter__: ƒ __lookupGetter__()
         =>  __lookupSetter__: ƒ __lookupSetter__()
         =>  __proto__: (...)
         =>  get __proto__: ƒ __proto__()
         =>  set __proto__: ƒ __proto__()
 */

//-------------------------------------------------------------------------------------------------------------

// 3 Rules of Prototypal Inheritance

// 1. No circular references allowed (person:__proto__ can't be guitarist).
// In previous example the proto of person couldn't be guitarist we couldn't create that circular you get from having grandparent or a parent have a proto that was a child or a grandchild so on that would create a circular reference and we cannot do that.              
// 2. The __proto__ value must be an object or null.
// 3. An object can only directly inherit from one object.
// There can be combinations or it's not directly inheriting from two or three object.  

//-------------------------------------------------------------------------------------------------------------

// object with getter and setter methods

const car = {
    doors: 2,
    seats: "vinyl",
    get seatMaterial() {
        return this.seats;
    },
    set seatMaterial(material) {
        this.seats = material;
    }
}

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = "leather"; // Note keyword "this"
console.log(luxuryCar); // {seats: 'leather'}

//=> {seats: 'leather'}
//      seats: "leather"
//      seatMaterial: "leather"
// => [[Prototype]]: Object
//       doors: 2 
//       seatMaterial: "leather"
//       seats: "vinyl"
// => get seatMaterial: ƒ seatMaterial()
/**
          length: 0
          name: "get seatMaterial"
          arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:3:28)]
          caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:3:28)]
          [[FunctionLocation]]: script.js:140
 */
/**
=> [[Prototype]]: ƒ ()
=> apply: ƒ apply()
    arguments: (...)
=> bind: ƒ bind()
=> call: ƒ call()
    caller: (...)
=> constructor: ƒ Function()
    length: 0
    name: ""
=> toString: ƒ toString()
=> Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()
=> get arguments: ƒ ()
=> set arguments: ƒ ()
=> get caller: ƒ ()
=> set caller: ƒ ()
    [[FunctionLocation]]: 
 */
//=>[[Prototype]]: Object
/**
    =>  constructor: ƒ Object()
    =>  hasOwnProperty: ƒ hasOwnProperty()
    =>  isPrototypeOf: ƒ isPrototypeOf()
    =>  propertyIsEnumerable: ƒ propertyIsEnumerable()
    =>  toLocaleString: ƒ toLocaleString()
    =>  toString: ƒ toString()
    =>  valueOf: ƒ valueOf()
    =>  __defineGetter__: ƒ __defineGetter__()
    =>  __defineSetter__: ƒ __defineSetter__()
    =>  __lookupGetter__: ƒ __lookupGetter__()
    =>  __lookupSetter__: ƒ __lookupSetter__()
    =>  __proto__: (...)
    =>  get __proto__: ƒ __proto__()
    =>  set __proto__: ƒ __proto__()
 */
//=>[[Scopes]]: Scopes[0]
//=>[[Scopes]]: Scopes[2]
//  => 0: Script {person: {alive: true}, musician: {plays: true}, guitarist: {strings: 6}, car: {doors: 2, seats: 'vinyl'}, luxuryCar: {seats: 'leather'}}
//  => 1: Global {window: Window, self: Window, document: document, name: '', location: Location, …}

//=> set seatMaterial: ƒ seatMaterial(material) 
/**
          length: 1
          name: "set seatMaterial"
          arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:3:28)]
          caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:3:28)]
          [[FunctionLocation]]: script.js:143
 */
/**
=> [[Prototype]]: ƒ ()
=> apply: ƒ apply()
    arguments: (...)
=> bind: ƒ bind()
=> call: ƒ call()
    caller: (...)
=> constructor: ƒ Function()
    length: 0
    name: ""
=> toString: ƒ toString()
=> Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()
=> get arguments: ƒ ()
=> set arguments: ƒ ()
=> get caller: ƒ ()
=> set caller: ƒ ()
    [[FunctionLocation]]: 
 */
//=>[[Prototype]]: Object
/**
    =>  constructor: ƒ Object()
    =>  hasOwnProperty: ƒ hasOwnProperty()
    =>  isPrototypeOf: ƒ isPrototypeOf()
    =>  propertyIsEnumerable: ƒ propertyIsEnumerable()
    =>  toLocaleString: ƒ toLocaleString()
    =>  toString: ƒ toString()
    =>  valueOf: ƒ valueOf()
    =>  __defineGetter__: ƒ __defineGetter__()
    =>  __defineSetter__: ƒ __defineSetter__()
    =>  __lookupGetter__: ƒ __lookupGetter__()
    =>  __lookupSetter__: ƒ __lookupSetter__()
    =>  __proto__: (...)
    =>  get __proto__: ƒ __proto__()
    =>  set __proto__: ƒ __proto__()
 */
//=>[[Scopes]]: Scopes[0]
//=>[[Scopes]]: Scopes[2]
//  => 0: Script {person: {alive: true}, musician: {plays: true}, guitarist: {strings: 6}, car: {doors: 2, seats: 'vinyl'}, luxuryCar: {seats: 'leather'}}
//  => 1: Global {window: Window, self: Window, document: document, name: '', location: Location, …}
//=>[[Prototype]]: Object
/**
         =>  constructor: ƒ Object()
         =>  hasOwnProperty: ƒ hasOwnProperty()
         =>  isPrototypeOf: ƒ isPrototypeOf()
         =>  propertyIsEnumerable: ƒ propertyIsEnumerable()
         =>  toLocaleString: ƒ toLocaleString()
         =>  toString: ƒ toString()
         =>  valueOf: ƒ valueOf()
         =>  __defineGetter__: ƒ __defineGetter__()
         =>  __defineSetter__: ƒ __defineSetter__()
         =>  __lookupGetter__: ƒ __lookupGetter__()
         =>  __lookupSetter__: ƒ __lookupSetter__()
         =>  __proto__: (...)
         =>  get __proto__: ƒ __proto__()
         =>  set __proto__: ƒ __proto__()
 */

console.log(luxuryCar.doors); // 2
console.log(car); // {doors: 2, seats: 'vinyl'}

// {doors: 2, seats: 'vinyl'}
//      doors: 2
//      seatMaterial: "vinyl"
//      seats: "vinyl"
// => get seatMaterial: ƒ seatMaterial()
/**
          length: 0
          name: "get seatMaterial"
          arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:3:28)]
          caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:3:28)]
          [[FunctionLocation]]: script.js:140
 */
/**
=> [[Prototype]]: ƒ ()
=> apply: ƒ apply()
    arguments: (...)
=> bind: ƒ bind()
=> call: ƒ call()
    caller: (...)
=> constructor: ƒ Function()
    length: 0
    name: ""
=> toString: ƒ toString()
=> Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()
=> get arguments: ƒ ()
=> set arguments: ƒ ()
=> get caller: ƒ ()
=> set caller: ƒ ()
    [[FunctionLocation]]: 
 */
//=>[[Prototype]]: Object
/**
    =>  constructor: ƒ Object()
    =>  hasOwnProperty: ƒ hasOwnProperty()
    =>  isPrototypeOf: ƒ isPrototypeOf()
    =>  propertyIsEnumerable: ƒ propertyIsEnumerable()
    =>  toLocaleString: ƒ toLocaleString()
    =>  toString: ƒ toString()
    =>  valueOf: ƒ valueOf()
    =>  __defineGetter__: ƒ __defineGetter__()
    =>  __defineSetter__: ƒ __defineSetter__()
    =>  __lookupGetter__: ƒ __lookupGetter__()
    =>  __lookupSetter__: ƒ __lookupSetter__()
    =>  __proto__: (...)
    =>  get __proto__: ƒ __proto__()
    =>  set __proto__: ƒ __proto__()
 */
//=>[[Scopes]]: Scopes[0]
//=>[[Scopes]]: Scopes[2]
//  => 0: Script {person: {alive: true}, musician: {plays: true}, guitarist: {strings: 6}, car: {doors: 2, seats: 'vinyl'}, luxuryCar: {seats: 'leather'}}
//  => 1: Global {window: Window, self: Window, document: document, name: '', location: Location, …}

//=> set seatMaterial: ƒ seatMaterial(material) 
/**
          length: 1
          name: "set seatMaterial"
          arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:3:28)]
          caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:3:28)]
          [[FunctionLocation]]: script.js:143
 */
/**
=> [[Prototype]]: ƒ ()
=> apply: ƒ apply()
    arguments: (...)
=> bind: ƒ bind()
=> call: ƒ call()
    caller: (...)
=> constructor: ƒ Function()
    length: 0
    name: ""
=> toString: ƒ toString()
=> Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()
=> get arguments: ƒ ()
=> set arguments: ƒ ()
=> get caller: ƒ ()
=> set caller: ƒ ()
    [[FunctionLocation]]: 
 */
//=>[[Prototype]]: Object
/**
    =>  constructor: ƒ Object()
    =>  hasOwnProperty: ƒ hasOwnProperty()
    =>  isPrototypeOf: ƒ isPrototypeOf()
    =>  propertyIsEnumerable: ƒ propertyIsEnumerable()
    =>  toLocaleString: ƒ toLocaleString()
    =>  toString: ƒ toString()
    =>  valueOf: ƒ valueOf()
    =>  __defineGetter__: ƒ __defineGetter__()
    =>  __defineSetter__: ƒ __defineSetter__()
    =>  __lookupGetter__: ƒ __lookupGetter__()
    =>  __lookupSetter__: ƒ __lookupSetter__()
    =>  __proto__: (...)
    =>  get __proto__: ƒ __proto__()
    =>  set __proto__: ƒ __proto__()
 */
//=>[[Scopes]]: Scopes[0]
//=>[[Scopes]]: Scopes[2]
//  => 0: Script {person: {alive: true}, musician: {plays: true}, guitarist: {strings: 6}, car: {doors: 2, seats: 'vinyl'}, luxuryCar: {seats: 'leather'}}
//  => 1: Global {window: Window, self: Window, document: document, name: '', location: Location, …}
//=>[[Prototype]]: Object
/**
         =>  constructor: ƒ Object()
         =>  hasOwnProperty: ƒ hasOwnProperty()
         =>  isPrototypeOf: ƒ isPrototypeOf()
         =>  propertyIsEnumerable: ƒ propertyIsEnumerable()
         =>  toLocaleString: ƒ toLocaleString()
         =>  toString: ƒ toString()
         =>  valueOf: ƒ valueOf()
         =>  __defineGetter__: ƒ __defineGetter__()
         =>  __defineSetter__: ƒ __defineSetter__()
         =>  __lookupGetter__: ƒ __lookupGetter__()
         =>  __lookupSetter__: ƒ __lookupSetter__()
         =>  __proto__: (...)
         =>  get __proto__: ƒ __proto__()
         =>  set __proto__: ƒ __proto__()
 */

 
// Walking up the chain - property and methods are not copied

console.log(luxuryCar.valueOf()); // {seats: 'leather'}

//=> {seats: 'leather'}
//      seats: "leather"
//      seatMaterial: "leather"
// => [[Prototype]]: Object
//       doors: 2 
//       seatMaterial: "leather"
//       seats: "vinyl"
// => get seatMaterial: ƒ seatMaterial()
/**
          length: 0
          name: "get seatMaterial"
          arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:3:28)]
          caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:3:28)]
          [[FunctionLocation]]: script.js:140
 */
/**
=> [[Prototype]]: ƒ ()
=> apply: ƒ apply()
    arguments: (...)
=> bind: ƒ bind()
=> call: ƒ call()
    caller: (...)
=> constructor: ƒ Function()
    length: 0
    name: ""
=> toString: ƒ toString()
=> Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()
=> get arguments: ƒ ()
=> set arguments: ƒ ()
=> get caller: ƒ ()
=> set caller: ƒ ()
    [[FunctionLocation]]: 
 */
//=>[[Prototype]]: Object
/**
    =>  constructor: ƒ Object()
    =>  hasOwnProperty: ƒ hasOwnProperty()
    =>  isPrototypeOf: ƒ isPrototypeOf()
    =>  propertyIsEnumerable: ƒ propertyIsEnumerable()
    =>  toLocaleString: ƒ toLocaleString()
    =>  toString: ƒ toString()
    =>  valueOf: ƒ valueOf()
    =>  __defineGetter__: ƒ __defineGetter__()
    =>  __defineSetter__: ƒ __defineSetter__()
    =>  __lookupGetter__: ƒ __lookupGetter__()
    =>  __lookupSetter__: ƒ __lookupSetter__()
    =>  __proto__: (...)
    =>  get __proto__: ƒ __proto__()
    =>  set __proto__: ƒ __proto__()
 */
//=>[[Scopes]]: Scopes[0]
//=>[[Scopes]]: Scopes[2]
//  => 0: Script {person: {alive: true}, musician: {plays: true}, guitarist: {strings: 6}, car: {doors: 2, seats: 'vinyl'}, luxuryCar: {seats: 'leather'}}
//  => 1: Global {window: Window, self: Window, document: document, name: '', location: Location, …}

//=> set seatMaterial: ƒ seatMaterial(material) 
/**
          length: 1
          name: "set seatMaterial"
          arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:3:28)]
          caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:3:28)]
          [[FunctionLocation]]: script.js:143
 */
/**
=> [[Prototype]]: ƒ ()
=> apply: ƒ apply()
    arguments: (...)
=> bind: ƒ bind()
=> call: ƒ call()
    caller: (...)
=> constructor: ƒ Function()
    length: 0
    name: ""
=> toString: ƒ toString()
=> Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()
=> get arguments: ƒ ()
=> set arguments: ƒ ()
=> get caller: ƒ ()
=> set caller: ƒ ()
    [[FunctionLocation]]: 
 */
//=>[[Prototype]]: Object
/**
    =>  constructor: ƒ Object()
    =>  hasOwnProperty: ƒ hasOwnProperty()
    =>  isPrototypeOf: ƒ isPrototypeOf()
    =>  propertyIsEnumerable: ƒ propertyIsEnumerable()
    =>  toLocaleString: ƒ toLocaleString()
    =>  toString: ƒ toString()
    =>  valueOf: ƒ valueOf()
    =>  __defineGetter__: ƒ __defineGetter__()
    =>  __defineSetter__: ƒ __defineSetter__()
    =>  __lookupGetter__: ƒ __lookupGetter__()
    =>  __lookupSetter__: ƒ __lookupSetter__()
    =>  __proto__: (...)
    =>  get __proto__: ƒ __proto__()
    =>  set __proto__: ƒ __proto__()
 */
//=>[[Scopes]]: Scopes[0]
//=>[[Scopes]]: Scopes[2]
//  => 0: Script {person: {alive: true}, musician: {plays: true}, guitarist: {strings: 6}, car: {doors: 2, seats: 'vinyl'}, luxuryCar: {seats: 'leather'}}
//  => 1: Global {window: Window, self: Window, document: document, name: '', location: Location, …}
//=>[[Prototype]]: Object
/**
         =>  constructor: ƒ Object()
         =>  hasOwnProperty: ƒ hasOwnProperty()
         =>  isPrototypeOf: ƒ isPrototypeOf()
         =>  propertyIsEnumerable: ƒ propertyIsEnumerable()
         =>  toLocaleString: ƒ toLocaleString()
         =>  toString: ƒ toString()
         =>  valueOf: ƒ valueOf()
         =>  __defineGetter__: ƒ __defineGetter__()
         =>  __defineSetter__: ƒ __defineSetter__()
         =>  __lookupGetter__: ƒ __lookupGetter__()
         =>  __lookupSetter__: ƒ __lookupSetter__()
         =>  __proto__: (...)
         =>  get __proto__: ƒ __proto__()
         =>  set __proto__: ƒ __proto__()
 */

//-------------------------------------------------------------------------------------------------------------

// Grtting the keys of an object
console.log(Object.keys(luxuryCar)); // ['seats']

//=> ['seats']
//     0: "seats"
//     length: 1
//=> [[Prototype]]: Array(0)

// loop through each object key
Object.keys(luxuryCar).forEach(key => {
    console.log(key); // seats
});

// But a for..in loop includes inherited property
for(let key in luxuryCar) {
    console.log(key); // seats seats doors seatMaterial 
}

//-------------------------------------------------------------------------------------------------------------

// Object constructors
function Animal(species) {
    this.species = species;
    this.eats = true;
}

Animal.prototype.walks = function() {
    return `A ${this.species} is walking.`;
};

const bear = new Animal("Bear");
console.log(bear.species);
console.log(bear.walks());

// The prototype property is where inheritable property and methods are
console.log(bear.__proto__); // {walks: ƒ}

//=> {walks: ƒ}
 //=>  walks: ƒ ()
    /**
        arguments: null
        caller: null
        length: 0
        name: ""
    => prototype: 
     => constructor: ƒ ()
     => [[Prototype]]: Object
    [[FunctionLocation]]: script.js:546
    => [[Prototype]]: ƒ ()
    => [[Scopes]]: Scopes[2]
     */

 // => constructor: ƒ Animal(species)
    /**
         arguments: null
         caller: null
         length: 1
         name: "Animal"
    => prototype: 
     => {walks: ƒ}
     => constructor: ƒ Animal(species)
     => [[Prototype]]: Object
    [[FunctionLocation]]: script.js:541
    => [[Prototype]]: ƒ ()
    => [[Scopes]]: Scopes[2]
     */
// => [[Prototype]]: Object

console.log(bear.__proto__ === Animal.prototype); // true
console.log(Animal.prototype); // {walks: ƒ}

//=> {walks: ƒ}
 //=>  walks: ƒ ()
    /**
        arguments: null
        caller: null
        length: 0
        name: ""
    => prototype: 
     => constructor: ƒ ()
     => [[Prototype]]: Object
    [[FunctionLocation]]: script.js:546
    => [[Prototype]]: ƒ ()
    => [[Scopes]]: Scopes[2]
     */

 // => constructor: ƒ Animal(species)
    /**
         arguments: null
         caller: null
         length: 1
         name: "Animal"
    => prototype: 
     => {walks: ƒ}
     => constructor: ƒ Animal(species)
     => [[Prototype]]: Object
    [[FunctionLocation]]: script.js:541
    => [[Prototype]]: ƒ ()
    => [[Scopes]]: Scopes[2]
     */
// => [[Prototype]]: Object

console.log(bear); // Animal {species: 'Bear', eats: true}

//=> Animal {species: 'Bear', eats: true}
//     eats: true
//     species: 'Bear'
//=> [[Prototype]]: Object
 //=>  walks: ƒ ()
     /**
         arguments: null
         caller: null
         length: 0
         name: ""
     => prototype: 
      => constructor: ƒ ()
      => [[Prototype]]: Object
     [[FunctionLocation]]: script.js:546
     => [[Prototype]]: ƒ ()
     => [[Scopes]]: Scopes[2]
      */
 
  // => constructor: ƒ Animal(species)
     /**
          arguments: null
          caller: null
          length: 1
          name: "Animal"
     => prototype: 
      => {walks: ƒ}
      => constructor: ƒ Animal(species)
      => [[Prototype]]: Object
     [[FunctionLocation]]: script.js:541
     => [[Prototype]]: ƒ ()
     => [[Scopes]]: Scopes[2]
      */
 // => [[Prototype]]: Object

//-------------------------------------------------------------------------------------------------------------

// Now an ES6 Classes example of inheritance

class Vehicle {
    constructor() {
        this.wheels = 4,
        this.motorized = true
    }

    ready() {
        return "Ready to go!";
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super();
        this.wheels = 2
    }

    wheel() {
        return "On one wheel now!";
    }
}

const myBike = new Motorcycle();
console.log(myBike); // Motorcycle {wheels: 2, motorized: true}

//=> Motorcycle {wheels: 2, motorized: true} 
//     motorized: true
//     wheels: 2
//=> [[Prototype]]: Vehicle 
/**
 => constructor: class Motorcycle
     length: 0
     name: "Motorcycle"
     prototype: Vehicle {wheel: ƒ}
     arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Motorcycle.invokeGetter (<anonymous>:3:28)]
     caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Motorcycle.invokeGetter (<anonymous>:3:28)]
     [[FunctionLocation]]: script.js:674
=> [[Prototype]]: class Vehicle
    length: 0
    name: "Vehicle"
=> prototype: {ready: ƒ}
    arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Motorcycle.invokeGetter (<anonymous>:3:28)]
    caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Motorcycle.invokeGetter (<anonymous>:3:28)]
    [[FunctionLocation]]: script.js:663
=> [[Prototype]]: ƒ ()
=> [[Scopes]]: Scopes[2] 
=> [[Scopes]]: Scopes[2] 
 */

//=> wheel: ƒ wheel()
/**
     length: 0
     name: "wheel"
     arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Motorcycle.invokeGetter (<anonymous>:3:28)]
     caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Motorcycle.invokeGetter (<anonymous>:3:28)]
     [[FunctionLocation]]: script.js:674
=> prototype: {ready: ƒ}
    arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Motorcycle.invokeGetter (<anonymous>:3:28)]
    caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Motorcycle.invokeGetter (<anonymous>:3:28)]
    [[FunctionLocation]]: script.js:679
=> [[Prototype]]: ƒ ()
=> [[Scopes]]: Scopes[2] 
 */
// => [[Prototype]]: Object 
  /**
    => constructor: class Vehicle
        length: 0
        name: "Vehicle"
        prototype: {ready: ƒ}
        arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Motorcycle.invokeGetter (<anonymous>:3:28)]
        caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Motorcycle.invokeGetter (<anonymous>:3:28)]
        [[FunctionLocation]]: script.js:663
    => [[Prototype]]: ƒ ()
    => [[Scopes]]: Scopes[2] 
 */

//=> ready: ƒ ready()
/**
       length: 0
       name: "ready"
       arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Motorcycle.invokeGetter (<anonymous>:3:28)]
       caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Motorcycle.invokeGetter (<anonymous>:3:28)]
       [[FunctionLocation]]: script.js:668
   => [[Prototype]]: ƒ ()
   => [[Scopes]]: Scopes[2] 
 */
//=> [[Prototype]]: Object 

console.log(myBike.wheels); // 2
console.log(myBike.ready()); // Ready to go!
console.log(myBike.wheel()); // On one wheel now!

const myTruck = new Vehicle();
console.log(myTruck); // Vehicle {wheels: 4, motorized: true} 

//=> Vehicle {wheels: 4, motorized: true} 
//     motorized: true
//     wheels: 4
// => [[Prototype]]: Object 
  /**
    => constructor: class Vehicle
        length: 0
        name: "Vehicle"
        prototype: {ready: ƒ}
        arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Motorcycle.invokeGetter (<anonymous>:3:28)]
        caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Motorcycle.invokeGetter (<anonymous>:3:28)]
        [[FunctionLocation]]: script.js:663
    => [[Prototype]]: ƒ ()
    => [[Scopes]]: Scopes[2] 
 */

//=> ready: ƒ ready()
/**
       length: 0
       name: "ready"
       arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Motorcycle.invokeGetter (<anonymous>:3:28)]
       caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Motorcycle.invokeGetter (<anonymous>:3:28)]
       [[FunctionLocation]]: script.js:668
   => [[Prototype]]: ƒ ()
   => [[Scopes]]: Scopes[2] 
 */
//=> [[Prototype]]: Object 