// console.log(document);
// console.log(document.location);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// --------------------------------------------------------

// querySelector will select the first element only.
// let description = document.querySelector('p');
// let description = document.querySelector('.active');
// let description = document.querySelector('#website-name');
// console.log(description);

// querySelectorAll which will select all the p tag element dependent on selector. 
// let descriptionAll = document.querySelectorAll('p');
// let descriptionAll = document.querySelectorAll('.active');
// console.log(descriptionAll);

// let allblogParagraph = document.querySelectorAll('div > p');
// console.log(allblogParagraph);

// let unorderList = document.querySelectorAll('ul');
// console.log(unorderList);

// let topNavUnorderList = document.querySelectorAll('ul.top-nav');
// console.log(topNavUnorderList);

// let footerNavUnorderList = document.querySelectorAll('ul.footer-nav');
// console.log(footerNavUnorderList);

// let footerNavUnorderList_Li = document.querySelectorAll('ul.footer-nav li');
// console.log(footerNavUnorderList_Li);

// to copy a selector from Dom element by right click the element --> and navigate to Copy --> and then click Copy Selector, it will copy the selector.
// let copySelector = document.querySelectorAll('body > main > div > p:nth-child(3)');
// console.log(copySelector);

// NodeList:
// querySelectorAll() will give the NodeList
// It is similiar to Arrays but it is not actually array
// There are two things this NodeList can Provide i) they have the access to indexing.
                                               // ii) we can use the method like forEach().
// apart from forEach any other method are not going to work.

// let blogParagraph = document.querySelectorAll('div p');
// // indexing:
// console.log(blogParagraph[0]); 
// console.log(blogParagraph[1]);
// console.log(blogParagraph[2]);

// forEach
// blogParagraph.forEach((paragraph) => {
//     console.log(paragraph);
// });

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let selector = document.getElementById("website-name");
// console.log(selector);

// let selectorClass = document.getElementsByClassName('active');
// console.log(selectorClass);
//i) above selectorClass provide HTMLCollection, then what is the problem with HTMLCollection is 
    // we can not iterate the individual element HTMLCollection using forEach() Loop.
//ii) In HTMLCollection Indexing Works.

// below code as TypeError: selectorClass.forEach is not a function
// console.log(selectorClass.forEach(select => console.log(select)));

// Converting HTMLCollections to Array:
// const htmlCollectionArray = Array.from(selectorClass);
// console.log(typeof htmlCollectionArray);
// htmlCollectionArray.forEach(element => console.log(element));

// let selectorTag = document.getElementsByTagName('p');
// console.log(selectorTag);

//i) here we have another HTMLCollection, what is the point is the using this className,TagName Kind are provide HtmlCollection that is disadvantage of this function.
//ii) also if we want to iterate the HTMLCollection means convert the HTMLCollection to Array then only we can iterate.
//iii) So what is we recommend is use querySelector() and querySelectorAll() to get NodeList which we can able to iterate forEach Loop and Indexing.

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const subHeading = document.querySelector(".sub-heading");
// console.log(subHeading.innerText);
// subHeading.innerText += "---Updated Sub Heading!---";
// console.log(subHeading.innerText);

// let liHead = document.querySelectorAll("ul.top-nav li");
// liHead.forEach((element) => {
//     element.innerText += "---";
// });

// const subHeading = document.querySelector(".sub-heading");
// subHeading.innerHTML = "<h5>----------</h5>";
// console.log(subHeading.innerText);

// let addLiToUl = document.querySelector("ul.top-nav");
// addLiToUl.innerHTML = addLiToUl.innerHTML + "<li>Register</li>";
// addLiToUl.innerHTML = "<li>Register</li>" + addLiToUl.innerHTML;

// -------------------------------------------------------------------------------------------------------------------------------------

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'www.example.com');
// console.log(link.getAttribute('href'));
// link.setAttribute('target', '_blank');
// console.log(link.getAttribute('target'));

// const activeClasses = document.querySelectorAll(".active");
// console.log(active);
// activeClasses.forEach(active => {
//     console.log(active.getAttribute('class'));
//     active.setAttribute('class', 'highlight');
//     console.log(active.getAttribute('class'));
// });

//i)setAttribute will overwrite the previous value and it just write everything from base.
//ii)That is the problem from setAttribute, because I want to maintain the previous value of the margin: 100px; as well as I need to add the color: blue; value
//But we have other solution to do it we can update style with other method as well, we don't need to over Write it but, we can add addition style properties along with default one.
//iii)In this case we are over write the current value, it's great when we are working with href we want to over write it or we want to add a new property that does'nt exist.
//But over write style is a problem because every website carries it's own look and that's we have our next lecture.
//iv)how we can add class instead of over writing it, for this we need to understand about style.

// const brandName = document.querySelector('#website-name');
// brandName.setAttribute('style', 'color: blue;');

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const brandName = document.querySelector('#website-name');
// console.log(brandName.style.margin);
// brandName.style.margin = "50px";
// console.log(brandName.style.margin);

// In this pattern we are not over writing the margin instead we are writing color along with the margin in this way.
// const brandName = document.querySelector('#website-name');
// console.log(brandName.style); // this will give CSSStyleDeclaration in the we can able to see the style property name which is specified for Dom manipualtion manner.
// brandName.style.color = "blue";
// brandName.style.fontSize = "20px";
// console.log(brandName.style.color);
// console.log(brandName.style.fontSize);

// const heading = document.querySelector('h1');
// heading.classList.add('highlight');
// heading.classList.remove('blog-heading');

// ---------------------------------------------------------------------

// const activeClasses = document.querySelectorAll("li.active");
// activeClasses.forEach(element => {
//     element.classList.remove('active');
//     element.classList.add('inactive');
// });
// activeClasses.forEach(element => {
//     element.classList.remove('inactive');
//     element.classList.add('active');
// });

//Alternative solution for add active class in li 
// const activeClassess = document.querySelectorAll("li.active");
// activeClassess.forEach(element => {
//     element.classList.remove('active');
//     element.classList.add('inactive');
// });
// const newActiveClassess = document.querySelectorAll("li.inactive");
// newActiveClassess.forEach(element => {
//     element.classList.remove('inactive');
//     element.classList.add('active');
// });

// ----------------------------------------------------------------------
// const activeClassess = document.querySelectorAll("li.active");
// const inActiveClasses = document.querySelectorAll("li.inactive");

// activeClassess.forEach(element => {
//     element.classList.remove('active');
//     element.classList.add('inactive');
// });

// inActiveClasses.forEach(element => {
//     element.classList.remove('inactive');
//     element.classList.add('active');
// });
// ----------------------------------------------------------------------

// const brandName = document.querySelector("#website-name");
// brandName.classList.toggle('important');

// ----------------------------------------------------------------------
// RelationShips - ParentChildSiblings:
// ------------------------------------

// Parent to children:
// const topNav = document.querySelector('.top-nav');
// console.log(topNav.children); // this will Provide a HTMLCollection of all the child in ul tag.
// const topNavChildren = Array.from(topNav.children);
// topNavChildren.forEach(child => {
//     child.classList.add('random');
//     console.log(child);
// });

// class to Parent:
// const brandName = document.querySelector('#website-name');
// console.log(brandName.parentElement);
// console.log(brandName.parentElement.parentElement.parentElement);
// console.log(brandName.parentElement.children);

// const blogHeading = document.querySelector('.sub-heading');
// console.log(blogHeading.previousElementSibling);
// console.log(blogHeading.nextElementSibling);

// -----------------------------------------------------------------------
// Events I:
// --------










 












