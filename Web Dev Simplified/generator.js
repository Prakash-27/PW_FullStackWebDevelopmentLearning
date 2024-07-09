function* simpleGenerator() {
    // console.log("Before 1");
    yield 1
    // console.log("After 1");
    // console.log("Before 2");
    yield 2
    // console.log("After 2");
    // console.log("Before 3");
    yield 3
    // console.log("After 3");
}

const generatorObject = simpleGenerator();
console.log(generatorObject);


console.log(generatorObject.next()); // {value: 1, done: false}
console.log(generatorObject.next()); // {value: 2, done: false}
console.log(generatorObject.next()); // {value: 3, done: false}
console.log(generatorObject.next()); // {value: undefined, done: true}


const generatorObject2 = simpleGenerator();

console.log(generatorObject2.next()); // {value: 1, done: false}
console.log(generatorObject2.next()); // {value: 2, done: false}

// we can create infinite loop using generators

function* generateId() {
    let id = 1;

    while (true) {
        yield id;
        id++;
    }
}

const generatorId = generateId();
console.log(generatorId.next()); // {value: 1, done: false}
console.log(generatorId.next()); // {value: 2, done: false}
console.log(generatorId.next()); // {value: 3, done: false}
console.log(generatorId.next()); // {value: 4, done: false}
console.log(generatorId.next()); // {value: 5, done: false}
console.log(generatorId.next()); // {value: 6, done: false}
// It gives infinite loop 

const generatorId2 = generateId();

console.log(generatorId2.next()); // {value: 1, done: false}
console.log(generatorId2.next()); // {value: 2, done: false}
console.log(generatorId2.next()); // {value: 3, done: false}

// Iterator - is essentially a function or object such as our generator object that has a next property that we can call on it and the, next property is going to give us a value and it's going to give us a done flag to let us know if we're done iterating or if we can continue to iterate.

function* generator(array) {
    for (let i = 0; i < array.length; i++) {
        yield array[i];
    }
}

const generatorobj = generator([1, 3, 5]);
console.log(generatorobj.next()) // {value: 1, done: false}
console.log(generatorobj.next()) // {value: 3, done: false}
console.log(generatorobj.next()) // {value: 5, done: false}
console.log(generatorobj.next()) // {value: undefined, done: true}


function* generateId3() {
    let id = 1;

    while (true) {
        const increment = yield id 
        if(increment != null) {
            id += increment
        } else {
            id++
        }
    }
}

const generatorId3 = generateId3();
console.log(generatorId3.next()); // {value: 1, done: false}
console.log(generatorId3.next(4)); // {value: 5, done: false}
console.log(generatorId3.next(3)); // {value: 8, done: false}
console.log(generatorId3.next()); // {value: 9, done: false}
console.log(generatorId3.return(10)); // {value: 10, done: true}
console.log(generatorId3.next()); // {value: undefined, done: true}
console.log(generatorId3.throw(new Error("Hi"))); // {value: undefined, done: true}
