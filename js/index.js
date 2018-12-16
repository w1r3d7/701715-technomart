'use strict';

function active(elem) {
  var a = document.getElementsByTagName('button')
  for (var i = 0; i < a.length; i++) {
      a[i].classList.remove('active-button')
  }
  elem.classList.add('active-button');

  var delivery = document.querySelector('.delivery-btn');
  var deliveryItem = document.querySelector('.delivery-item');
  var guarantee = document.querySelector('.guarantee-btn');
  var guaranteItem = document.querySelector('.guarantee-item');
  var credit = document.querySelector('.credit-btn');
  var creditItem = document.querySelector('.credit-item');

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

var feedbackModal = document.querySelector('.modal-login');
var inputName = feedbackModal.querySelector('[name="name"]');
var inputEmail = feedbackModal.querySelector('[name="email"]');
var openFeedback = document.querySelector('.btn-contacts');
var form = feedbackModal.querySelector('form');

var closeModal = document.getElementsByClassName('modal-close');

var mapModal = document.querySelector('.modal-map');
var openMap = document.querySelector('.map-link');

openFeedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackModal.classList.add('active-modal');
  inputName.focus();
});

form.addEventListener('submit', function (evt) {
  if (!inputName.value || !inputEmail.value ) {
    evt.preventDefault();
    feedbackModal.classList.remove('error-modal');
    void feedbackModal.offsetWidth;
    feedbackModal.classList.add('error-modal');
  }
});

closeModal[0].onclick = function () {
  feedbackModal.classList.remove('active-modal');
  feedbackModal.classList.remove('error-modal')
}

openMap.onclick = function (evt) {
  evt.preventDefault();
  mapModal.classList.add('active-modal');
}

closeModal[1].onclick = function () {
  mapModal.classList.remove('active-modal');
}

var modalCart = document.querySelector('.modal-cart-add');
var cartBook = document.querySelectorAll('.bookmark');
var cartBuy = document.querySelectorAll('.buy');
var cartCon = document.querySelector('.continue');
var bookmarkBlock = document.querySelector('.header-link-bookmarks');
var cartBlock = document.querySelector('.header-link-cart');
var output = document.querySelectorAll('output');
var bookmarksPlus = 0;
var cartPlus = 0;

for (var i = 0; i < cartBuy.length; i++) {
  cartBuy[i].addEventListener('click', function(evt) {
  evt.preventDefault();
  modalCart.classList.add('active-modal');
  cartPlus++;
  output[1].innerHTML = cartPlus;
  cartBlock.classList.add('not-empty');
});
}

for (var i = 0; i < cartBook.length; i++) {
cartBook[i].addEventListener('click', function(evt){
  evt.preventDefault();
  bookmarksPlus++;
  output[0].innerHTML = bookmarksPlus;
  bookmarkBlock.classList.add('not-empty');
});

}

cartCon.onclick = function (evt) {
  evt.preventDefault();
  modalCart.classList.remove('active-modal');
}

closeModal[2].onclick = function (evt) {
  evt.preventDefault();
  modalCart.classList.remove('active-modal');
}


window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackModal.classList.contains('active-modal')) {
      feedbackModal.classList.remove('active-modal');
      feedbackModal.classList.remove('error-modal');
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapModal.classList.contains('active-modal')) {
      mapModal.classList.remove('active-modal');
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalCart.classList.contains('active-modal')) {
      modalCart.classList.remove('active-modal');
    }
  }
});