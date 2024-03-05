// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// const getPosts = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// }
// getPosts();

// const getPosts = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => {
//         return response.json();
//     })
//     .then(posts => {
//         posts.forEach(post => {
//             console.log(post);
//             console.log(post.id);
//             console.log(post.title);
//         });
//     })
//     .catch(error => console.log(error));
// }
// getPosts();


async function getPosts(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/")
    const posts = await response.json();
    console.log(posts);
    // posts.forEach(post => console.log(post));
}

getPosts();
