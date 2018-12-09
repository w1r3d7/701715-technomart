'use strict';

(function () {

  var slider = document.querySelector('.slider-list');
  var slides = slider.querySelectorAll('.slider-item');
  var next = document.querySelector('.slide-left');
  var previous = document.querySelector('.slide-right');
  var pagination = document.querySelectorAll('.pagination-btn');
  var currentSlide = 0;
  var INTERVAL = 5000;
  var slideInterval = setInterval(nextSlide, INTERVAL);
  var index;

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function previousSlide() {
    goToSlide(currentSlide - 1);
  }

  function find(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].classList.contains(value)) {
        index = i;
        return index;
      }
    }
  }

  function goToSlide(n) {
    slides[currentSlide].className = 'slider-item';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slider-item slider-item-active';

    find(slides, 'slider-item-active');

    pagination.forEach(function (elem) {
      elem.classList.remove('pagination-btn-active');
    });
    pagination[index].classList.add('pagination-btn-active');

    if (slideInterval) {
      clearInterval(slideInterval);
    }
    slideInterval = setInterval(nextSlide, INTERVAL);
  }

  next.onclick = function () {
    nextSlide();
  };
  previous.onclick = function () {
    previousSlide();
  };


  pagination.forEach(function (elem, i) {
    elem.addEventListener('click', function () {
      goToSlide(i);
    });
  });

})();
