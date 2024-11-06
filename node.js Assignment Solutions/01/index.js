// Question 1:
// In this coding challenge, your task is to create a package.json file for your project using the npm init
// command. The package.json file is essential for managing dependencies, scripts, and other project-related
// details. Below is the expected folder structure.

// C:\Users\Prakash\Desktop\node.js Assignment Solutions> cd 01
// C:\Users\Prakash\Desktop\node.js Assignment Solutions\01> npm init (Or) npm init -y

// Question 2:
// In the same project directory created in the above assignment, your task is to create a new file index.js and
// using the fs module add information about Node.js architecture to a new file nodejs_architecture.txt. Below
// are the expected files in the project folder.

const fs = require("fs");

// Synchronous way to write file

fs.writeFileSync("nodejs_architectureSynchronous.txt", 
    `The Node.js architecture offers several advantages,
     making the server-side platform stand out among every other server-side language.
     Moreover, the Node.js-developed server is always faster and more responsive compared 
     to the one created using the other server development technologies.

    Event loop: A key component of Node.js architecture, the event loop is an indefinite 
                loop that processes requests from the event queue.
    Event queue: A waiting list for requests that are received.
    
    Thread pool: Each server has a fixed number of threads, with one thread assigned to each complex request.
    
    External resources: These include databases, file systems, and compute.
    
    V8 engine: A fundamental part of Node.js architecture, the V8 engine converts JavaScript code to machine code that 
               can be understood by machines.
               
    Asynchronous architecture: Allows Node.js to run multiple operations at once by performing non-blocking operations.
    
    I/O model: Involves reading and writing files to disk, interacting with the database, and HTTP requests.
    
    Node.js is written in JavaScript, but its core is written in C and C++.`
);

// Asynchronous way to write file

fs.writeFile("nodejs_architectureAsynchronous.txt", 
    `The Node.js architecture offers several advantages,
     making the server-side platform stand out among every other server-side language.
     Moreover, the Node.js-developed server is always faster and more responsive compared 
     to the one created using the other server development technologies.

    Event loop: A key component of Node.js architecture, the event loop is an indefinite 
                loop that processes requests from the event queue.
    Event queue: A waiting list for requests that are received.
    
    Thread pool: Each server has a fixed number of threads, with one thread assigned to each complex request.
    
    External resources: These include databases, file systems, and compute.
    
    V8 engine: A fundamental part of Node.js architecture, the V8 engine converts JavaScript code to machine code that 
               can be understood by machines.
               
    Asynchronous architecture: Allows Node.js to run multiple operations at once by performing non-blocking operations.
    
    I/O model: Involves reading and writing files to disk, interacting with the database, and HTTP requests.
    
    Node.js is written in JavaScript, but its core is written in C and C++.`,

    function(err) {
        if(err) {
            console.log("Error in writing file.");
        } else {
            console.log("Success in writing file.");
        }
    }
);

//----------------------------------------------------------------------------------------------------------------------------

// Question 3:
// Continuing assignment 2. Here, let’s create a new file named index.js and use the fs module to read the
// content of nodejs_architecture.txt and print the content to the console.

// Synchronous way to read file

const data = fs.readFileSync("nodejs_architectureSynchronous.txt");
console.log("Data: ", data.toString());

// Asynchronous way to read file

fs.readFile("nodejs_architectureAsynchronous.txt", function(err, data) {
    if(err) {
        console.log("Error in reading file", err);
    } else {
        console.log("Data: ", data.toString());
    }
    console.log("Success in reading file");
});

//----------------------------------------------------------------------------------------------------------------------------

// Question 4:
// In this coding challenge, you will continue working with the file created in the previous assignments. Here
// your task is to access the existing nodejs_architecture.txt file and use the fs module to append additional
// data to it. Specifically, add some advantages of Node.js to the file and print the file content to the console.

// Synchronous way to appending file

fs.appendFileSync("nodejs_architectureSynchronous.txt", 
    `Scalable Web App Development.
     High Performance.
     Cost-Effective with Full-Stack JavaScript.
     Powerful Data Processing.
     Easy to Learn and Quick to Adapt.
     Concurrent Request Handling.
     Lesser Loading Time.
     Large and Active Community Support.
     Helps in Building Cross-Platform Applications.
    `
);

// Asynchronous way to appending file

fs.appendFile("nodejs_architectureAsynchronous.txt", 
    `Scalable Web App Development.
     High Performance.
     Cost-Effective with Full-Stack JavaScript.
     Powerful Data Processing.
     Easy to Learn and Quick to Adapt.
     Concurrent Request Handling.
     Lesser Loading Time.
     Large and Active Community Support.
     Helps in Building Cross-Platform Applications.
    `,
    "utf-8",
    function(err) {
        if(err) {
            console.log("Error in appending file", err);
        } else {
            console.log("Success in appending file");
        }
    }
);

