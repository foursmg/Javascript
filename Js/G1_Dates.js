//  Date in JavaScript is a built-in object used to work with:
// Current data, Current time, Specific Dates, Formatting Dates, getting day/month/year, calculation with time

//Used for thing like: showing current time, timers, Age calculator, contdown apps, timestamps

//Create Date Object
const d = new Date();
console.log(d);   //Fri May 15 2026 22:43:19 GMT+0530 (India Standard Time)

//Date Objects are static. The "clock" is not running.
//The computer clock is ticking, date objects are not.
//By default, JavaScript will use the browser's time zone and display a date as a full text string

//Specific Date
const specificD= new Date("2025-05-21");
console.log(specificD);
//Using Numbers
const specificD2 = new Date(2024,5,22);
console.log(specificD2);
const specificD3 = new Date("October 13, 2014 11:13:00");
console.log(specificD3);

// Choosen month 5 but month in output console -> june
// Because months are zero-indexed in JS:
// 0-> January, 1-> February, 2-> March, 3-> April, 4-> may, 5-> june



console.log("--------------------");




{
    let d = new Date();
    console.log(d.getFullYear());  //2026
    console.log(d.getMonth());    //4
    console.log(d.getHours());    //23
    console.log(d.getDay());      //5
    //day also follows 0 indexing
    // 0-> sunday, 1->Monday, 2->tuesday, ....., 6->Saturday
}


/*

Creating dateObjects
Date objects are created with the new Date() constructor.
There are 9 ways to create a new date object:

new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
^ numbers specify year, month, day, hour, minute, second

new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)

*/


{
    const d = new Date(1872,11,31,23,50,6);
    console.log(d);

    //Specifying a month higher than 11, will not result in an error but add the overflow to the next year
    const d2 = new Date(1234,12,31,23,61,60);
    console.log(d2);

    const d3 = new Date(2017,11);
    console.log(d3);

    //Cannot Omit month. If one one parameter is supplied, it will be treated as milliseconds.
    const d4 = new Date(2081);
    console.log(d4);  //Thu Jan 01 1970 05:30:02 GMT+0530 (India Standard Time)
}


console.log("----------------(Previous Century)----------------");

//Previous century
//One and two digit years will be interpreted as 19xx:

{
    const d = new Date(12,11,23);
    console.log(d);  // Mon Dec 23 1912 00:00:00 GMT+0530 (India Standard Time)

    const d2 = new Date(2,11,21);
    console.log(d2);  //Sun Dec 21 1902 00:00:00 GMT+0521 (India Standard Time)
}

//JavaScript stores dates as number of milliseconds since January 01, 1970.


console.log("----------------(Displaying Dates)----------------");
//The toDateString() method converts a date to a more readable format.

{
    const d = new Date();
    console.log(d.toDateString());  // Fri May 15 2026

     //The toUTCString() method converts a date to a string using the UTC standard:
     console.log(d.toUTCString());  // Fri, 15 May 2026 18:23:05 GMT

     //The toISOString() method converts a date to a string using the ISO standard
     console.log(d.toISOString());  //2026-05-15T18:23:05.702Z

}

// For displaying time on webPage

{
    const d = new Date();
    let time = d.toUTCString();
    document.getElementById("date").innerHTML = time;
}