document.addEventListener('DOMContentLoaded', function () {
  const hamMenu = document.querySelector('.header__main-ham-menu');
  const hamMenuClose = document.querySelector('.header__main-ham-menu-close');
  const smMenu = document.querySelector('.header__sm-menu');
  const menuLinks = document.querySelectorAll('.header__sm-menu-link a');

  function closeMenu() {
    smMenu.classList.remove('header__sm-menu--open');
    hamMenu.classList.remove('d-none');
    hamMenuClose.classList.add('d-none');
  }

  hamMenu.addEventListener('click', function () {
    smMenu.classList.add('header__sm-menu--open');
    hamMenu.classList.add('d-none');
    hamMenuClose.classList.remove('d-none');
  });

  hamMenuClose.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
