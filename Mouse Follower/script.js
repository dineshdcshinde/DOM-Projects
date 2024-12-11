let containers = document.querySelectorAll(".container");

containers.forEach((container) => {
  let img = container.querySelector("img");
  container.addEventListener("mousemove", (e) => {
    img.style.opacity = 1;
    img.style.left = `${e.x}px`;
  });
  container.addEventListener("mouseout", (e) => {
    img.style.opacity = 0;
  });
});
