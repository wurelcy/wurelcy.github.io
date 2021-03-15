const countriesSlides = document.querySelectorAll('.slider__item');
const countriesSlideButtons = document.querySelectorAll('.buttons-list__btn');
let countriesActive = document.querySelector('.buttons-list__btn--active');
let slideActive = document.querySelector('.slider__item--active');

countriesSlideButtons.forEach(function(slideButton, index) {
  if (slideButton.classList.contains('buttons-list__btn--active')) {
    countriesActive = slideButton;
  }
  slideButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    countriesActive.classList.remove('buttons-list__btn--active');
    countriesActive = slideButton;
    slideButton.classList.add('buttons-list__btn--active');
    countriesSlides.forEach(function(slide, slideIndex) {
      if (slide.classList.contains('slider__item--active')) {
        slideActive = slide;
      }
      if (index == slideIndex){
        slideActive.classList.remove('slider__item--active');
        slideActive = slide;
        slide.classList.add('slider__item--active');
      }
      });
    });
  });