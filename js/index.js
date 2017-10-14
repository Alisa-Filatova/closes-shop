import '../less/index.less';

var userBlockBtn = document.querySelectorAll('.user-operations__btn');

var card = document.querySelector('#card');
var cardItems = document.querySelector('.card-items');
var cardDeleteBtn = document.querySelectorAll('.card-item__btn-delete');

var catalogBtn = document.querySelector('#catalog-btn');
var catalog = document.querySelector('.catalog');

var registrationWindow = document.querySelector('.modal-window_registration');
var enterWindow = document.querySelector('.modal-window_enter');

var overlay = document.querySelector('.overlay');

var registrationActive = document.querySelector('#registration-active');
var registrationDisabled = document.querySelector('#registration-disabled');
var enterActive = document.querySelector('#enter-active');
var enterDisabled = document.querySelector('#enter-disabled');

var userIcon = document.querySelector('.user-block__icon_color');

var searchField = document.querySelector('#search');
var searchIcon = document.querySelector('.search__icon_color');

var menuOpen = document.querySelector('.menu-open');
var passwordField = document.querySelectorAll('.form__input-text_password');


menuOpen.addEventListener('click', function(event) {
    event.preventDefault();

    var menuOpenBar = document.querySelectorAll('.menu-open__open-bar');
    var mainNav = document.querySelector('.main-nav');

    mainNav.classList.toggle('main-nav_open');
    menuOpenBar[0,1,2].classList.toggle('menu-open__open-bar_active');
});

catalogBtn.addEventListener('click', function(event) {
    event.preventDefault();

    catalog.classList.remove('hide');
    this.classList.add('main-nav__menu-item_link-active');
});

catalogBtn.addEventListener('mouseover', function() {
    catalog.classList.remove('hide');
    this.classList.add('main-nav__menu-item_link-active');
});

catalog.addEventListener('mousemove', function() {
    catalog.classList.remove('hide');
    catalogBtn.classList.add('main-nav__menu-item_link-active');
});

catalog.addEventListener('mouseout', function() {
    this.classList.add('hide');
    catalogBtn.classList.remove('main-nav__menu-item_link-active');
});

userBlockBtn[0].addEventListener('click', function(event) {
    event.preventDefault();
    enterWindow.classList.remove('hide');
    this.classList.add('user-operations__btn-active');
    userIcon.classList.add('user-block__icon_color-focus');

    overlay.classList.remove('hide');
});

userBlockBtn[1].addEventListener('click', function(event) {
    event.preventDefault();
    enterWindow.classList.remove('hide');
    this.classList.add('user-operations__btn-active');
    userIcon.classList.add('user-block__icon_color-focus');

    overlay.classList.remove('hide');
});

enterDisabled.addEventListener('click', function(event) {
    event.preventDefault();
    registrationWindow.classList.add('hide');
    enterWindow.classList.remove('hide');
    this.classList.add('user-operations__btn-active');
    registrationDisabled.classList.add('user-operations__btn-active');
});

registrationDisabled.addEventListener('click', function(event) {
    event.preventDefault();
    enterWindow.classList.add('hide');
    registrationWindow.classList.remove('hide');
    this.classList.add('user-operations__btn_active');
    enterDisabled.classList.remove('user-operations__btn-active');
});

card.addEventListener('click', function(event) {
    event.preventDefault();
    cardItems.classList.remove('hide');
    this.classList.add('card_active');
});

card.addEventListener('mouseover', function() {
    cardItems.classList.remove('hide');
    this.classList.add('card_active');
});

cardItems.addEventListener('mousemove', function() {
    card.classList.add('card_active');
    this.classList.remove('hide');
});

cardItems.addEventListener('mouseout', function() {
    card.classList.remove('card_active');
    this.classList.add('hide');
});

overlay.addEventListener('click', function() {
    registrationWindow.classList.add('hide');
    enterWindow.classList.add('hide');
    userIcon.classList.remove('user-block__icon_color-focus');
    this.classList.add('hide');
});

searchField.addEventListener('focus', function() {
    searchIcon.classList.add('search__icon_color-focus');
});

passwordField[1].addEventListener('focus', function() {
    this.value = '';
});

passwordField[0].addEventListener('focus', function() {
    this.value = '';
});

searchField.addEventListener('blur', function() {
    searchIcon.classList.remove('search__icon_color-focus');
});
