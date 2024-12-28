let captchaOutput = document.querySelector(".captcha-output");
let inputCaptcha = document.querySelector(".inputCaptcha");
let submitBtn = document.querySelector(".submit-btn");
let refreshBtn = document.querySelector(".refresh-btn");

let captcha =
  "abcdefghijklmopqrstuvwxuzABCDEFHIJKLMNPQRSTUVWXYZ123456789*&%$#@!";

let generateCaptcha = () => {
  let randomCaptcha = "";
  for (let i = 0; i < 6; i++) {
    randomCaptcha += captcha.charAt(Math.floor(Math.random() * captcha.length));
  }
  return randomCaptcha;
};

// It will generate a random captcha when the webpage loads.
captchaOutput.textContent = generateCaptcha();

submitBtn.addEventListener("click", () => {
  if (inputCaptcha.value.trim() == captchaOutput.textContent) {
    alert("Captcha Matched!");
  } else {
    alert("Captcha Mismatched!");
  }
  inputCaptcha.value = "";
});

refreshBtn.addEventListener("click", () => {
  captchaOutput.textContent = generateCaptcha();
});
