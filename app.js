// //DOM ELEMENTS
// let sliderImages=document.querySelectorAll('.slide');
// let arrowLeft=document.querySelector('#arrow-left');
// let arrowRight=document.querySelector('#arrow-right');

// //VARIABLES
// let current=0;


// //CLEAR ALL IMAGES

// function reset(){
// for(let i=0;i<sliderImages.length;i++){
// 	sliderImages[i].style.display="none";
// }
// }

// //INIT SLIDER
// function start(){
// 	reset();
// 	sliderImages[0].style.display.="block";
// }

// //NEXT
// function next(){
// 	reset();
// 	sliderImages[current+1].style.display="block";
// 	current++;
// }

// //PREV
// function prev(){
// 	reset();
// 	sliderImages[current-1].style.display="block";
// 	current--;
// }



// //EVENT LISTENER
// arrowLeft.addEventListener('click',function(){
//  if(current===0)
//  {
//  	current=sliderImages.length;
//  }
//  prev();

// });

// arrowRight.addEventListener('click',function() {
//  if(current===sliderImages.length-1)
//  {
//  	current=-1;
//  }
//  next();

// });

// start();



let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
