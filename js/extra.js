/** @format */

// "use strict";

// const currentYear = new Date().getFullYear();

const allBirthDays = [
  {
    name: "Isu",
    date: 04,
    month: "November",
  },
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
    name: "Manjusha",
    date: 08,
    month: "December",
  },
  {
    name: "Indira",
    date: 12,
    month: "December",
  },
  {
    name: "Rishabh",
    date: 16,
    month: "December",
  },
];

// /////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////
let i = 0;

const countdown = () => {
  let obj = allBirthDays[i];

  let { name, date, month } = obj;

  let nextDate = new Date(`${month} ${date}, 2021 12:00:00`).getTime();
  const now = new Date().getTime();

  const gap = nextDate - now;

  if (gap < 0) {
    i++;
    return;
  }
  /////////////////////////////////////////////////////////////////////////
  //=======================================================================
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // -----------------
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMin = Math.floor((gap % hour) / minute);
  const textSec = Math.floor((gap % minute) / second);

  // -----------------------------------------------------

  document.querySelector(".heading").innerText = `${name}'s birthday countdown`;
  document.querySelector(".timer__days").innerText = textDay;
  document.querySelector(".timer__hrs").innerText = textHour;
  document.querySelector(".timer__min").innerText = textMin;
  document.querySelector(".timer__sec").innerText = textSec;
};

setInterval(countdown, 1000);
