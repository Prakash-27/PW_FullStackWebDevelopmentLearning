// Switch Syntax:
// switch (key) {
//     case value:
        
//         break;
    
//     case value:
        
//         break;    

//     case value:
        
//         break;    

//     default:

//         break;
// }

// Eg1:

let grade = 'B'

switch (grade) {
    case 'A':
        console.log("Got A grade");
        break;
    case 'B':
        console.log("Got B grade");
        break;    
    case 'C':
        console.log("Got C grade");
        break;
    case 'D':
        console.log("Got D grade");
        break;
    case 'F':
        console.log("Got F grade");
        break;

    default:
        console.log("Could not evaluate grade");
        break;
}

// Eg2:

let color = 'red'

switch (color) {
    case 'green':
        console.log("Color Green");
        break;
    case 'red':
        console.log("Color Red");
        break;
    case 'orange':
        console.log("Color Orange");
        break;
        
    default:
        console.log("I don't know this color");
        break;
}
