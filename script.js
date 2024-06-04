document.addEventListener('DOMContentLoaded', function () {
  const hamMenu = document.querySelector('.header__main-ham-menu');
  const hamMenuClose = document.querySelector('.header__main-ham-menu-close');
  const smMenu = document.querySelector('.header__sm-menu');

  hamMenu.addEventListener('click', function () {
    smMenu.classList.add('header__sm-menu--open');
    hamMenu.classList.add('d-none');
    hamMenuClose.classList.remove('d-none');
  });

  hamMenuClose.addEventListener('click', function () {
    smMenu.classList.remove('header__sm-menu--open');
    hamMenu.classList.remove('d-none');
    hamMenuClose.classList.add('d-none');
  });
});
