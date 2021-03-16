const slides = document.querySelectorAll('.slider__item');
const slideButtons = document.querySelectorAll('.buttons-list__btn');
let buttonActive = document.querySelector('.buttons-list__btn--active');
let slideActive = document.querySelector('.slider__item--active');
const bgClasses = ['first-slide', 'second-slide', 'third-slide', 'fourth-slide'];
let bgActiveClass = bgClasses[0];
const wrapper = document.querySelector('.wrapper');

let xDown = null;                                                        
let yDown = null;

let removeFade = () => {
  wrapper.classList.remove('fade');
};

let isLeftElement = (ind) => {
  if (ind === 0) {
    buttonActive = slideButtons[3];
    slideActive = slides[3];
    bgActiveClass = bgClasses[3];
  } else {
    buttonActive = slideButtons[ind - 1];  
    slideActive = slides[ind - 1];
    bgActiveClass = bgClasses[ind - 1];
  } 
};

let isRightElement = (ind) => {
  if (ind === 3) {
    buttonActive = slideButtons[0];
    slideActive = slides[0];
    bgActiveClass = bgClasses[0];
  } else {
    buttonActive = slideButtons[ind + 1];  
    slideActive = slides[ind + 1];
    bgActiveClass = bgClasses[ind + 1];
  }  
};

let getTouches = (evt) => {
  return evt.touches;
}                                                     

let handleTouchStart = (evt) => {
  const firstTouch = getTouches(evt)[0];                                      
  xDown = firstTouch.clientX;                                                                         
};                                                

let handleTouchMove = (evt) => {
  if (!xDown) {
      return;
  }

  let xUp = evt.touches[0].clientX;                                    

  let xDiff = xDown - xUp;

  let ind;
  slideButtons.forEach(function(el, i) {
    if (el === buttonActive) {
      ind = i;
    }
  }) 

  removeFade();
  buttonActive.classList.remove('buttons-list__btn--active');
  slideActive.classList.remove('slider__item--active');
  wrapper.classList.remove(bgActiveClass);

  if ( xDiff > 0 ) {
    isLeftElement(ind); 
  } else {
    isRightElement(ind);
  }                                                                                       

  xDown = null;
  
  buttonActive.classList.add('buttons-list__btn--active');
  slideActive.classList.add('slider__item--active');
  wrapper.classList.add('fade');
  wrapper.classList.add(bgActiveClass);
  setTimeout(removeFade, 2400);
};

slideButtons.forEach(function(slideButton, index) {
  if (slideButton.classList.contains('buttons-list__btn--active')) {
    buttonActive = slideButton;
  }
  slideButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    removeFade();
    buttonActive.classList.remove('buttons-list__btn--active');
    buttonActive = slideButton;
    
    slideButton.classList.add('buttons-list__btn--active');
    slides.forEach(function(slide, slideIndex) {
      if (slide.classList.contains('slider__item--active')) {
        slideActive = slide;
      }
      if (index == slideIndex){
        slideActive.classList.remove('slider__item--active');
        slideActive = slide;
        slide.classList.add('slider__item--active');
        wrapper.classList.remove(bgActiveClass);

        bgActiveClass = bgClasses[index];

        wrapper.classList.add('fade');
        wrapper.classList.add(bgActiveClass);
        setTimeout(removeFade, 2400);
      }
      });
    });
  });

window.addEventListener('keydown', function (evt) {
  let ind;
  slideButtons.forEach(function(el, i) {
    if (el === buttonActive) {
      ind = i;
    }
  }) 

  removeFade();
  buttonActive.classList.remove('buttons-list__btn--active');
  slideActive.classList.remove('slider__item--active');
  wrapper.classList.remove(bgActiveClass);

  if (evt.key === 'ArrowLeft') {
    evt.preventDefault();
    isLeftElement(ind);
  } else if (evt.key === 'ArrowRight') {
    evt.preventDefault();
    isRightElement(ind);
  }

  buttonActive.classList.add('buttons-list__btn--active');
  slideActive.classList.add('slider__item--active');
  wrapper.classList.add('fade');
  wrapper.classList.add(bgActiveClass);
  setTimeout(removeFade, 2400);
});

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);