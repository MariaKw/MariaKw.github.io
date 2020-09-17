'use strict';

let popup = document.querySelector('#popup-call-me');
let btnClose = popup.querySelector('#close-popup');
let btnOpen = document.querySelector('#call-me-btn');

let hidePopup = function () {
    popup.classList.add('hidden');
};
let openPopup = function () {
    popup.classList.remove('hidden');

    btnClose.addEventListener('click', function(e){
        hidePopup();
    });
};
btnOpen.addEventListener('click', function(e){
    openPopup();
});

