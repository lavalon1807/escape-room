var button = document.querySelector('.page-header__toggle');
var mainNav = document.querySelector('.main-nav');
var stats = document.querySelector('.stats');
var footer = document.querySelector('.page-footer');
var bainSel = document.querySelector('.bain-sel');
var bain = document.querySelector('.bain');
var bainDesktop = document.querySelector('.bain__desktop');
var bainSelection = document.querySelector('.bain__selection');
var divBain = document.querySelector('div');
var main = document.querySelector('main');
/* для модального выбора города*/
var buttonCity = document.querySelector('.user-list__link');
var buttonCity1 = document.querySelector('.user-list__link--1');
var buttonCity2 = document.querySelector('.user-list__link--2');

var modalCity = document.querySelector('.modal');
var bodyMain = document.querySelector('.body-main');
var modalClosed = document.querySelector('.closed-modal');

var typeCity1 = document.querySelector('.eee__1');
var typeCity2 = document.querySelector('.eee__2');
var typeCity3 = document.querySelector('.eee__3');
var typeCity4 = document.querySelector('.eee__4');
var typeCity5 = document.querySelector('.eee__5');

var checkCity1 = document.querySelector('.user-list__link--novosibirsk');
var checkCity2 = document.querySelector('.user-list__link--ircutsk');
var checkCity3 = document.querySelector('.user-list__link--smolensk');
var checkCity4 = document.querySelector('.user-list__link--volgograd');
var checkCity5 = document.querySelector('.user-list__link--amur');
/* выбор города на странице квесты */
var cityQuest1 = document.querySelector('.page-main__item--novosibirsk');
var cityQuest2 = document.querySelector('.page-main__item--ircutsk');
var cityQuest3 = document.querySelector('.page-main__item--smolensk');
var cityQuest4 = document.querySelector('.page-main__item--volgograd');
var cityQuest5 = document.querySelector('.page-main__item--amur');
/*перенаправляющая страница маньяк*/
var manResend = document.querySelector('.maniak-resend');
var pageMainItem = document.querySelector('.page-main__item');
/* Задать вопрос */
var buttonQuestion = document.querySelector('.social__question');
var modalQuestion = document.querySelector('.modal-question');
var modalQuestionClosed = document.querySelector('.modal-question__closed');

var modalCheckbox = document.querySelector('.modal-question__checkbox');

button.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav__closed')) {
    main.classList.remove('bain__closed');
    main.classList.add('bain__opened');

    mainNav.classList.remove('main-nav__closed');
    mainNav.classList.add('main-nav__opened');

    footer.classList.remove('page-footer__closed');
    footer.classList.add('page-footer__opened');

    bainDesktop.classList.remove('bain__desktop--closed');
    bainDesktop.classList.add('bain__desktop--opened');

    button.classList.remove('page-header__toggle--closed');
    button.classList.add('page-header__toggle--opened');

  } else {
    main.classList.add('bain__closed');
    main.classList.remove('bain__opened');

    mainNav.classList.add('main-nav__closed');
    mainNav.classList.remove('main-nav__opened');

    footer.classList.add('page-footer__closed');
    footer.classList.remove('page-footer__opened');

    bainDesktop.classList.add('bain__desktop--closed');
    bainDesktop.classList.remove('bain__desktop--opened');

    button.classList.add('page-header__toggle--closed');
    button.classList.remove('page-header__toggle--opened');
  }
})

checkCity1.addEventListener('click', function() {
  if (window.innerWidth <= 1366) {
    modalCity.classList.add('modal-city__opened');
    modalCity.classList.remove('modal-city__closed');

    bainDesktop.classList.add('bain__desktop--closed');
    bainDesktop.classList.remove('bain__desktop--opened');

    bodyMain.classList.add('body-main__closed');
  } else {
    modalCity.classList.add('modal-city__opened');
    modalCity.classList.remove('modal-city__closed');

    bainDesktop.classList.add('bain__desktop--closed');
    bainDesktop.classList.remove('bain__desktop--opened');

    bodyMain.classList.remove('body-main__closed');
    bainSel.classList.add('bain__closed--dark');
  }
})

