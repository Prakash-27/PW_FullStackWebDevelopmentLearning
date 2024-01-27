// In JavaScript dates are object which works with dates and time. It provides methods for creating, manipulating, 
// and formatting dates

// It can be created using the new Date() Keyword.

// Eg:

let date = new Date()
// console.log(date);
// 2023-11-16T08:15:41.804Z

// Date method: 
// some of the importance date method include now(), getDate(), getDay(), getFullYear(), 
// getHours(), getMillisiconds(), getMinutes(), getMonth(), getTime(), setDate(), 
// setMonth(), setFullyear(), toDateString()

// now() - method returns current date and time in milliseconds
// console.log(Date.now()); // 1700122873612 in millisecond

// getDate() - method of Date instances returns the day of the month for this date according to local time.
// console.log(date.getDate()); // 16 present date of the day

// getDay() - method of Date instances returns the day of the week for this date according to local time, where 
// 0 represents Sunday.
// console.log(date.getDay()); // week day in number i.e 4 which is tuesday

// getFullYear() - method of Date instances returns the year for this date according to local time.
// console.log(date.getFullYear()); // 2023

// getHours() - method of Date instances returns the hours for this date according to local time.
// console.log(date.getHours()); // 13

// getMillisiconds() - method of Date instances returns the milliseconds for this date according to local time.
// console.log(date.getMilliseconds()); // 118

// getMinutes() - method of Date instances returns the minutes for this date according to local time.
// console.log(date.getMinutes()); // 0 current minutes

// getMonth() - method of Date instances returns the month for this date according to local time, as a zero-based value
// console.log(date.getMonth()); // 10 present month in number

// getTime() - method of Date instances returns the number of milliseconds for this date since the January 1, 
// 1970, UTC.
// console.log("GetTime ", date.getTime()); // GetTime  1700123654151

// setDate() - method of Date instances changes the day of the month for this date according to local time.
// console.log(date.setDate(15)); // 1700037573411

// setMonth() - method of Date instances changes the month for this date according to local time.
// console.log(date.setMonth(4)); // 1684226449600

// setFullyear() - method of Date instances changes the year, for this date according to local time.
// console.log(date.setFullYear(2020)); // 1605516110581

// toDateString() - method returns the date portion of a Date object interpreted in the local timezone in English
// console.log(date.toDateString()); // Thu Nov 16 2023