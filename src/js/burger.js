const nav = document.querySelector('.nav__wrapper');
const burger = document.querySelector('.burger');

function toggleBurgerMenu () {
  if(nav.style.top === '90px') {
    nav.style.top = '-900px'
  } else {
    nav.style.top = "90px";
  }
}


burger.addEventListener('click', toggleBurgerMenu)
