let generateBtn = document.querySelector("button");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

let api = "https://programming-quotes-api.azurewebsites.net/api/quotes/random";

const generateQuote = async () => {
  try {
    let response = await fetch(api);
    let data = await response.json();
    quote.textContent = data.text;
    author.textContent = ` - ${data.author}`;
  } catch (error) {
    console.log(error.message);
  }
};

generateBtn.addEventListener("click", generateQuote);
