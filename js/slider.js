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


function active(elem) {
  var a = document.getElementsByTagName('button')
  for (var i = 0; i < a.length; i++) {
      a[i].classList.remove('active-button')
  }
  elem.classList.add('active-button');

  var delivery = document.getElementById('del');
  var deliveryItem = document.getElementById('delivery-item');
  var guarantee = document.getElementById('gua');
  var guaranteItem = document.getElementById('guarantee-item');
  var credit = document.getElementById('cre');
  var creditItem = document.getElementById('credit-item');

  if(delivery.classList.contains('active-button')) {
      deliveryItem.classList.add('service-active');
  } else {
      deliveryItem.classList.remove('service-active');
  }

  if(guarantee.classList.contains('active-button')) {
      guaranteItem.classList.add('service-active');
  } else {
      guaranteItem.classList.remove('service-active');
  }

  if(credit.classList.contains('active-button')) {
      creditItem.classList.add('service-active');
  } else {
      creditItem.classList.remove('service-active');
  }
}

var feedbackModal = document.getElementById('feedback-modal');
var openFeedback = document.getElementById('open-feedback-modal');

var closeModal = document.getElementsByClassName('modal-close');

var mapModal = document.getElementById('map-modal');
var openMap = document.getElementById('open-map-modal');

openFeedback.onclick = function () {
  feedbackModal.classList.add('active-modal');
}

closeModal[0].onclick = function () {
  feedbackModal.classList.remove('active-modal');
}

openMap.onclick = function () {
  mapModal.classList.add('active-modal');
}

closeModal[1].onclick = function () {
  prevent.defa
  mapModal.classList.remove('active-modal');
}