// Synchronous way to read file

const datas = fs.readFileSync("nodejs_architectureSynchronous.txt");
console.log("Data: ", datas.toString());

// Asynchronous way to read file

fs.readFile("nodejs_architectureAsynchronous.txt", function(err, data) {
    if(err) {
        console.log("Error in reading file", err);
    } else {
        console.log("Data: ", data.toString());
    }
    console.log("Success in reading file");
});

//----------------------------------------------------------------------------------------------------------------------------

// Question 5:
// To wind up the fs module walk-through challenges, let’s delete the nodejs_architecture.txt file. On deletion
// print "File Deleted SuccessFully" to the console.

// Synchronous way to deleting file

fs.unlinkSync("nodejs_architectureSynchronous.txt");

// Asynchronous way to deleting file

fs.unlink("nodejs_architectureAsynchronous.txt", function(err) {
    if(err) {
        console.log("Error in deleting file");
    } else {
        console.log("Success in deleting file");
    }
});

//----------------------------------------------------------------------------------------------------------------------------

// Question 6:
// Assume a situation where our server restricts access to its configuration via the user interface. The only way
// to obtain the OS and release information is through a programmatic approach. In this challenge, you are
// expected to use the os module and print the os name and the os-release version to the console.

const os = require("os");

console.log("Operating System Name: ", os.type());
console.log("OS release: ", os.release());

//----------------------------------------------------------------------------------------------------------------------------

// Question 7:
// In this challenge, you are required to use Node.js and the built-in HTTP module to create a server that
// displays the text "I Am Happy To Learn Full Stack Web Development From PW Skills!" on the browser screen. 
// The goal is to utilize the HTTP module to create an HTTP server, set the port, appropriate content type, and
// send the message as a response to the client's request, allowing it to display on the browser.

const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.write("<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>");
    }
    res.end();
});

server.listen(5005); // open and paste this http://localhost:5005/ link in browser to access the content.

console.log("HTTP server is running on Port 5005");

//----------------------------------------------------------------------------------------------------------------------------

// Question 8: 
// Let's simulate a subscription feature similar to YouTube. Using the events module, we'll create a custom
// event named "subscribe". When this event is triggered, it should display a message in the console indicating
// that the user has subscribed.

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

// register a listener
eventEmitter.on("subscribe", (name) => {
    console.log(`Thanks For Subscribing to ${name}.`); 
});

// trigger an eventEmitter
eventEmitter.emit("subscribe", "College Wallah"); // Thanks For Subscribing to College Wallah.

//----------------------------------------------------------------------------------------------------------------------------

// Question 9:
// While working with the events module, one interesting observation is that when an event is created and
// called, the associated event handler is triggered. However, what happens if we remove an event and then
// try to call it? In this coding challenge let’s create an event handler and call it. Later let’s remove the event
// handler and observe what happens when we call it.

const EventEmitter1 = require("events");

const eventEmitter1 = new EventEmitter1();

// trigger an eventEmitter
eventEmitter1.emit("subscribe", "College Wallah"); // Thanks For Subscribing to College Wallah.

//----------------------------------------------------------------------------------------------------------------------------

// Question 10:
// In continuation of the 8th question, let's now explore the concept of the maximum number of listeners
// allowed for event handlers. For this coding challenge, your task is to determine the current maximum
// number of event listeners associated with an event and then set the maximum number of event listeners to
// 5. Note that the default maximum number of listeners might vary. Your task is to limit the number of listeners
// to 5.

// Answer:

// In Node.js, the EventEmitter class allows us to handle events and listeners. 
// By default, the maximum number of listeners for a single event is 10. 
// However, we can change this limit to control how many listeners are allowed for an event, 
// helping to avoid memory leaks if too many listeners are added.

// Here’s how to check the default maximum number of event listeners and set it to 5.

// Import the events module
const EventEmitter2 = require("events");

// Create an instance of EventEmitter
const eventEmitter2 = new EventEmitter2();

// Check the default maximum number of event listeners
console.log("The default maximum number of event listeners are:", eventEmitter2.getMaxListeners());

// Set the maximum number of listeners to 5
eventEmitter2.setMaxListeners(5);

// Verify the maximum number of event listeners has been set to 5
console.log("The updated maximum number of event listeners are:", eventEmitter2.getMaxListeners());

// This setup will ensure that only 5 listeners can be added to any event on this EventEmitter instance, 
// helping to manage resources effectively.

// The default maximum number of event listeners are: 10
// The updated maximum number of event listeners are: 5

//----------------------------------------------------------------------------------------------------------------------------