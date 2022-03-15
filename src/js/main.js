// Mobile burger menu
const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (menuIcon) {
  menuIcon.addEventListener('click', function (e) {
    if (menuIcon.getAttribute('aria-expanded') === 'false') {
      document.body.classList.add('lock');
      menuIcon.classList.add('menu__icon--open');
      menuBody.classList.add('menu__body--open');
      menuIcon.setAttribute('aria-expanded', true)
    } else {
      document.body.classList.remove('lock');
      menuIcon.classList.remove('menu__icon--open');
      menuBody.classList.remove('menu__body--open');
      menuIcon.setAttribute('aria-expanded', false)
    }
  })
}
