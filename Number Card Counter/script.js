let counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.textContent = 0;
  let targets = +counter.getAttribute("data-target");

  // increment function
  let count = 0;
let incrementStep = Math.ceil(targets/100)
console.log(incrementStep);


  let increment = () => {
    if(count < targets){
        count+=  incrementStep;
        counter.textContent = count; 
        setInterval(increment, 100); 
    }else{
        counter.textContent = count;
    }
  };

  increment();
});
