var button = document.querySelector('.page-header__toggle');
var mainNav = document.querySelector('.main-nav');
var stats = document.querySelector('.stats');
var footer = document.querySelector('.page-footer');
var bain = document.querySelector('.bain');
var bainDesktop = document.querySelector('.bain__desktop');
var divBain = document.querySelector('div');

// button.addEventListener('click', function () {
//      divBain.classList.remove('bain');
//  })


button.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav__closed')) {
    divBain.classList.remove('bain');

    mainNav.classList.remove('main-nav__closed');
    mainNav.classList.add('main-nav__opened');

    stats.classList.add('stats__closed');
    stats.classList.remove('stats__opened');

    footer.classList.remove('page-footer__closed');
    footer.classList.add('page-footer__opened');

    bainDesktop.classList.remove('bain__desktop--closed');
    bainDesktop.classList.add('bain__desktop--opened');

    button.classList.remove('page-header__toggle--closed');
    button.classList.add('page-header__toggle--opened');

    // button.classList.add('page-header__toggle--closed');
    // button.classList.add('page-header__toggle--opened::after');


  } else {
    divBain.classList.add('bain');

    mainNav.classList.add('main-nav__closed');
    mainNav.classList.remove('main-nav__opened');

    stats.classList.remove('stats__closed');
    stats.classList.add('stats__opened');

    footer.classList.add('page-footer__closed');
    footer.classList.remove('page-footer__opened');

    bainDesktop.classList.add('bain__desktop--closed');
    bainDesktop.classList.remove('bain__desktop--opened');

    button.classList.add('page-header__toggle--closed');
    button.classList.remove('page-header__toggle--opened');

    // button.classList.remove('.page-header__toggle--closed::before');
    // button.classList.add('page-header__toggle--closed::before');
  }
})

