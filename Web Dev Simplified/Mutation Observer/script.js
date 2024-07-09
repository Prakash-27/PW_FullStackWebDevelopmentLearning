const mutationObserver = new MutationObserver(entries => {
    console.log(entries);
});

const parent = document.querySelector(".parent");

// mutationObserver.observe(parent, { childList: true });

// parent.children[0].remove();
// parent.appendChild(document.createElement("div"))
// setTimeout(() => {
//     parent.appendChild(document.createElement("div"))    
// }, 100);

// mutationObserver.disconnect()


// mutationObserver.observe(parent, { 
//     attributes: true,
//     attributeOldValue: true,
//     attributeFilter: ["id"],  
// })

// parent.id = "New Id";


// mutationObserver.observe(parent.children[0].childNodes[0], { 
//     characterData: true,
//     characterDataOldValue: true,
// });

// (OR)

mutationObserver.observe(parent, { 
    subtree: true,
    // characterData: true,
    // characterDataOldValue: true,
    attributes: true,
    attributeOldValue: true,
});

parent.id = "test" 
parent.children[0].id = "tests"





