// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// const large = new Array(100).fill('nemo');
// const large = new Array(1000).fill('nemo');
// const large = new Array(10000).fill('nemo');
// const large = new Array(100000).fill('nemo'); //Call to find Nemo took 30916.19389986992 milliseconds

// If you take this problem to run it on your computer it your time is going to be different then Mine, every time you run this code it will give different milliseconds it might be lot faster or lot slower.
// It all depends on how powerful the CPU and computer is and what other program are run and what programming language you are using and so many factors that play here on run time.

// function findNemo(array) {
//     let t0 = performance.now();
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === 'nemo'){
//             console.log('Found NEMO!');
//         }
//     }
//     let t1 = performance.now();
//     console.log(`Call to find Nemo took ${(t1-t0)} milliseconds`);
// }

// findNemo(nemo);//Found NEMO!
// findNemo(everyone);
// findNemo(large);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// O(n):
// =====

// function findNemo(array) {
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === 'nemo'){
//             console.log('Found NEMO!');
//         }
//     }
// }
// findNemo(large); //O(n) or linear Time (it take linear time to take findNemo)

/** 
 * In this video we are going to learn about our very first bigO notation, As we said a runtime is simply how long something takes to run, How does this function and its runtime grow as our input increases, as our input goes from just a single item an array nemo to ten items in array to 100000, How does the efficiency of this function increase.
 * 
 * If we look at this Graph and see we have four items in the array, well the number of operations is going to be four because we are going to loop through each item and say is this nemo? is this nemo? is this nemo? is this nemo? four times, if we have five elements in the array we have five no of operations, if we have six elements in the array we have six no of operations, seven is seven operation, eight is eight operations.
 * 
 * Do we see a little bit of a pattern here well we can draw a line through it, this is linear, if no of input increase the no of operation will increase.
 * 
 * Our findNemo function as the bigO notation of O(n)
 * and where does this (n)  -> come from, this n can be anything It could put X as well, It's just arbitrary letter and we usually give n for O(n), and when it comes to bigO this is just a standard that you'll see across the board. 
 * 
 * simply means the bigO depends on the number of inputs the number of n.
 * if we just add the nemo array findNemo(nemo) it will be O(1).
 * if we just add the everyone array findNemo(nemo) this would be O(10).
 * and if we have the large array it will be 100000 but as the input increase, you see that the number of operations increase linearly with it. O(100000).
 * 
 * O(n) is probably the most common bigO notation you will find.
 * 
 * If we go back to the graph you can see that O(n) is right here in the Yellow region that says fair as the number of elements increase. you see that is just a straight line the number of operation increase by the same amount
 * because keep this in mind BigO doesn't measure things in seconds Instead, we are focusing on how quickly our runtime grows, We simplly do this by using the size of the input which we call N or anything else that we want really and compare it to the number of operations that increase. That's what scalability means.
 * As things grow larger and larger, does it scale?
 * 
 * So the findNemo function is O(n) linear time
 * 
  **/

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// O(1):
// =====

// const boxes = [0, 1, 2, 3, 4, 5];

// function logFirstTwoBoxes(boxes){
//     console.log(boxes[0]);// O(1)
//     console.log(boxes[1]);// O(1)
// }

// logFirstTwoBoxes(boxes); // total operation O(2).

// If we see O(1) is in Green area it is excellent in Graph, it doesn't matter how many elements we have, it's always going to run the same predictability when it comes to computing is very, very nice and all of one is definitely Execllent. Okay, so we have learned about linear time O(n) and then constant time O(1)

// Keep in mind inputs can be any type of data. Not just arrays


// Exercise Big O Calculation 1
// ----------------------------

// function funChallenge(input){
//   let a = 10; //O(1)
//   a = 50 + 3; //O(1)

//   for (let i = 0; i < input.length; i++) { //O(n)
//     anotherFunction(); //O(n)
//     let stranger = true; //O(n)
//     a++; //O(n)
//   }
//   return a; //O(1)
// }

// BIG O = O(1) + O(1) + O(1) + O(n) + O(n) + O(n) + O(n)
//       = 1 + 1 + 1 + n + n + n + n 
//       = 3 + 4n
// BIG O = 3 + 4n 
// Actual BIG O = O(n)

// Exercise Big O Calculation 2
// ----------------------------

// function anotherFunChallenge(input){
//   let a = 5; //O(1)
//   let b = 10; //O(1)
//   let c = 50; //O(1)

//   for (let i = 0; i < input; i++){ //O(n)
//     let x = i + 1; //O(n)
//     let y = i + 2; //O(n)
//     let z = i + 3; //O(n)
//   }

//   for (let j = 0; j < input; j++){ //O(n)
//     let p = j * 2; //O(n) 
//     let q = j * 2; //O(n)
//   }
//   let whoAmI = "I don't know"; //O(1)
// }

// BIG O(4 + 7n)
// Actual BIG O = O(n)

// Four Rules:
// -----------
// Rule 1: Worst Case
// Rule 2: Remove Constants
// Rule 3: Different terms for inputs
// Rule 4: Drop Non Dominants

// Rule 1: Worst Case:
//--------------------

// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marlin', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank', 'nemo'];

// function findNemo(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log("running");
//     if (array[i] === 'nemo') {
//       console.log('Found NEMO!');
//       break;
//     }
//   }
// }
// findNemo(everyone); //O(n)

// If the nemo array is at the beginning or end of the arrays also we are considering as O(n).

// If it in the Beginning of the Array the output is
// running
// running
// running
// Found NEMO!

// If it in the End of the Array the output is 
// running
// running
// running
// running
// running
// running
// running
// running
// running
// Found NEMO!

// Rule 2: Remove Constants:
//--------------------------
// function PrintFirstItemThenFirstHalfThenSayHi100Times(items){
//   console.log(items[0]); // O(1)

//   var middleIndex = Math.floor(items.length / 2);
//   var index = 0; // n/2

//   while (index < middleIndex){
//     console.log(items[index]);
//     index++;
//   }

//   for (var i = 0; i < 100; i++){ // O(100)
//     console.log("hi");
//   }
// }

// BIG O = O(1 + n/2 + 100)
//       = O(n/2 + 101)
//       = O(n/2 + 1)
//       = O(n + 1)
//       = O(n)


// function compressBoxesTwice(boxes){
//   boxes.forEach(function(boxes){
//       console.log(boxes); // O(n)
//   });

//   boxes.forEach(function(boxes){
//       console.log(boxes); // O(n)
//   });
// }

// the two are seperate for loops so we add them together.
// bigO = O(n) + O(n)
//      = O(2n)
//      = O(n)

// If we look at this function on our graph we see that the elements, as the elements increase we have two operations because we have two for loops, if we have two elements, in that case, we do four operations
// if we have three then we do six operations and you see how it increases, But at the end of the day, even though the line is steeper, we have a lot more operations to do, the way the line increases is still linear
// And that's the key here with BigO we don't really care about how steep the line is, We care about how the line moves as our inputs increases.

// Makes our lives a whole lot simpler, doesn't it? so remember, drop the constants. you're never going to really see numbers in big O notation, Most likely the notations that we have seen in the past before on our graph Usually these and the only time you see numbers is when you have O(1) O(n^2) O(2^n).


// Rule 3: Different terms for inputs:
// -----------------------------------

function compressBoxesTwice(boxes, boxes2){
  boxes.forEach(function(boxes){
      console.log(boxes); // O(n)
  });

  boxes2.forEach(function(boxes){
      console.log(boxes); // O(n)
  });
}

// Let me ask you a question what if here I have boxes as the first parameter?, And then we have boxes too as the second parameter and maybe this second for loop Actually loops over the second boxes. What happens here? What is the BigO?
// And During an interview, a lot of people trip up amd say that this is well still O(2n), then drop the constant and say O(n), Now is this Right!
// No, because the third rule states that different terms for inputs and remember boxes. first one(boxes) and second one(boxes2) are two different inputs, one could be 100 items long Another one can be just one item, So this first for loop is going to depend on how big the first item or first input is, and then the second for loop depends on how big this one is, and n is just arbitary letter that we decided on
// In this case the bigO of this function would be something like O(a) for the first for loop, which is the first input, O(a + b) the BigO of this function is actually a + b (or) n + m (or) boxes + boxes2, one plus boxes too, so keep that in mind just because you see two for loops, one after another doesn't mean that they're looping over the same items, now you might be asking yourself, Andrei what happens if these loops are nested?, so far we only woeked with loops that are one after another, what if this boxes2 loop was inside of this boxes loop?
// Well, let's get into the next video and talk about anothe common pattern we see with they go that is nested loops.

