let header = document.querySelector('header');
let nav = document.querySelector('nav');
let navToggler = document.querySelector('#nav-toggle');

const checkNav = () => {
  if (!navToggler.checked) {
    if (
      document.body.scrollTop > 25 ||
      document.documentElement.scrollTop > 25
    ) {
      addDarkNav();
    } else {
      removeDarkNav();
    }
  } else {
    addDarkNav();
  }
};

const addDarkNav = () => {
  header.classList.add('scroll-nav');
  nav.classList.add('scroll-nav');
};

const removeDarkNav = () => {
  header.classList.remove('scroll-nav');
  nav.classList.remove('scroll-nav');
};

window.onscroll = () => {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    addDarkNav();
  } else {
    removeDarkNav();
  }
};
