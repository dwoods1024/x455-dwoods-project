const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slideIndex = 0;
slides[slideIndex].classList.add('active');
prevBtn.addEventListener('click', prevSlide);
prevBtn.addEventListener('click', nextSlide);

function prevSlide(){
  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex === 0) ? slides.length -1 : slideIndex -1;
  slides[slideIndex].classList.add('active');
  slider.style.transform = 'translateX(-${slideIndex * 100}%)';  
}
function nextSlide(){
  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex === slides.length -1) ? 0 : slideIndex +1;
  slides[slideIndex].classList.add('active');
  slider.style.transform = 'translateX(-${slideIndex * 100}%)';  
}
