// The parentNode, previousSibling, nextSibling, firstChild and lastChild properties are used to select the parent, 
// previous sibling, and next sibling of a node, respectively.

// parentNode:
// -----------

// The parentNode property returns the parent node of the current node. If the current node does not have a 
// parent, then parentNode will return null.

// const chilElement = document.querySelector('p');
// const parentNode = chilElement.parentNode;
// console.log(parentNode); // <div id="parent">

// ---------------------------------------------------------------------------------

// previousSibling:
// ----------------

// The previousSibling property is used to access the previous sibling node of a specific DOM node. It returns the 
// node immediately preceding the specified node within its parent's list of child nodes.
 

// previousSibling examples with and without text nodes mixed in with elements.

// Example : series of elements directly adjacent to each other, with no whitespace between them

// <img id="imgOne"/><img id="imgTwo"/><img id="imgThree"/><img id="imgFour"/>

// const imgTwo = document.getElementById("imgTwo");
// const imgThree = document.getElementById("imgThree");

// console.log(imgTwo.previousSibling); //img#imgOne
// console.log(imgThree.previousSibling); //img#imgTwo
// console.log(imgThree.previousSibling.id); //imgTwo

// console.log(imgTwo.previousElementSibling); //img#imgOne
// console.log(imgThree.previousElementSibling); //img#imgTwo

// Example: whitespace text nodes (line breaks) between the elements.

/*<img id="imageOne"/>
  <img id="imageTwo"/>
  <img id="imageThree"/>
  <img id="imageFour"/>
*/

// const imgTwo1 = document.getElementById("imageTwo");
// const imgThree1 = document.getElementById("imageThree");

// console.log(imgTwo1.previousSibling); //#text
// console.log(imgTwo1.previousSibling.previousSibling); //<img id="imageOne">
// console.log(imgThree1.previousSibling); //#text
// console.log(imgThree1.previousSibling.previousSibling); //<img id="imageTwo">
// console.log(imgThree1.previousSibling.previousSibling.id); //imageTwo

// console.log(imgTwo1.previousElementSibling); //<img id="imageOne">
// console.log(imgThree1.previousElementSibling); //<img id="imageTwo">
// console.log(imgThree1.previousElementSibling.id); //imageTwo

// ---------------------------------------------------------------------------------

// nextSibling:
// ------------

// nextSibling property is used to access the next sibling node of a specific DOM node  It returns the node 
// immediately following the specified node within its parent's list of child nodes.

// Example: series of elements directly adjacent to each other, with no whitespace between them

// <img id="imgOne"/><img id="imgTwo"/><img id="imgThree"/><img id="imgFour"/>

// const imageOne = document.getElementById("imgOne");
// const imageTwo = document.getElementById("imgTwo");

// console.log(imageOne.nextSibling); //img#imgTwo
// console.log(imageTwo.nextSibling); //img#imgThree
// console.log(imageTwo.nextSibling.id); //imgThree

// console.log(imageOne.nextElementSibling); //img#imgTwo
// console.log(imageTwo.nextElementSibling); //img#imgThree
// console.log(imageTwo.nextElementSibling.id); //imgThree

// Example: whitespace text nodes (line breaks) between the elements

/*<img id="imageOne"/>
  <img id="imageTwo"/>
  <img id="imageThree"/>
  <img id="imageFour"/>
*/

// const imageTwo1 = document.getElementById("imageTwo");
// const imageThree1 = document.getElementById("imageThree");  

// console.log(imageTwo1.nextSibling); //#text
// console.log(imageTwo1.nextSibling.nextSibling); //<img id="imageThree"/>
// console.log(imageThree1.nextSibling); //#text
// console.log(imageThree1.nextSibling.nextSibling); //<img id="imageFour"/>
// console.log(imageThree1.nextSibling.id); //undefined

// console.log(imageTwo1.nextElementSibling); //<img id="imageThree"/>
// console.log(imageThree1.nextElementSibling); //<img id="imageFour"/>
// console.log(imageThree1.nextElementSibling.id); //imageFour

