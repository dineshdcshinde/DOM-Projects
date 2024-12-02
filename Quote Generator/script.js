let quote = document.querySelector(".quote");
let generateBtn = document.querySelector(".generateBtn");
let author = document.querySelector(".author");


async function generate() {
  let quoteApi = await fetch("https://qapi.vercel.app/api/random");

  let quoteData = await quoteApi.json();

  quote.textContent = quoteData.quote;
  author.textContent = `-${quoteData.author}`;
}

generateBtn.addEventListener("click", generate);
