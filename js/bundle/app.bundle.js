"use strict";

var toggle = document.querySelector('.header__toggle');
var body = document.body;
toggle.addEventListener('click', switchMode);

function switchMode() {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
  } else {
    body.classList.add('dark');
  }
}