// ---------------------------------------------------------------------------------

// firstChild:
// -----------

// firstChild property of the Node interface returns the node's first child in the tree, or null if the node has no children.

// Example:no whitespace between parent and child

// <div id="imgContainer"><img id="imgOne"/><img id="imgTwo"/><img id="imgThree"/></div>

// const fstChild = document.getElementById("imgContainer");
// const fstChildId = document.getElementById("imgContainer");

// console.log(fstChild.firstChild); //img#imgOne
// console.log(fstChildId.firstChild.id); //imgOne
// console.log(fstChild.firstElementChild); //img#imgOne
// console.log(fstChildId.firstElementChild.id); //imgOne

// Example: whitespace text nodes, comments, and text between the parent and child

/*
<div id="imgContainerOne">
    <img id="imgOne"/>
</div>
<div id="imgContainerTwo"><!-- first image --><img id="imgOne"/></div>
<div id="imgContainerThree">images<img id="imgOne"></div>
*/

// const firstChildContainerOne = document.getElementById("imgContainerOne");
// const firstChildContainerTwo = document.getElementById("imgContainerTwo");
// const firstChildContainerThree = document.getElementById("imgContainerThree");

// console.log(firstChildContainerOne.firstChild); //#Text
// console.log(firstChildContainerTwo.firstChild); //<!-- first image -->
// console.log(firstChildContainerThree.firstChild); //"images"
// console.log(firstChildContainerThree.firstChild.id); //undefined

// console.log(firstChildContainerOne.firstElementChild); //<img id="imgOne">
// console.log(firstChildContainerTwo.firstElementChild); //<img id="imgTwo">
// console.log(firstChildContainerThree.firstElementChild); //<img id="imgThree">
// console.log(firstChildContainerThree.firstElementChild.id); //imgThree

// ---------------------------------------------------------------------------------

// lastChild:
// ----------

// lastChild property of the Node interface returns the node's last child in the tree, or null if the node has no children.

// Example:no whitespace between parent and child

// <div id="imageContainer"><img id="imageOne"/><img id="imageTwo"/><img id="imageThree"/></div>

// const lstChild = document.getElementById("imageContainer");
// const lstChildId = document.getElementById("imageContainer");

// console.log(lstChild.lastChild); //img#imageThree
// console.log(lstChildId.lastChild.id); //imageThree
// console.log(lstChild.lastElementChild); //img#imageThree
// console.log(lstChildId.lastElementChild.id); //imageThree

// Example: whitespace text nodes, comments, and text between the parent and child.

/*
<div id="imageContainerOne">
    <img id="imageOne"/>
    <img id="imageTwo"/>
</div>
<div id="imageContainerTwo"><!-- start --><img id="imageOne"/><!-- end --></div>
<div id="imageContainerThree">image1<img id="imageOne"/>image2<img id="imageTwo"/>some text</div>
 */

// const lastChildContainerOne = document.getElementById("imageContainerOne");
// const lastChildContainerTwo = document.getElementById("imageContainerTwo");
// const lastChildContainerThree = document.getElementById("imageContainerThree");

// console.log(lastChildContainerOne.lastChild); //#Text
// console.log(lastChildContainerTwo.lastChild); //<!-- end -->
// console.log(lastChildContainerThree.lastChild); //"some text"
// console.log(lastChildContainerThree.lastChild.id); //undefined

// console.log(lastChildContainerOne.lastElementChild); //<img id="imageTwo"/>
// console.log(lastChildContainerTwo.lastElementChild); //<img id="imageOne"/>
// console.log(lastChildContainerThree.lastElementChild); //<img id="imageTwo"/>
// console.log(lastChildContainerThree.lastElementChild.id); //imageTwo
 
// Note: The firstChild and lastChild properties can return any type of node, including text or comment nodes. For 
// the last element child of an element, use lastElementChild, and for the first element child, use 
// firstElementChild. These element-specific properties exclude text and comment nodes.







 

