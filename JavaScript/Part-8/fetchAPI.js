// Lecture CheckList 
/**
 * 1.Introduction to networks and APIs
 * 2.Introduction to Fetch API.
 * 3.Features of Fetch.
 * 4.How to use Fetch?
 * 5.Implementation.
 */

// How to Use Fetch?
/**
 * 1.To use the Fetch API, we need to call the fetch() method on the client side.
 * 2.The fetch() method requires one parameter, the URL to request, and returns a promise.
 * 3.The fetch() methods optionally takes another parameter of options array. We will be looking into it the further lectures.
 * 4.The fetch() method returns a promise that resolves to a Response object when the request is completed. The Response object represents the HTTP response returned by the server and provides access to the response headers, status, and body.
 */

// fetch("https://type.fit/api/quotes");

// let x = fetch("https://type.fit/api/quotes");
// x.then(function exec(value) {
//     console.log(value);
// })

// fetch("https://type.fit/api/quotes")
// .then(function exec(response) {
//     return response.json();
// })
// .then(function exec(data) {
//     console.log(data);
// })

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// fetch('https://official-joke-api.appspot.com/jokes/programming/random')
// .then((res) => res.json())
// .then((msg) => console.log(msg[0].setup, msg[0].punchline))
// .catch((err) => console.log(err))

// fetch('https://api-thirukkural.vercel.app/api?num=25')
// .then(res => {
//     if (res.ok) {
//         console.log('success')
//     } else {
//         console.log('Failed')
//     }
//     return res.json()
// })
// .then(msg => console.log(msg.line1, msg.line2, msg.tam_exp))
// .catch(err => console.log(err))

// GET
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(err => console.log(err))

// POST
// fetch('https://jsonplaceholder.typicode.com/todos', {
//     method:'POST',
//     headers:{'content-type':'application/json'},
//     body:JSON.stringify({
//         userId:22,
//         id:456,
//         title:'test',
//         completed:false
//     })
// })
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(err => console.log(err))
