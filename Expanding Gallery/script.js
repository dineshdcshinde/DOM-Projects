let cards = document.querySelectorAll(".inner-container");

function removeClass() {
  cards.forEach((card) => {
    card.classList.remove("active");
    console.log("hi i am called");
    
  });
}

cards.forEach((container) => {
    container.addEventListener("click", () => {
      removeClass();
    container.classList.add("active");
  });
});
