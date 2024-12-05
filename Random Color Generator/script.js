let wrapper = document.querySelector(".wrapper");

let getRandomNum = () => Math.floor(Math.random() * 16);

let hexaCode = "0123456789ABCDEF";

for (let i = 1; i <= 15; i++) {
  let card = document.createElement("div");
  card.classList.add("card");
  let bgColor = "#";
  for (let j = 0; j < 6; j++) {
    bgColor += hexaCode[getRandomNum()];
  }

  card.style.backgroundColor = bgColor;
  card.textContent = ` ${bgColor}`;

  wrapper.appendChild(card);
}

// Copy to clipboard

let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    window.navigator.clipboard.writeText(card.textContent);

    // Highlight the selected text
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(card);
    selection.removeAllRanges();
    selection.addRange(range);
    //    const range = document.createRange();
    //    range.selectNodeContents(card); // Select the text content of the card
    //    selection.removeAllRanges(); // Clear any previous selection
    //    selection.addRange(range);
  });
});
