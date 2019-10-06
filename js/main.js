const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#nav-menu');
const logo = document.querySelector('#nav-logo');
const closeBtn = document.querySelector('#close-btn');

btn.addEventListener('click', e => {
  menu.classList.toggle('is-active');
  logo.classList.toggle('is-active');
});

closeBtn.addEventListener('click', e => {
  menu.classList.remove('is-active');
  logo.classList.remove('is-active');
});
