/** @format */

"use strict";

const allBirthDays = [
  {
    name: "Shubham",
    date: 12,
    month: "October",
  },
  {
    name: "Abhi",
    date: 18,
    month: "October",
  },
  {
    name: "Sumi and Aman",
    date: 29,
    month: "October",
  },
  {
    name: "Isu",
    date: 4,
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
    date: 8,
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

///////////////////////////////////////////////////////////
const card = document.querySelector(".card");
const cardClose = document.querySelector(".card__close");

cardClose.addEventListener("click", function () {
  if (card.classList.contains("card__display")) {
    card.classList.remove("card__display");
  }
});

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
let i = 0;

let currentYear = new Date().getFullYear();

// /////////////////////////////////////////////////////////////

const countdown = () => {
  let obj = allBirthDays[i];

  let { name, date, month } = obj;

  let nextDate = new Date(
    `${month} ${date}, ${currentYear} 16:35:00`
  ).getTime();
  const now = new Date().getTime();

  const gap = nextDate - now;

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  if (gap < 0) {
    if (i === allBirthDays.length - 1) {
      i = 0;
      currentYear++;
      return;
    } else {
      i++;
      return;
    }
  }

  ///////////////////////////////////////////////////////////////////////////
  //=========================================================================
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //-------------------------------------------------------------------------
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMin = Math.floor((gap % hour) / minute);
  const textSec = Math.floor((gap % minute) / second);

  if (textDay === 0 && textHour === 0 && textMin === 0 && textSec === 0) {
    card.classList.add("card__display");
  }

  //-------------------------------------------------------------------------

  document.querySelector(".heading").innerText = `${name}'s birthday countdown`;

  document.querySelector(".timer__days").innerText = textDay;
  document.querySelector(".timer__hrs").innerText = textHour;
  document.querySelector(".timer__min").innerText = textMin;
  document.querySelector(".timer__sec").innerText = textSec;
};

setInterval(countdown, 1000);

// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