checkCity2.addEventListener('click', function() {
  if (window.innerWidth <= 1366) {
    modalCity.classList.add('modal-city__opened');
    modalCity.classList.remove('modal-city__closed');

    bainDesktop.classList.add('bain__desktop--closed');
    bainDesktop.classList.remove('bain__desktop--opened');

    bodyMain.classList.add('body-main__closed');
  } else {
    modalCity.classList.add('modal-city__opened');
    modalCity.classList.remove('modal-city__closed');

    bainDesktop.classList.add('bain__desktop--closed');
    bainDesktop.classList.remove('bain__desktop--opened');

    bodyMain.classList.remove('body-main__closed');
    bainSel.classList.add('bain__closed--dark');
  }
})

checkCity3.addEventListener('click', function() {
  if (window.innerWidth <= 1366) {
    modalCity.classList.add('modal-city__opened');
    modalCity.classList.remove('modal-city__closed');

    bainDesktop.classList.add('bain__desktop--closed');
    bainDesktop.classList.remove('bain__desktop--opened');

    bodyMain.classList.add('body-main__closed');
  } else {
    modalCity.classList.add('modal-city__opened');
    modalCity.classList.remove('modal-city__closed');

    bainDesktop.classList.add('bain__desktop--closed');
    bainDesktop.classList.remove('bain__desktop--opened');

    bodyMain.classList.remove('body-main__closed');
    bainSel.classList.add('bain__closed--dark');
  }
})

checkCity4.addEventListener('click', function() {
  if (window.innerWidth <= 1366) {
    modalCity.classList.add('modal-city__opened');
    modalCity.classList.remove('modal-city__closed');

    bainDesktop.classList.add('bain__desktop--closed');
    bainDesktop.classList.remove('bain__desktop--opened');

    bodyMain.classList.add('body-main__closed');
  } else {
    modalCity.classList.add('modal-city__opened');
    modalCity.classList.remove('modal-city__closed');

    bainDesktop.classList.add('bain__desktop--closed');
    bainDesktop.classList.remove('bain__desktop--opened');

    bodyMain.classList.remove('body-main__closed');
    bainSel.classList.add('bain__closed--dark');
  }
})

checkCity5.addEventListener('click', function() {
  if (window.innerWidth <= 1366) {
    modalCity.classList.add('modal-city__opened');
    modalCity.classList.remove('modal-city__closed');

    bainDesktop.classList.add('bain__desktop--closed');
    bainDesktop.classList.remove('bain__desktop--opened');

    bodyMain.classList.add('body-main__closed');
  } else {
    modalCity.classList.add('modal-city__opened');
    modalCity.classList.remove('modal-city__closed');

    bainDesktop.classList.add('bain__desktop--closed');
    bainDesktop.classList.remove('bain__desktop--opened');

    bodyMain.classList.remove('body-main__closed');
    bainSel.classList.add('bain__closed--dark');
  }
})

modalClosed.addEventListener('click', function() {
  bodyMain.classList.remove('body-main__closed');

  modalCity.classList.remove('modal-city__opened');
  modalCity.classList.add('modal-city__closed');

  bainDesktop.classList.add('bain__desktop--closed');
  bainDesktop.classList.remove('bain__desktop--opened');

  bainSel.classList.remove('bain__closed--dark');
})

typeCity1.addEventListener('click', function() {
  checkCity1.classList.remove('user-list__closed');

  checkCity2.classList.add('user-list__closed');
  checkCity3.classList.add('user-list__closed');
  checkCity4.classList.add('user-list__closed');
  checkCity5.classList.add('user-list__closed');

  bodyMain.classList.remove('body-main__closed');

  modalCity.classList.remove('modal-city__opened');
  modalCity.classList.add('modal-city__closed');

  bainDesktop.classList.add('bain__desktop--closed');
  bainDesktop.classList.remove('bain__desktop--opened');
  /* выбор города на странице квесты */
  cityQuest1.classList.remove('user-list__closed');
  cityQuest1.classList.add('user-list__opened--novosibirsk');

  cityQuest2.classList.remove('user-list__opened--ircutsk');
  cityQuest3.classList.remove('user-list__opened--smolensk');
  cityQuest4.classList.remove('user-list__opened--volgograd');
  cityQuest5.classList.remove('user-list__opened--amur');

  cityQuest2.classList.add('user-list__closed');
  cityQuest3.classList.add('user-list__closed');
  cityQuest4.classList.add('user-list__closed');
  cityQuest5.classList.add('user-list__closed');

  bainSel.classList.remove('bain__closed--dark');
})

