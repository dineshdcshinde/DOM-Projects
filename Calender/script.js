let month = document.querySelector(".month");
let day = document.querySelector(".day");
let date = document.querySelector(".date");
let year = document.querySelector(".year");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

document.addEventListener("DOMContentLoaded", () => {
  date.textContent = new Date().getDate();

  let currentDay = new Date().getDay();

  day.textContent = days[currentDay];

  year.textContent = new Date().getFullYear();
});
