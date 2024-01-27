// Higher Order Function is a function that's accepts or takes a another function as Parameter (Or) Returns a function back to you once it's done doing what it's suppose to do.

function double(n) {
    return n * 2
}

function hello(s) {
    return `Hello ${s}`
}

const fn = function() {
    //do stuff
}
// setTimeout(fn())

const names = [
    'Sina',
    'Sam',
    'Qoli',
    'Ben',
    'Zoe',
    'Quentin',
    'Ala'
]

// const filteredName = names.filter(function(n) {
//     if(n[0] === 'Q') {
//         return false
//     }
//     return true
// });
// console.log(filteredName);

// const filteredNames = names.filter(n => n[0] !== 'Q');
// console.log(filteredNames); 

// Repeatation in iteration is always red flag we won't recommond that.

// const filtered = []
// for (let i = 0; i < names.length; i++) {
//     if(names[i][0] !== 'Q') {
//         filtered.push(names[i])
//     }
// }

// const longNames = []
// for(let i = 0; i < filtered.length; i++) {
//     if(filtered[i].length >= 5) {
//         longNames.push(filtered[i])
//     }
// }

// const elements = []
// for(let i = 0; i < longNames.length; i++) {
//     const el = document.createElement('p')
//     el.innerText = longNames[i]
//     elements.push(el)
// }

// that's why we are writing that in arrow functions all though we can use for loop but which caused us a repeatative of for loop over and over.

// names.filter(isNotQ)
// names.filter(isMininum5)
// names.map(convertToEl)

// function isNotQ(n) {
//    return n[0] !== 'Q'
// }

// function isMininum5(n) {
//     return n.length >= 5
// }

// function convertToEl(n) {
//     const el = document.createElement('p')
//     el.innerText = n
//     return el
// }

// 

/* <button onclick="onClick12">12px</button> 
<button onclick="onClick14">14px</button> 
<button onclick="onClick16">16px</button> */

function onClick12() {
    document.body.style.fontSize = '12px'
}
function onClick14() {
    document.body.style.fontSize = '14px'
}
function onClick16() {
    document.body.style.fontSize = '16px'
}

// function factory


const onClick12 = makeClickHandler(12)
const onClick14 = makeClickHandler(14)
const onClick16 = makeClickHandler(16)

function makeClickHandler(size) {
    return function() {
        document.body.style.fontSize = `${size}px`
    }
}