typeCity2.addEventListener('click', function() {
  checkCity2.classList.remove('user-list__closed');

  checkCity1.classList.add('user-list__closed');
  checkCity3.classList.add('user-list__closed');
  checkCity4.classList.add('user-list__closed');
  checkCity5.classList.add('user-list__closed');

  bodyMain.classList.remove('body-main__closed');

  modalCity.classList.remove('modal-city__opened');
  modalCity.classList.add('modal-city__closed');

  bainDesktop.classList.add('bain__desktop--closed');
  bainDesktop.classList.remove('bain__desktop--opened');
  /* выбор города на странице квесты */
  cityQuest2.classList.remove('user-list__closed');
  cityQuest2.classList.add('user-list__opened--ircutsk');

  cityQuest1.classList.remove('user-list__opened--novosibirsk');
  cityQuest3.classList.remove('user-list__opened--smolensk');
  cityQuest4.classList.remove('user-list__opened--volgograd');
  cityQuest5.classList.remove('user-list__opened--amur');

  cityQuest1.classList.add('user-list__closed');
  cityQuest3.classList.add('user-list__closed');
  cityQuest4.classList.add('user-list__closed');
  cityQuest5.classList.add('user-list__closed');

  bainSel.classList.remove('bain__closed--dark');
})

typeCity3.addEventListener('click', function() {
  checkCity3.classList.remove('user-list__closed');

  checkCity2.classList.add('user-list__closed');
  checkCity1.classList.add('user-list__closed');
  checkCity4.classList.add('user-list__closed');
  checkCity5.classList.add('user-list__closed');

  bodyMain.classList.remove('body-main__closed');

  modalCity.classList.remove('modal-city__opened');
  modalCity.classList.add('modal-city__closed');

  bainDesktop.classList.add('bain__desktop--closed');
  bainDesktop.classList.remove('bain__desktop--opened');
  /* выбор города на странице квесты */
  cityQuest3.classList.remove('user-list__closed');
  cityQuest3.classList.add('user-list__opened--smolensk');

  cityQuest1.classList.remove('user-list__opened--novosibirsk');
  cityQuest2.classList.remove('user-list__opened--ircutsk');
  cityQuest4.classList.remove('user-list__opened--volgograd');
  cityQuest5.classList.remove('user-list__opened--amur');

  cityQuest2.classList.add('user-list__closed');
  cityQuest1.classList.add('user-list__closed');
  cityQuest4.classList.add('user-list__closed');
  cityQuest5.classList.add('user-list__closed');

  bainSel.classList.remove('bain__closed--dark');
})

typeCity4.addEventListener('click', function() {
  checkCity4.classList.remove('user-list__closed');

  checkCity2.classList.add('user-list__closed');
  checkCity3.classList.add('user-list__closed');
  checkCity1.classList.add('user-list__closed');
  checkCity5.classList.add('user-list__closed');

  bodyMain.classList.remove('body-main__closed');

  modalCity.classList.remove('modal-city__opened');
  modalCity.classList.add('modal-city__closed');

  bainDesktop.classList.add('bain__desktop--closed');
  bainDesktop.classList.remove('bain__desktop--opened');
  /* выбор города на странице квесты */
  cityQuest4.classList.remove('user-list__closed');
  cityQuest4.classList.add('user-list__opened--volgograd');

  cityQuest1.classList.remove('user-list__opened--novosibirsk');
  cityQuest2.classList.remove('user-list__opened--ircutsk');
  cityQuest3.classList.remove('user-list__opened--smolensk');
  cityQuest5.classList.remove('user-list__opened--amur');

  cityQuest2.classList.add('user-list__closed');
  cityQuest3.classList.add('user-list__closed');
  cityQuest1.classList.add('user-list__closed');
  cityQuest5.classList.add('user-list__closed');

  bainSel.classList.remove('bain__closed--dark');
})

