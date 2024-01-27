
// console.log(document);
// console.dir(document);
// console.dir(document.domain);
// console.dir(document.URL);

// document.title = 'Dom'

// console.dir(document.head);
// console.dir(document.all) // HTMLALLCollection
// console.dir(document.all[4])

// -----------------------------------------------------------
//append text to Body
// const body = document.body
// body.append('Hello','world') //append can add text, where as appendChild can't add text which will through error.
// body.appendChild('Hello','world') //You can't able to appendChild but in other case you can do that.

//creating a div Tag and append it to Body 
// const div = document.createElement('div')
// console.log(div);
// body.append(div)
// body.appendChild(div)

// -----------------------------------------------------------
//add text 
// div.innerText = 'Hi EveryOne'
// div.textContent = 'Hi EveryOne'
// body.appendChild(div)

// difference b/w innerText and textContent:
// const div_in_Html = document.querySelector('div')
// console.log(div_in_Html.innerText);
// console.log(div_in_Html.textContent);

// -----------------------------------------------------------
//create div
// const body = document.body
// const div = document.createElement('div')

//create strong element
// const strong = document.createElement('strong')

//create innerText to strong 
// strong.innerText = 'This is a dummy text'

//append strong text to created div
// div.append(strong)
// body.append(div)

// -----------------------------------------------------------
//Alternate thing to add nested tags in html dom
// const body = document.body
// const div = document.createElement('div')
// div.innerHTML = '<strong>This is a same dummy text <span>This is span tag </span></strong>'
// body.append(div)

// -----------------------------------------------------------
//Remove elements 

const spanOne = document.querySelector('#one')
const spanTwo = document.querySelector('#two')
// spanOne.remove()

const div = document.querySelector('div')
// div.removeChild(spanTwo)

// -----------------------------------------------------------
// get attribute and create attribute

const spanOneAttribute =  spanOne.getAttribute('name')
console.log(spanOneAttribute);

spanTwo.setAttribute('name', 'kjhfijhekfkh')
const spanTwoAttribute = spanTwo.getAttribute('name')
console.log(spanTwoAttribute);

//alternate way to set attribute and remove attribute

// spanOne.id = 'asdfdf'
spanTwo.removeAttribute('id')

// -----------------------------------------------------------
//Create class name and remove class name

spanOne.classList.add('new-class')
spanOne.classList.remove('new-class')

// -----------------------------------------------------------
//Toggle functionality (when there is a class it will remove it, as vice-versa when there is no class it will create it) 

spanOne.classList.toggle('old-class')

//create a class name is Alter way
spanOne.className = 'both-class'

//create a multiple class in one command 
spanOne.className = 'both-class name2 green blue'

// -----------------------------------------------------------
//style 

// spanOne.style.setProperty('color', 'blue')

spanOne.style.backgroundColor = 'red'
spanTwo.style.color = 'green'









