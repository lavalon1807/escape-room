var button = document.querySelector('.page-header__toggle');
var mainNav = document.querySelector('.main-nav');
var stats = document.querySelector('.stats');
var footer = document.querySelector('.page-footer');
var bain = document.querySelector('.bain');
var bainDesktop = document.querySelector('.bain__desktop');
var bainSelection = document.querySelector('.bain__selection');
var divBain = document.querySelector('div');
var main = document.querySelector('main');
var maniakInput = document.querySelector('.maniak-input');
var maniakTuch = document.querySelector('.maniak-tuch');
var maniakForm = document.querySelector('.maniak-order__form');
var orderButton = document.querySelector('.maniak-data__button');
var timeOrder1 = document.querySelector('.q1--1');
var timeOrder2 = document.querySelector('.q1--2');
var timeOrder3 = document.querySelector('.q1--5');
var timeOrder4 = document.querySelector('.q1--6');
var timeOrder5 = document.querySelector('.q1--8');
var timeOrder6 = document.querySelector('.q1--9');
var timeOrder7 = document.querySelector('.q1--10');
var endingOrder1 = document.querySelector('.maniak-order__ending-1');
var endingOrder2 = document.querySelector('.maniak-order__ending-2');
var endingOrder3 = document.querySelector('.maniak-order__ending-3');
var endingOrder4 = document.querySelector('.maniak-order__ending-4');
var endingOrder5 = document.querySelector('.maniak-order__ending-5');
var endingOrder6 = document.querySelector('.maniak-order__ending-6');
var endingOrder7 = document.querySelector('.maniak-order__ending-7');
var startOrder1 = document.querySelector('.maniak-order__start-1');
var startOrder2 = document.querySelector('.maniak-order__start-2');
var startOrder3 = document.querySelector('.maniak-order__start-3');
var startOrder4 = document.querySelector('.maniak-order__start-4');
var startOrder5 = document.querySelector('.maniak-order__start-5');
var startOrder6 = document.querySelector('.maniak-order__start-6');
var startOrder7 = document.querySelector('.maniak-order__start-7');
var payment = document.querySelector('.maniak-order__payment');
var paymentEnd = document.querySelector('.maniak-order__payment-end');

button.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav__closed')) {
    main.classList.remove('bain__closed');
    main.classList.add('bain__opened');

    mainNav.classList.remove('main-nav__closed');
    mainNav.classList.add('main-nav__opened');

    footer.classList.remove('page-footer__closed');
    footer.classList.add('page-footer__opened');

    bainSelection.classList.remove('bain__selection--closed');
    bainSelection.classList.add('bain__selection--opened');

    button.classList.remove('page-header__toggle--closed');
    button.classList.add('page-header__toggle--opened');

  } else {
    main.classList.add('bain__closed');
    main.classList.remove('bain__opened');

    mainNav.classList.add('main-nav__closed');
    mainNav.classList.remove('main-nav__opened');

    footer.classList.add('page-footer__closed');
    footer.classList.remove('page-footer__opened');

    bainSelection.classList.add('bain__selection--closed');
    bainSelection.classList.remove('bain__selection--opened');

    button.classList.add('page-header__toggle--closed');
    button.classList.remove('page-header__toggle--opened');
  }
});

orderButton.addEventListener('click', function() {
  if (maniakInput.classList.contains('maniak-input__closed')) {
    maniakInput.classList.remove('maniak-input__closed');
    maniakInput.classList.add('maniak-input__opened');

    maniakForm.classList.remove('maniak-order__form--closed');
    maniakForm.classList.add('maniak-order__form--opened');
  } else {
    maniakInput.classList.add('maniak-input__closed');
    maniakInput.classList.remove('maniak-input__opened');

    maniakForm.classList.add('maniak-order__form--closed');
    maniakForm.classList.remove('maniak-order__form--opened');
  }
})

