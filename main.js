var hamBurger=document.getElementById("hamburger");
var languageEng=document.getElementById("language");


console.log(hamBurger);
window.addEventListener("scroll",()=>{

  if (document.documentElement.scrollTop > 500) {
    hamBurger.style.border = "2px solid black";
    hamBurger.style.background = "black";
    languageEng.style.transition="1s";
    hamBurger.style.transition="1s";
    languageEng.style.color="#000"

  } else {
    hamBurger.style.border = "2px solid #fff";
    hamBurger.style.background = "none";
    languageEng.style.color="#fff"

  }

});


var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var number3 = document.getElementById("number3");
var number4 = document.getElementById("number4");



  
var count=1;

window.addEventListener("scroll",()=>{

  if (document.documentElement.scrollTop > 1600) {
    setInterval(() => {
      if (count <= 84) {
        count++;
        // number1.innerHTML=count;
      number1.innerHTML=count-3;
      }

      if (count <= 37) {
        count++;
        // number1.innerHTML=count;
      number2.innerHTML=count;
      }

      if (count <= 15) {
        count++;
        // number1.innerHTML=count;
      number3.innerHTML=count-2 ;
      }

      if (count <= 89) {
        count++;
        // number1.innerHTML=count;
      number4.innerHTML=count;
      }
    }, 400);

  }
});


let slides = document.getElementsByClassName("myslides");
let dots = document.getElementsByClassName("dot");

let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
