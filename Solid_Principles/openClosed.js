// example that does not use open close principle
// function printQuiz(questions){
//     questions.forEach(question => {
//         console.log(question.description)
//         switch(question.type){
//             case 'boolean':
//                 console.log('1. True')
//                 console.log('2. False')
//                 break
//             case 'multipleChoice':
//                 question.options.forEach((option, index) => {
//                     console.log(`${index + 1}. ${option}`)
//                 }) 
//                 break
//             case 'text':
//                 console.log('Answer: _________________')
//                 break       
//             case 'range':
//                 console.log('Minimum: _________________')
//                 console.log('Maximum: _________________')
//                 break       
//         }
//         console.log('');
//     })
// }

// const questions = [
//     {
//         type: 'boolean',
//         description: 'This Video is useful.'
//     },
//     {
//         type: 'multipleChoice',
//         description: 'What is your favorite language?',
//         options: ['CSS', 'HTML', 'JS', 'Python']
//     },
//     {
//         type: 'text',
//         description: 'Describe your favorite JS feature.'
//     },
//     {
//         type: 'range',
//         description: 'What is the speed limit in your city?'
//     }
// ]

// printQuiz(questions);

// ------------------------------------------------------------------------------------------------------------

class BooleanQuestion {
    constructor(description){
        this.description = description
    }

    printQuestionChoices(){
        console.log('1. True');
        console.log('2. False');
    }
}

class MultipleChoiceQuestion {
    constructor(description, options){
        this.description = description
        this.options = options
    }

    printQuestionChoices(){
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`)
        }) 
    }
}

class TextQuestion {
    constructor(description){
        this.description = description
    }

    printQuestionChoices(){
        console.log('Answer: ________________');
    }
}

class RangeQuestion {
    constructor(description){
        this.description = description
    }

    printQuestionChoices(){
        console.log('Minimum: ________________');
        console.log('Maximum: ________________');
    }
}

function printQuiz(questions){
    questions.forEach(question => {
        console.log(question.description);
        question.printQuestionChoices()
        console.log('')
    })
}

const questions = [
    new BooleanQuestion('This Video is useful.'),
    new MultipleChoiceQuestion(
        'What is your favorite language?',
        ['CSS', 'HTML', 'JS', 'Python']
    ),
    new TextQuestion('Describe your favorite JS feature.'),
    new RangeQuestion('What is the speed limit in your city?')
]

printQuiz(questions)
// Where things can be open and closed at same time essentially it allows you to make modifications to the code without actually modifying the code that is is being extended really open closed principle at it root is saying that what you want to do is instead changing code you want to create new code and that new code is going to work with your old code in order to do things like printing out these new types of questions.
// Now something that in my opinion you shouldn't always follow I think it's great to follow it when you can but taking it to the extreme of never modifying your code and always making new code is just little bit too much in my opinion, but when you see those big switch statements those big if-statements always realize that you're almost always violating open closed principles and you should refactor that code to use for example classes or functions or modules something that breaks out that logic into individual classes or functions that have the logic in them and then that crazy switch statement can be broken into one single function call this code right here is so much easier to follow because I promise you this old code that we are voilating.