timeOrder1.addEventListener('click', function() {
    payment.classList.remove('maniak-order__payment--closed');
    endingOrder1.classList.add('maniak-order__ending--opened-1');
    endingOrder2.classList.remove('maniak-order__ending--opened-2');
    endingOrder3.classList.remove('maniak-order__ending--opened-3');
    endingOrder4.classList.remove('maniak-order__ending--opened-4');
    endingOrder5.classList.remove('maniak-order__ending--opened-5');
    endingOrder6.classList.remove('maniak-order__ending--opened-6');
    endingOrder7.classList.remove('maniak-order__ending--opened-7');

    paymentEnd.classList.remove('maniak-order__payment--closed');
    startOrder1.classList.add('maniak-order__ending--opened-1');
    startOrder2.classList.remove('maniak-order__ending--opened-2');
    startOrder3.classList.remove('maniak-order__ending--opened-3');
    startOrder4.classList.remove('maniak-order__ending--opened-4');
    startOrder5.classList.remove('maniak-order__ending--opened-5');
    startOrder6.classList.remove('maniak-order__ending--opened-6');
    startOrder7.classList.remove('maniak-order__ending--opened-7');
})

timeOrder2.addEventListener('click', function() {
  payment.classList.remove('maniak-order__payment--closed');
    endingOrder2.classList.add('maniak-order__ending--opened-2');
    endingOrder1.classList.remove('maniak-order__ending--opened-1');
    endingOrder3.classList.remove('maniak-order__ending--opened-3');
    endingOrder4.classList.remove('maniak-order__ending--opened-4');
    endingOrder5.classList.remove('maniak-order__ending--opened-5');
    endingOrder6.classList.remove('maniak-order__ending--opened-6');
    endingOrder7.classList.remove('maniak-order__ending--opened-7');

    paymentEnd.classList.remove('maniak-order__payment--closed');
    startOrder2.classList.add('maniak-order__ending--opened-2');
    startOrder1.classList.remove('maniak-order__ending--opened-1');
    startOrder3.classList.remove('maniak-order__ending--opened-3');
    startOrder4.classList.remove('maniak-order__ending--opened-4');
    startOrder5.classList.remove('maniak-order__ending--opened-5');
    startOrder6.classList.remove('maniak-order__ending--opened-6');
    startOrder7.classList.remove('maniak-order__ending--opened-7');
})

timeOrder3.addEventListener('click', function() {
  payment.classList.remove('maniak-order__payment--closed');
    endingOrder3.classList.add('maniak-order__ending--opened-3');
    endingOrder2.classList.remove('maniak-order__ending--opened-2');
    endingOrder1.classList.remove('maniak-order__ending--opened-1');
    endingOrder4.classList.remove('maniak-order__ending--opened-4');
    endingOrder5.classList.remove('maniak-order__ending--opened-5');
    endingOrder6.classList.remove('maniak-order__ending--opened-6');
    endingOrder7.classList.remove('maniak-order__ending--opened-7');

    paymentEnd.classList.remove('maniak-order__payment--closed');
    startOrder3.classList.add('maniak-order__ending--opened-3');
    startOrder2.classList.remove('maniak-order__ending--opened-2');
    startOrder1.classList.remove('maniak-order__ending--opened-1');
    startOrder4.classList.remove('maniak-order__ending--opened-4');
    startOrder5.classList.remove('maniak-order__ending--opened-5');
    startOrder6.classList.remove('maniak-order__ending--opened-6');
    startOrder7.classList.remove('maniak-order__ending--opened-7');
})

timeOrder4.addEventListener('click', function() {
  payment.classList.remove('maniak-order__payment--closed');
    endingOrder4.classList.add('maniak-order__ending--opened-4');
    endingOrder2.classList.remove('maniak-order__ending--opened-2');
    endingOrder3.classList.remove('maniak-order__ending--opened-3');
    endingOrder1.classList.remove('maniak-order__ending--opened-1');
    endingOrder5.classList.remove('maniak-order__ending--opened-5');
    endingOrder6.classList.remove('maniak-order__ending--opened-6');
    endingOrder7.classList.remove('maniak-order__ending--opened-7');

    paymentEnd.classList.remove('maniak-order__payment--closed');
    startOrder4.classList.add('maniak-order__ending--opened-4');
    startOrder2.classList.remove('maniak-order__ending--opened-2');
    startOrder3.classList.remove('maniak-order__ending--opened-3');
    startOrder1.classList.remove('maniak-order__ending--opened-1');
    startOrder5.classList.remove('maniak-order__ending--opened-5');
    startOrder6.classList.remove('maniak-order__ending--opened-6');
    startOrder7.classList.remove('maniak-order__ending--opened-7');
})

