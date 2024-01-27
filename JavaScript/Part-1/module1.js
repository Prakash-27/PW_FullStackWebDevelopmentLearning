var moduleVariable = 12

function moduleFunction(){
    console.log("I am a module function");
}

// export {moduleFunction, moduleVariable}
module.exports = {moduleVariable, moduleFunction} 

// commonjs 
// module