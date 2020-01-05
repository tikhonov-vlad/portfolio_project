let menuBtn = document.querySelector('.menu__btn'),
    menuBtnText = document.querySelector('.menu__btn_text'),
    menuBlock = document.querySelector('.menuBlock');

menuBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (menuBtn.classList.contains('menu__btn_active')) {
    menuBtn.classList.remove('menu__btn_active');
    menuBtnText.textContent = 'MENU';
    menuBlock.classList.remove('menuBlock_active');

  } else {
    menuBtn.classList.add('menu__btn_active');
    menuBtnText.textContent = '';
    menuBlock.classList.add('menuBlock_active');
    
  }
});