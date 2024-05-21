//Inheritance
// class Monster {
//     constructor(name){
//         this.name = name 
//     }

//     attack(){
//         console.log(`${this.name} attacked`)
//     }

//     walk(){
//         console.log(`${this.name} walked`)
//     }
// }

// class FlyingMonster extends Monster {
//     fly(){
//         console.log(`${this.name} flew`)
//     }
// }

// class SwimmingMonster extends Monster {
//     swim(){
//         console.log(`${this.name} swam`);
//     }
// }

// const bear = new Monster('bear')
// bear.walk()
// bear.attack()

// const eagle = new FlyingMonster('eagle')
// eagle.walk()
// eagle.attack()
// eagle.fly()

// const shark = new SwimmingMonster('shark')
// shark.walk()
// shark.attack()
// shark.swim()

//--------------------------------------------------------------------------------------------------------------------------------

//Composition
function attackerAndWalker({ name }){
    return {
        attack: () => console.log(`${name} attacked`),
        walk: () => console.log(`${name} walked`)
    }
}

function flyer({ name }){
    return {
        fly: () => console.log(`${name} flew`)
    }
}

function swimmer({ name }){
    return {
        swim: () => console.log(`${name} swam`)
    }
}

function monsterCreator(name){
    const monster = { name: name }

    return {
        ...monster,
        ...attackerAndWalker(monster)
    }
}

function flyingMonsterCreator(name){
    const monster = { name: name }

    return {
        ...monster,
        ...attackerAndWalker(monster),
        ...flyer(monster)
    }
}

function swimmingMonsterCreator(name){
    const monster = { name: name }

    return {
        ...monster,
        ...attackerAndWalker(monster),
        ...swimmer(monster)
    }
}

function flyingSwimmingMonsterCreator(name){
    const monster = { name: name }

    return {
        ...monster,
        ...attackerAndWalker(monster),
        ...swimmer(monster),
        ...flyer(monster)
    }
}

const bear1 = monsterCreator('Bear')
bear1.walk()
bear1.attack()

const eagle1 = flyingMonsterCreator('Eagle')
eagle1.walk()
eagle1.attack()
eagle1.fly()

const shark1 = swimmingMonsterCreator('Shark')
shark1.attack()
shark1.swim()

const seaBird = flyingSwimmingMonsterCreator('SeaBird')
seaBird.attack()
seaBird.walk()
seaBird.swim()
seaBird.fly()