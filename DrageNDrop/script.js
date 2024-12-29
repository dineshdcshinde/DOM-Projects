let empties = document.querySelectorAll(".empty");
let imgDrag = document.querySelector(".img-container");

function dragStart(e) {
  e.preventDefault();
}

function dragEnd(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hold");
}

function dragLeave(e) {
  e.preventDefault();
  this.classList.remove("hold");
}

function dragOver(e) {
  e.preventDefault();
}

function drop() {
  this.classList.remove("hold");
  this.appendChild(imgDrag);
}

for (const empty of empties) {
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", drop);
}