timeOrder5.addEventListener('click', function() {
  payment.classList.remove('maniak-order__payment--closed');
    endingOrder5.classList.add('maniak-order__ending--opened-5');
    endingOrder2.classList.remove('maniak-order__ending--opened-2');
    endingOrder3.classList.remove('maniak-order__ending--opened-3');
    endingOrder4.classList.remove('maniak-order__ending--opened-4');
    endingOrder1.classList.remove('maniak-order__ending--opened-1');
    endingOrder6.classList.remove('maniak-order__ending--opened-6');
    endingOrder7.classList.remove('maniak-order__ending--opened-7');

    paymentEnd.classList.remove('maniak-order__payment--closed');
    startOrder5.classList.add('maniak-order__ending--opened-5');
    startOrder2.classList.remove('maniak-order__ending--opened-2');
    startOrder3.classList.remove('maniak-order__ending--opened-3');
    startOrder4.classList.remove('maniak-order__ending--opened-4');
    startOrder1.classList.remove('maniak-order__ending--opened-1');
    startOrder6.classList.remove('maniak-order__ending--opened-6');
    startOrder7.classList.remove('maniak-order__ending--opened-7');
})

timeOrder6.addEventListener('click', function() {
  payment.classList.remove('maniak-order__payment--closed');
    endingOrder6.classList.add('maniak-order__ending--opened-6');
    endingOrder2.classList.remove('maniak-order__ending--opened-2');
    endingOrder3.classList.remove('maniak-order__ending--opened-3');
    endingOrder4.classList.remove('maniak-order__ending--opened-4');
    endingOrder5.classList.remove('maniak-order__ending--opened-5');
    endingOrder1.classList.remove('maniak-order__ending--opened-1');
    endingOrder7.classList.remove('maniak-order__ending--opened-7');

    paymentEnd.classList.remove('maniak-order__payment--closed');
    startOrder6.classList.add('maniak-order__ending--opened-6');
    startOrder2.classList.remove('maniak-order__ending--opened-2');
    startOrder3.classList.remove('maniak-order__ending--opened-3');
    startOrder4.classList.remove('maniak-order__ending--opened-4');
    startOrder5.classList.remove('maniak-order__ending--opened-5');
    startOrder1.classList.remove('maniak-order__ending--opened-1');
    startOrder7.classList.remove('maniak-order__ending--opened-7');
})

timeOrder7.addEventListener('click', function() {
  payment.classList.remove('maniak-order__payment--closed');
    endingOrder7.classList.add('maniak-order__ending--opened-7');
    endingOrder2.classList.remove('maniak-order__ending--opened-2');
    endingOrder3.classList.remove('maniak-order__ending--opened-3');
    endingOrder4.classList.remove('maniak-order__ending--opened-4');
    endingOrder5.classList.remove('maniak-order__ending--opened-5');
    endingOrder6.classList.remove('maniak-order__ending--opened-6');
    endingOrder1.classList.remove('maniak-order__ending--opened-1');

    paymentEnd.classList.remove('maniak-order__payment--closed');
    startOrder7.classList.add('maniak-order__ending--opened-7');
    startOrder2.classList.remove('maniak-order__ending--opened-2');
    startOrder3.classList.remove('maniak-order__ending--opened-3');
    startOrder4.classList.remove('maniak-order__ending--opened-4');
    startOrder5.classList.remove('maniak-order__ending--opened-5');
    startOrder6.classList.remove('maniak-order__ending--opened-6');
    startOrder1.classList.remove('maniak-order__ending--opened-1');
})
