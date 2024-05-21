// Liskov substitution was failing in below code 
// class Shape {
//     area(){

//     }
// }

// class Rectangle {
//     constructor(width, height){
//         this.width = width
//         this.height = height
//     }

//     setWidth(width){
//         this.width = width
//     }

//     setHeight(height){
//         this.height = height
//     }

//     area(){
//         return this.width * this.height
//     }
// }

// class Square extends Rectangle {
//     setWidth(width){
//         this.width = width
//         this.height = width
//     }

//     setHeight(height){
//         this.height = height
//         this.width = height
//     }
// }

// function increaseRectangleWidth(rect){
//     rect.setWidth(rect.width + 1)
// }

// const rectangle = new Rectangle(10, 2)
// const square = new Square(5, 5)

// increaseRectangleWidth(rectangle)
// increaseRectangleWidth(square)

// console.log(rectangle.area())
// console.log(square.area())

// --------------------------------------------------------------------------------------------

// Liskov substitution was failing in below code 
// class Bird {
//     fly(){
//         console.log('I can fly');
//     }
// }

// class Duck extends Bird {
//     quack(){
//         console.log('I can quack');
//     }
// }

// class Penguin extends Bird {
//     fly(){
//         throw new Error('Cannot fly')
//     }

//     swim(){
//         console.log('I can swim');
//     }
// }

// function makeBirdFly(bird){
//     bird.fly()
// }

// const duck = new Duck()
// const penguin = new Penguin()

// makeBirdFly(duck)
// makeBirdFly(penguin)

// --------------------------------------------------------------------------------------------

// Liskov substitution was Passing in below code 
class FlyingBird {
    fly(){
        console.log('I can fly');
    }
}

class SwimmingBird {
    swim(){
        console.log('I can swim');
    }
}

class Duck extends FlyingBird {
    quack(){
        console.log('I can quack');
    }
}

class Penguin extends SwimmingBird {
    
}

function makeFlyingBirdFly(bird){
    bird.fly()
}

function makeSwimmingBirdSwim(bird){
    bird.swim()
}

const duck = new Duck()
const penguin = new Penguin()

makeFlyingBirdFly(duck)
makeSwimmingBirdSwim(penguin)

// Liskov substitution principle is that if you have a function that accepts a class every single subclass of that class must also be able to enter that function and work properly that's all there is to the Liskov substitution Principle