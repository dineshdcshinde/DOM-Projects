let jump = document.querySelector(".jump-name");

let elemets = document.querySelectorAll("span");

elemets.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  });
});
