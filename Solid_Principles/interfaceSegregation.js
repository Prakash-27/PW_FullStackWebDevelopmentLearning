// In Javascript there is no concept called interface, the entire idea of interface Segregation principle is about Segregating your interfaces and making them smaller. 
// below code is to understand the concept of interface Segregation principle. 

// interface Entity {
//     attackDamage 
//     health 
//     name

//     move()
//     attack()
//     takeDamage(amount)
// } 

// class Character implements Entity {
//     move(){
//       // Do Something
//     }

//     attack(){
//       // Do Something
//     }

//     takeDamage(amount){
//       // Do Something
//     }
// }

// class Turret implements Entity {
//     move(){
//       // ERROR: cannot move
//     }
// }


// In a normal language with interfaces you define a interface every single thing such as property and all the different methods of that interface.
// And every single class that implements interface needs to define all of the methods in that interface.
// But the problem is when you have large interfaces like this which do lots of different things, eg: this has name, it handles attackDamage, it handles move(), it handles takeDamage(), health.
// for example in a video game we may have a Character here which implements all of those, it use to be move(), attack(), takeDamage() everything make sense.
// But Turret() for example it can't actually moves, so having this move() functionality on it really doesn't make any sense.  
// with the Interface Segregation Principle it saying that whatever you have interface you need everything that implements the interface to use every single portion of the interface.
// right now the Turret() function which is implementing this interface doesn't use move() movement so we don't actually use all the different part of this interface so we breaking the interface Segregation principle.

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// And now in JavaScript every similiar way of doing this is using classes and inheritance instead of using interfaces.

// class Entity {
//     constructor(name, attackDamage, health){
//         this.name = name
//         this.attackDamage = attackDamage
//         this.health = health
//     }

//     move(){
//         console.log(`${this.name} moved`)
//     }

//     attack(targetEntity){
//         console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`)
//         targetEntity.takeDamage(this.attackDamage)
//     }

//     takeDamage(amount){
//         this.health -= amount
//         console.log(`${this.name} has ${this.health} health remaining`)
//     }
// }

// class Character extends Entity {

// }

// class Wall extends Entity {
//     constructor(name, health){
//         super(name, 0, health)
//     }

//     move(){
//         return null
//     }

//     attack(){
//         return null
//     }
// }

// class Turret extends Entity {
//     constructor(name, attackDamage){
//         super(name, attackDamage, -1)
//     }

//     move(){
//         return null
//     }

//     takeDamage(){
//         return null
//     }
// }

// const turret = new Turret('Turret', 5)
// const character = new Character('Character', 3, 100)
// const wall = new Wall('Wall', 200)

// turret.attack(character)
// character.move()
// character.attack(wall)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Entity {
    constructor(name){
        this.name = name
    }
}

const mover = {
    move(){
        console.log(`${this.name} moved`)
    }
} 

const attacker = {
    attack(targetEntity){
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`)
        targetEntity.takeDamage(this.attackDamage)
    }
}

const hasHealth = {
    takeDamage(amount){
        this.health -= amount
        console.log(`${this.name} has ${this.health} health remaining`)
    }
}

class Character extends Entity {
    constructor(name, attackDamage, health){
        super(name)
        this.attackDamage = attackDamage
        this.health = health
    }
}

Object.assign(Character.prototype, mover)
Object.assign(Character.prototype, attacker)
Object.assign(Character.prototype, hasHealth)

class Wall extends Entity {
    constructor(name, health){
        super(name)
        this.health = health
    }
}

Object.assign(Wall.prototype, hasHealth)

class Turret extends Entity {
    constructor(name, attackDamage){
        super(name)
        this.attackDamage = attackDamage
    }
}

Object.assign(Turret.prototype, attacker)

const turret = new Turret('Turret', 5)
const character = new Character('Character', 3, 100)
const wall = new Wall('Wall', 200)

turret.attack(character)
character.move()
character.attack(wall)