let hours = document.querySelector(".hour");
let minutes = document.querySelector(".min");
let seconds = document.querySelector(".sec");

function getTime() {
  const date = new Date();
  let hrs = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();
  const ampm = hrs >= 12 ? "PM" : "AM";

  hrs = hrs % 12 || 12;
  // Update the text content of the elements
  hours.innerText = hrs.toString().padStart(2, "0") + " :";
  minutes.innerText = mins.toString().padStart(2, "0") + " :";
  seconds.innerText = secs.toString().padStart(2, "0") + " " + ampm;
}

setInterval(getTime, 1000);

//Call immediately to avoid 1-second delay on the first update
getTime();
