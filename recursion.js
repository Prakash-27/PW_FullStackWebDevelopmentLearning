// Idea of recursion is the function that call itself

//Normal Function
function countDown(n){
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
    console.log("Hooray");
}
// countDown(3);

//Recursive Function
function countDownRecursive(n){
    if(n <= 0){
        console.log("Hooray")
        return
    }
    console.log(n)
    countDownRecursive(n - 1)
}
// countDownRecursive(3);

// -----------------------------------------------------------------------------------

//Normal Function
function sumRange(n){
    let total = 0;
    for(let i = n; i > 0; i--){
        total = total + i;
    }
    console.log(total);
    return total;
}
sumRange(3);


//Recursive Function
function sumRangeRecursive(n, total = 0){
    if(n <= 0){
        console.log(total);
        return total;
    }
    return sumRangeRecursive(n - 1, total + n);
}
sumRangeRecursive(3, 0);

// -----------------------------------------------------------------------------------

const tree = {
    name: 'John',
    children: [
        {
            name: "Jim",
            children: []
        },
        {
            name: "Zoe",
            children: [
                {
                    name: 'Kyle',
                    children: []
                },
                {
                    name: 'Sophia',
                    children: []
                }
            ]
        }
    ]
}

//Normal Function
function printChildren(t){
    // to implement print children from tree object by using for loops wnich is very complex and also impossible to do
}

//Recursive Function
function printChildrenRecursive(t){
    if(t.children.length === 0){
        return
    }
    t.children.forEach(child => {
        console.log(child.name);
        printChildrenRecursive(child);
    });
}
printChildrenRecursive(tree);


