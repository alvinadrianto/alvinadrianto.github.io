const hamburgerButton = document.querySelector('.hamburger-button');
const navbarHamburger = document.querySelector('.navbar-hamburger');
const navHam = document.querySelectorAll('.navham');
const lineHamburger = document.querySelectorAll('.line-hamburger');
const crossButton = document.querySelector('.cross');

hamburgerButton.addEventListener('click', () => {
  navbarHamburger.classList.toggle('flex');
  navbarHamburger.classList.toggle('hidden');
  lineHamburger[1].classList.toggle('invisible');
});

crossButton.addEventListener('click', () => {
  navbarHamburger.classList.toggle('flex');
  navbarHamburger.classList.toggle('hidden');
});

navHam.forEach((nh) => {
  nh.addEventListener('click', () => {
    navbarHamburger.classList.toggle('flex');
    navbarHamburger.classList.toggle('hidden');
  });
});
