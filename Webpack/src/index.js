import {welcome, updatePara} from "./helper.js";
import {names} from "./data.js";

names.forEach(name => {
    welcome(name);
});

updatePara("Welcome to the course");