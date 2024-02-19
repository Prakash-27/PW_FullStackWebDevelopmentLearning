// const now = new Date();

// console.log(now);
// console.log(typeof now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());

// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());
// console.log(now.toLocaleDateString());
// console.log(now.toLocaleTimeString());


const oldDate = new Date('Jan 20, 2024 23:41:00');
console.log(oldDate);
console.log(oldDate.getTime());

//getTime() will give you milliseconds only, and It was calculated as Jan 1, 1970 12:00:00 AM


const newDate = new Date();
console.log(newDate);
console.log(newDate.getTime());


const gap = newDate - oldDate;
const timeInformation = Math.round(gap/1000/60/60/24);
console.log(`Blog was posted ${timeInformation} days ago!`);

// gap/1000/60/60/24

// gap/1000 -> will count how many seconds ago
// gap/1000/60 -> will count how many minutes ago
// gap/1000/60/60 -> will count how many hours ago
// gap/1000/60/60/24 -> will count how many Days ago


const setDate = new Date(2023, 4, 10, 12,0o0,0o0);
console.log(setDate);
console.log(setDate.getTime());

const $setDate = new Date(1683700390050);
console.log($setDate);
console.log($setDate.getTime());