typeCity5.addEventListener('click', function() {
  checkCity5.classList.remove('user-list__closed');

  checkCity2.classList.add('user-list__closed');
  checkCity3.classList.add('user-list__closed');
  checkCity4.classList.add('user-list__closed');
  checkCity1.classList.add('user-list__closed');

  bodyMain.classList.remove('body-main__closed');

  modalCity.classList.remove('modal-city__opened');
  modalCity.classList.add('modal-city__closed');

  bainDesktop.classList.add('bain__desktop--closed');
  bainDesktop.classList.remove('bain__desktop--opened');
  /* выбор города на странице квесты */
  cityQuest5.classList.remove('user-list__closed');
  cityQuest5.classList.add('user-list__opened--amur');

  cityQuest1.classList.remove('user-list__opened--novosibirsk');
  cityQuest2.classList.remove('user-list__opened--ircutsk');
  cityQuest3.classList.remove('user-list__opened--smolensk');
  cityQuest4.classList.remove('user-list__opened--volgograd');

  cityQuest2.classList.add('user-list__closed');
  cityQuest3.classList.add('user-list__closed');
  cityQuest4.classList.add('user-list__closed');
  cityQuest1.classList.add('user-list__closed');

  bainSel.classList.remove('bain__closed--dark');
})

manResend.addEventListener('click', function() {
  document.location.href = "../quest-maniak.html"
  if (cityQuest1.classList.contains('user-list__opened--novosibirsk')) {
    document.location.href = "../quest-maniak.html"
  }
})

manResend.addEventListener('click', function() {
  if (cityQuest2.classList.contains('user-list__opened--ircutsk')) {
    document.location.href = "../quest-maniak2.html"
  }
})

manResend.addEventListener('click', function() {
  if (cityQuest3.classList.contains('user-list__opened--smolensk')) {
    document.location.href = "../quest-maniak3.html"
  }
})

manResend.addEventListener('click', function() {
  if (cityQuest4.classList.contains('user-list__opened--volgograd')) {
    document.location.href = "../quest-maniak4.html"
  }
})

manResend.addEventListener('click', function() {
  if (cityQuest5.classList.contains('user-list__opened--amur')) {
    document.location.href = "../quest-maniak5.html"
  }
})

buttonQuestion.addEventListener('click', function() {
  if (window.innerWidth <= 1366) {
    modalQuestion.classList.remove('modal-city__closed');
    modalQuestion.classList.add('modal-city__opened');
    modalCity.classList.add('modal-city__closed');

    bainDesktop.classList.add('bain__desktop--closed');
    bainDesktop.classList.remove('bain__desktop--opened');

    bodyMain.classList.add('body-main__closed');

    bainSel.classList.remove('bain__opened');
    bainSel.classList.add('bain__closed');
    /*добавляет фон при открытии вопроса*/
    // bain.classList.add('bain__closed--dark');
  } else {
    modalQuestion.classList.remove('modal-city__closed');
    modalQuestion.classList.add('modal-city__opened');
    modalCity.classList.add('modal-city__closed');

    bainDesktop.classList.add('bain__desktop--closed');
    bainDesktop.classList.remove('bain__desktop--opened');

    bainSel.classList.remove('bain__opened');
    bainSel.classList.add('bain__closed');
    /*добавляет фон при открытии вопроса*/
    bainSel.classList.add('bain__closed--dark');
  }
})

modalQuestionClosed.addEventListener('click', function() {
  if (window.innerWidth <= 1366) {
    bodyMain.classList.remove('body-main__closed');

    modalQuestion.classList.remove('modal-city__opened');
    modalQuestion.classList.add('modal-city__closed');

    bainDesktop.classList.remove('bain__desktop--closed');
    bainDesktop.classList.add('bain__desktop--opened');

    bainSel.classList.remove('bain__opened');
    bainSel.classList.add('bain__closed');

    bainSel.classList.remove('bain__closed--dark');
  } else {
    bodyMain.classList.remove('body-main__closed');

    modalQuestion.classList.remove('modal-city__opened');
    modalQuestion.classList.add('modal-city__closed');

    bainDesktop.classList.add('bain__desktop--closed');
    bainDesktop.classList.remove('bain__desktop--opened');

    bainSel.classList.remove('bain__opened');
    bainSel.classList.add('bain__closed');

    bainSel.classList.remove('bain__closed--dark');
  }
})

modalCheckbox.addEventListener('change', function() {
  document.getElementById('submit').disabled = !this.checked;
})



