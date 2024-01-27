
//get required elements from DOM
const button = document.getElementById('btn');
const colorText = document.querySelector('.color');

const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
]

//add event listener to the button
button.addEventListener('click', () => {
    // alert('clicked')

    const hexColor = generateHexColor();

    document.body.style.backgroundColor = hexColor;
    colorText.textContent = hexColor;
})

//function to generate hex color

const generateHexColor = () => {
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomIndex()]
    }
    // alert(hexColor)
    return hexColor;
}

const getRandomIndex = () => {
    return Math.floor(Math.random() * hex.length)
}