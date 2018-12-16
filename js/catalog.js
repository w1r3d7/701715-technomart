'use strict';

(function () {
var modalCart = document.querySelector('.modal-cart-add');
var cartBook = document.querySelectorAll('.bookmark');
var cartBuy = document.querySelectorAll('.buy');
var cartCon = document.querySelector('.continue');
var bookmarkBlock = document.querySelector('.header-link-bookmarks');
var cartBlock = document.querySelector('.header-link-cart');
var output = document.querySelectorAll('output');
var bookmarksPlus = 0;
var cartPlus = 0;
var closeModal = document.querySelector('.modal-close');


cartCon.onclick = function (evt) {
        evt.preventDefault();
        modalCart.classList.remove('active-modal');
}

closeModal.onclick = function (evt) {
        evt.preventDefault();
        modalCart.classList.remove('active-modal');
}

for (var i = 0; i < cartBuy.length; i++) {
        cartBuy[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        modalCart.classList.add('active-modal');
        cartPlus++;
        output[1].innerHTML = cartPlus;
        cartBlock.classList.add('not-empty');
});
}

for (var i = 0; i < cartBook.length; i++) {
    cartBook[i].addEventListener("click", function(evt){
        evt.preventDefault();
        bookmarksPlus++;
        output[0].innerHTML = bookmarksPlus;
        bookmarkBlock.classList.add('not-empty');
      });
      
}

'use strict';

(function () {
var modalCart = document.querySelector('.modal-cart-add');
var cartBook = document.querySelectorAll('.bookmark');
var cartBuy = document.querySelectorAll('.buy');
var cartCon = document.querySelector('.continue');
var bookmarkBlock = document.querySelector('.header-link-bookmarks');
var cartBlock = document.querySelector('.header-link-cart');
var output = document.querySelectorAll('output');
var bookmarksPlus = 0;
var cartPlus = 0;
var closeModal = document.querySelector('.modal-close');


cartCon.onclick = function (evt) {
        evt.preventDefault();
        modalCart.classList.remove('active-modal');
}

closeModal.onclick = function (evt) {
        evt.preventDefault();
        modalCart.classList.remove('active-modal');
}

for (var i = 0; i < cartBuy.length; i++) {
        cartBuy[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        modalCart.classList.add('active-modal');
        cartPlus++;
        output[1].innerHTML = cartPlus;
        cartBlock.classList.add('not-empty');
});
}

for (var i = 0; i < cartBook.length; i++) {
    cartBook[i].addEventListener("click", function(evt){
        evt.preventDefault();
        bookmarksPlus++;
        output[0].innerHTML = bookmarksPlus;
        bookmarkBlock.classList.add('not-empty');
      });
      
}

})();

window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (modalCart.classList.contains("active-modal")) {
            modalCart.classList.remove("active-modal");
          }
        }
      })
      
})();

