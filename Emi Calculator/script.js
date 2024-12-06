let principal = document.querySelector("#principal");
let rate = document.querySelector("#rate");
let time = document.querySelector("#time");
let output = document.querySelector("span");
let calculateBtn = document.querySelector("button");

let calculateEmi = () => {
  if (!principal.value && !rate.value && !time.value)
    alert("Please enter field");
  let p = +principal.value;
  let r = +rate.value / 1200;
  let t = +time.value;

  let emi = (p * r * (1 + r) ** t) / ((1 + r) ** t - 1);

  output.textContent = emi.toFixed(2);
  output.classList.add("output");
};

calculateBtn.addEventListener("click", calculateEmi);
