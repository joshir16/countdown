/** @format */

"use strict";

const countdown = () => {
  const countDate = new Date("January 1, 2022 00:00:00").getTime();
  //-----------------
  const now = new Date().getTime();
  const gap = countDate - now;

  // ----------------
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

  document.querySelector(".timer__days").innerText = textDay;
  document.querySelector(".timer__hrs").innerText = textHour;
  document.querySelector(".timer__min").innerText = textMin;
  document.querySelector(".timer__sec").innerText = textSec;
};

setInterval(countdown, 1000);
