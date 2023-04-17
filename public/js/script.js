const hamburgerButton = document.querySelector('.hamburger-button');
const navbarHamburger = document.querySelector('.navbar-hamburger');
const navHam = document.querySelectorAll('.navham');
const lineHamburger = document.querySelectorAll('.line-hamburger');
const crossButton = document.querySelector('.cross');
const closeNavham = document.querySelector('.close-navham');

hamburgerButton.addEventListener('click', () => {
  navbarHamburger.classList.toggle('flex');
  navbarHamburger.classList.toggle('hidden');

  navHam[0].classList.add('animate__animated', 'animate__fadeInLeft');
  navHam[2].classList.add('animate__animated', 'animate__fadeInLeft');
  navHam[1].classList.add('animate__animated', 'animate__fadeInRight');
  navHam[3].classList.add('animate__animated', 'animate__fadeInRight');
  closeNavham.classList.add('animate__animated', 'animate__fadeInUpBig');
});

closeNavham.addEventListener('click', () => {
  navHam[0].classList.remove('animate__animated', 'animate__fadeInLeft');
  navHam[2].classList.remove('animate__animated', 'animate__fadeInLeft');
  navHam[1].classList.remove('animate__animated', 'animate__fadeInRight');
  navHam[3].classList.remove('animate__animated', 'animate__fadeInRight');
  closeNavham.classList.remove('animate__animated', 'animate__fadeInUpBig');
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

document.querySelectorAll('.navmain').forEach(function (element) {
  element.addEventListener('click', function (e) {
    const tujuan = this.getAttribute('href');
    const elemenTujuan = document.querySelector(tujuan);

    window.scrollTo({
      top: elemenTujuan.offsetTop - 100,
      behavior: 'smooth',
    });

    e.preventDefault();
  });
});
