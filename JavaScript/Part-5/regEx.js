// Way to create regular Expression:
let pattern = 'pw'
let regExOne = new RegExp(pattern) 

let flag = 'gi'
let regExTwo = new RegExp(pattern, flag)

// Another way to create regular Expression:
let regExThree = /pw/gi //g - is global search, i - case inSensitive
let regExFour = /gw/gi


const strToCheck = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent"

// Testing the regular Expression:
const result = regExThree.test(strToCheck)
console.log(result); //true
const results = regExFour.test(strToCheck)
console.log(results); //false

const anotherResult = strToCheck.match(regExThree)
// let regExThree = /pw/gi
console.log(anotherResult); //[ 'PW', 'Pw', 'pw' ] /pw/gi this is case inSensitive because the i is there.

// let regExThree = /pw/g
console.log(anotherResult); //['pw'] if you remove the i from /pw/g in the regExThree it will behave as a case Sensitive.

// let regExThree = /Pw/g
console.log(anotherResult); //['Pw']

// let regExThree = /Pw/
console.log(anotherResult); 
/**[
    'Pw',
    index: 64,
    input: 'PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent',
    groups: undefined
] */

// let regExThree = /pw/g
const oneMoreResult = strToCheck.replace(regExThree, 'p-w')
console.log(oneMoreResult); // PW is growing at a rapid speed and recently they are working on Pwskills to create skills based p-wcontent

// let regExThree = /pw/gi
const twoMoreResult = strToCheck.replace(regExThree, 'p-w')
console.log(twoMoreResult); // p-w is growing at a rapid speed and recently they are working on p-wskills to create skills based p-wcontent

const webUrl = "https://pwskills.com/hitesh%20choudhary"
const useableUrl = webUrl.replace(/%20/, '-')
console.log(useableUrl); //https://pwskills.com/hitesh-choudhary

const webUrlTwo = "https://pwskills.com/hitesh%30choudhary"
const useableUrlTwo = webUrlTwo.replace(/%20/, '-')
console.log(useableUrlTwo); //https://pwskills.com/hitesh%30choudhary

const webUrlThree = "https://pwskills.com/hitesh%20choudhary"
const useableUrlThree = webUrlThree.replace(/%\d0/, '-')
console.log(useableUrlThree); //https://pwskills.com/hitesh-choudhary

const webUrlfour = "https://pwskills.com/hitesh%31choudhary"
const useableUrlfour = webUrlfour.replace(/%\d\d/, '-')
console.log(useableUrlfour); //https://pwskills.com/hitesh-choudhary

// Reference to learn and study Regular Expression: 
// https://regexr.com/
// https://regex101.com/






