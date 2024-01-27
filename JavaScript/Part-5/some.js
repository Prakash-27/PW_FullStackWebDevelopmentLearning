const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//**MAP */
//1. Get array of all names
//2. Get array of all height
//3. Get array of all objects with just name and height
//4. Get array of all first names

//**REDUCE */
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//**FILTER */
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4, Get all female characters

//**SORT */
//1. Sort by mass
//2. Sort by weight
//3. Sort by name
//4. Sort by gender

//**EVERY */
//1. Goes every character have blue eyes?
//2. Goes every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//**SOME */
//1. Is there at least one male character?
const oneMaleCharacter = characters.some((character) => {
    return character.gender === "male";
});
console.log(oneMaleCharacter);
//2. Is there at least one character with blue eyes?
const oneBlueEyes = characters.some(
    (character) => character.eye_color === "blue"
);
console.log(oneBlueEyes);
//3. Is there at least one character taller than 210?
const oneTallerThan210 = characters.some((character) => character.height > 210);
console.log(oneTallerThan210);
//4. Is there at least one character that has mass Less than 50?
const oneMassLessThan50 = characters.some((character) => character.mass < 50);
console.log(oneMassLessThan50);

