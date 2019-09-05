var button = document.querySelector('.page-header__toggle');
var mainNav = document.querySelector('.main-nav');
var stats = document.querySelector('.stats');
var footer = document.querySelector('.page-footer');
var bain = document.querySelector('.bain');
var bainDesktop = document.querySelector('.bain__desktop');
var bainSelection = document.querySelector('.bain__selection');
var divBain = document.querySelector('div');
var main = document.querySelector('main');

button.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav__closed')) {
    divBain.classList.remove('bains-experiment');

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
    divBain.classList.add('bains-experiment');

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
})
