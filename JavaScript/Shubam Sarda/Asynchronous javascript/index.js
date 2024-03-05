// Asynchronous Javascript:
// ------------------------
// If i take javascript as a language it follow three things 
// i) It is synchronous
// ii) It is Blocking 
// iii) It is single Threaded

// At one point we are only going to read or we are only going to execute one statement Let's take below example.

// Eg:
console.log("A");
console.log("B");
console.log("C");

// here we are going from top to bottom, first we are going to execute console.log("A"), then we are going to execute console.log("B"), then we are going to execute console.log("C")
// it's going in a sequence, when problem come when we start including statement that take time. for Eg. In here instead of console.log("B") statement B, If i was trying to fetch some data from API (or) may be database, the chances API may take some time to process data and return it back (Or) may be we are trying to search some thing from our database that statement is going to take some time, because of that javascript going to struck on console.log("B") till we get our response.
// so for example if our database is going to take may be five second to reply back javscript is going to struck for this execution, instead of console.log("B") we have some thing related to API, Iam not going to discuss API right Now, we are going to work with API at the end of the section itself, But here if we are struck for next five to ten second javascript is not going for console.log("C"), we start from console.log("A") we are now struck for our API response here for next five to ten seconds, and then we are going for log console.log("C")
// that is the problem what we want is, we want all type of task that is going to take time can be executed some were else and javascript should continue task from top to bottom, but task that are going to take time can be executed some were else because task is just to wait for API response, javascript is not doing anything here, or maybe we are just waiting for database response, we are not doing any thing here, that means we are indirectly wasting Time and that were this hole asynchronous topic coming into picture, by default javascript don't have power to do this, we have to follow the sequence we have to execute everything step by step, because remember javascript is synchronous, it's blocking, and it's single Threading, That means we are going to do only one task at the time, even if it's waiting javascript is blocking that means we cannot move on the next line, unless and until we complete all the wait for the API response what ever the task is here with default one we cannot do that we need some super power to execute it that's were this whole API thing comming into picture that's were this whole modern browser coming into picture
// now whenever you work with browser there is web API that help's us to do that.

