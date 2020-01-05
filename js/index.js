'use strict';

// let menuIconBlock = document.querySelector('.menu__icon'),
//       headerWrap = document.querySelector('.header__wrap'),
//       menu = document.querySelector('.menu__wrap'),
//       menuLan = document.querySelector('.menu__lan');
      
// window.addEventListener('resize', () => {
//   if (document.body.clientWidth < 1100 && !headerWrap.contains(menuIconBlock)) {
//     headerWrap.appendChild(menuIconBlock);
//     menuIconBlock.style.display = 'block';
//     menuIconBlock.style.margin= '2rem 0 0 0';
//   } else if (document.body.clientWidth > 1100 && headerWrap.contains(menuIconBlock)) {
//     headerWrap.removeChild(menuIconBlock);
//     menuIconBlock.style.display = 'inline-flex';
//     menuIconBlock.style.margin = '0';
//     menu.removeChild(menuLan);
//     menu.appendChild(menuIconBlock);
//     menu.appendChild(menuLan);
//   }
// });

let menuBtn = document.querySelector('.menu__btn'),
    menuBtnText = document.querySelector('.menu__btn_text'),
    header = document.querySelector('.header'),
    button = document.querySelector('.header__btn'),
    form = document.querySelector('.header__form'),
    close = document.getElementById('close'),
    contact = document.querySelector('.contact');

// Click menu btn
menuBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (menuBtn.classList.contains('menu__btn_active')) {
    menuBtn.classList.remove('menu__btn_active');
    menuBtnText.textContent = 'MENU';
    header.classList.remove('header_active');
    button.style.display = 'inline-block';
  } else {
    menuBtn.classList.add('menu__btn_active');
    menuBtnText.textContent = '';
    header.classList.add('header_active');
    button.style.display = 'none';
    }
  if (form.classList.contains('header__form_active')) {
    form.classList.remove('header__form_active');
  } 
});

// Click li contact
contact.addEventListener('click', function() {
  menuBtn.classList.remove('menu__btn_active');
  menuBtnText.textContent = 'MENU';
  header.classList.remove('header_active');
  form.classList.add('header__form_active');
});

// Click button get in touch
button.addEventListener('click', function() {
  form.classList.add('header__form_active');
  button.style.display = 'none';
});

close.addEventListener('click', function() {
  form.classList.remove('header__form_active');
  button.style.display = 'inline-block';
});