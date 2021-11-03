/** @format */

// "use strict";

const birthDay = [
  {
    name: "Kritika",
    date: 25,
    month: "November",
  },
  {
    name: "Vineeta",
    date: 30,
    month: "November",
  },
  {
    name: "Rishabh",
    date: 16,
    month: "December",
  },
];

// /////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////

let currentYear = new Date().getFullYear();

let name;
let date;
let month;

let gap;

const [obj1] = birthDay;
({ name, date, month } = obj1);

const nextBirthDay = new Date(`${month} ${date}, ${currentYear} 00:00:00`);

console.log(name, nextBirthDay);

// ---------------------------------------------------------------
