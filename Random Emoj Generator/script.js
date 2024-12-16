let generateBtn = document.querySelector("#generateBtn");
let output = document.querySelector(".output");
let emojName = document.querySelector("#emoj-name");

let apiKey = "your-api-key";
let getRandom = (n) => {
  return Math.floor(Math.random() * n);
};

generateBtn.addEventListener("click", async () => {
  let data = await fetch(`https://emoji-api.com/emojis?access_key=${apiKey}`);

  let jsonData = await data.json();

  console.log("jsonData: ", jsonData);

  let randomEmojInfo = getRandom(jsonData.length);

  output.textContent = jsonData[randomEmojInfo].character;

  emojName.textContent = jsonData[randomEmojInfo].unicodeName;
});
