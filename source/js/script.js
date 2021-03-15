const slides = document.querySelectorAll('.slider__item');
const slideButtons = document.querySelectorAll('.buttons-list__btn');
let buttonActive = document.querySelector('.buttons-list__btn--active');
let slideActive = document.querySelector('.slider__item--active');
let bgActiveClass = 'first-slide';
const wrapper = document.querySelector('.wrapper');

let removeFade = () => {
  wrapper.classList.remove('fade');
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

        switch (index) {
          case 0: 
          bgActiveClass = 'first-slide';
            break;
          case 1:
            bgActiveClass = 'second-slide';
            break;
          case 2:
            bgActiveClass = 'third-slide';
            break;
          case 3:
            bgActiveClass = 'fourth-slide';
          break;
        }

        wrapper.classList.add('fade');
        wrapper.classList.add(bgActiveClass);
        setTimeout(removeFade, 2900);
      }
      });
    });
  });