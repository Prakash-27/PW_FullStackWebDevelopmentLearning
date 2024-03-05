"use strict";

var p = document.querySelector("p");
p.textContent = "Updated p tag!";
var studentName = "Shubham";
var welcome = function welcome() {
  console.log("Welcome ".concat(studentName));
};
welcome();
