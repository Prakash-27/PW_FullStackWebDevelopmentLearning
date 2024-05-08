const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage 

console.log(strings[2]); //O(1)

//push 
strings.push('e'); //O(1) ['a', 'b', 'c', 'd', 'e']

//pop
strings.pop(); // ['a', 'b', 'c', 'd']
strings.pop(); //O(1) ['a', 'b', 'c']

//unshift
strings.unshift('x'); //[ 'x', 'a', 'b', 'c' ] O(n)

//splice 
strings.splice(2, 0, "alien"); //[ 'x', 'a', 'alien', 'b', 'c' ] //O(n/2) => O(n)

console.log(strings);

