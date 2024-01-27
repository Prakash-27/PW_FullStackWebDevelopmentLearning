// const productAdd = document.querySelector('button');
// productAdd.addEventListener('click', () => {
//     // console.log('Button Clicked!');
//     // productAdd.setAttribute('style', 'display: none');
// });

// const products = document.querySelectorAll('li');
// products.forEach(product => {
//     // console.log(product);
//     product.addEventListener('click', (event) => {
//         // console.log(event);
//         // console.log(event.target);
//         // console.log(event.target.textContent);
//         // const lineThroughEvent  = event.target.style.textDecoration = 'line-through';
//         // console.log(lineThroughEvent);
//         // console.log(event.target.textContent);
//         // event.target.remove();
//     });
// });

// -------------------------------------------------------------------------------------

// const addProduct = document.querySelector('ul')
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     addProduct.innerHTML += "<li>New Product</li>"; // it will add New Product on last in li tag
//     // addProduct.innerHTML = "<li>New Product</li>" +  addProduct.innerHTML; // it will add New Product on first in li tag
//     console.log(addProduct.innerHTML);
// });

// const addProduct = document.querySelector('ul')
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     const newLi = document.createElement('li');
//     newLi.innerText = 'New Product';
//     addProduct.append(newLi);
//     // addProduct.prepend(newLi);
//     console.log(addProduct.innerHTML);
// });

// -------------------------------------------------------------------------------------

// const addProduct = document.querySelector('ul');
// const button = document.querySelector('button');

// Event Delegation:
// -----------------
// Instead of even adding and attaching the Individual li we can attach it to parent and then parent is going to handle it, when you look at Ul tag this is which have access to complete box with all li.

// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = "New Product";
//     addProduct.append(li);

//     console.log(addProduct);
//     console.log(addProduct.innerHTML);
// });

// addProduct.addEventListener('click', (event) => {
//     // console.log('Inside ul');
//     // console.log(event.target);
//     // console.log(event);
//     if(event.target.tagName === "LI"){
//         event.target.remove();
//         console.log('Ul Called');
//     }
// });

// Event Bubbing:
// -----------------
// There is a Problem what if there is another event attach to this above div, what if there is another event attach to body it will be like bubble, suppose I have one event on li separately not with above ul, one event on ul, one event on div which is another one, one event on body which is the fourth one, what is I click li, it call li and it's parent ul, and it's parent div, and it's parent body.

// const newli = document.querySelector('.active');
// newli.addEventListener('click', (event) => {
//     console.log('Li Called'); // If we call this function it will call the two different events console.log('Li Called'); and console.log('Ul Called');, Li event as well as Ul event, what if I have another one On my div, or On my body, that means all the events will be called and that's the problem, I am calling all the event that is attach to that Particular area, I can stop this with help of stopPropagation(), So all I have to do is with my li tag that is the lowest child or that is the final child in that I can add stopPropagation().
//     event.stopPropagation();  // after attached stopPropagation() to event now we get only LI Called, Why because on our child we add this propagation that means it is not going to Bubble Up, it's not going to it's parent for the event, once the event is called on Li, it's not going to it's parent, or it's parent, or it's parent, or it's parent, it just call it's own event and stop that's how it's going to work, so this is know as Event Bubbling, On li we are creating a bubble, and it's important to stop it's event bubbling, otherwise if there are two and three event's attach to a single point we are going to get into mess.
// });

// -------------------------------------------------------------------------------------

// const products = document.querySelector("ul");

// const alertMsg = (event) => {
//     // console.log(event);
//     if(event.target.tagName === "LI"){
//         alert('Make sure you give Credit');
//     }
// }

// const copyAlert = (event) => {
//     if(event.target.tagName === "LI"){
//         alert(event.target.textContent);
//     }
// }

// products.addEventListener('click', alertMsg);
// products.addEventListener('copy', copyAlert);

// -------------------------------------------------------------------------------------

// const webPage = document.querySelector('body');
// webPage.addEventListener('mousemove', (event) => {
//     // console.log(event.clientX, event.clientY);
//     // console.log(event.screenX, event.screenY);
// });

// const webPage = document.querySelector('body');
// webPage.addEventListener('wheel', (event) => {
//     // console.log(event.clientX, event.clientY);
//     console.log(event.pageX, event.pageY);
//     // console.log(event.screenX, event.screenY);
//     // console.log(event.offsetX, event.offsetY);
// });

