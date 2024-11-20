let scrollBar = document.querySelector(".scrollprogress");

window.addEventListener("scroll", () => {
let percentage = window.scrollY/((document.body.scrollHeight - window.innerHeight))*100;

scrollBar.style.width = `${percentage}%`;


  
});
