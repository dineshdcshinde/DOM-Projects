let bill = document.querySelector("#bill");
let tipAmt = document.querySelector("#tipAmt");
let output = document.querySelector("span");
let btn = document.querySelector("btn");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let billValue = +bill.value;
  let tipValue = +tipAmt.value;
  let total = billValue + (billValue * tipValue) / 100;
  output.classList.add("output");
  output.textContent = total.toFixed(2);
  bill.value = "";
  tipAmt.value = "";
});
