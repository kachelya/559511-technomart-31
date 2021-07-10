const buttonLetter = document.querySelector('.button-letter');
const popupLetter = document.querySelector('.modal-letter');
const close = document.querySelector('.button-close');
const closeMap = document.querySelector('.button-close-map');
const login = document.querySelector('[name=login]');
const buttonMap = document.querySelector('.map-img');
const popupMap = document.querySelector('.modal-map');



buttonLetter.addEventListener('click' , function(evt){
    evt.preventDefault();
    popupLetter.classList.add('show-modal-latter');
    login.focus();
})

close.addEventListener('click' , function(evt){
    evt.preventDefault();
    popupLetter.classList.remove('show-modal-latter');
})

buttonMap.addEventListener('click' , function(evt){
    evt.preventDefault();
    popupMap.classList.add ('show-modal-map');
})

closeMap.addEventListener('click' , function(evt){
    evt.preventDefault();
    popupMap.classList.remove('show-modal-map');
})
















