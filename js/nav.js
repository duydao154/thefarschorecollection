// nav.js — Far Shore sticky nav transition + mobile menu

const nav = document.querySelector('.site-nav');
const heroSection = document.querySelector('.hero');
const hamburger = document.querySelector('.site-nav__hamburger');
const overlay = document.querySelector('.site-nav__overlay');
const overlayClose = document.querySelector('.site-nav__overlay-close');

function updateNav() {
  if (!heroSection || !nav) return;
  const threshold = heroSection.offsetHeight * 0.8;
  if (window.scrollY > threshold) {
    nav.classList.add('site-nav--scrolled');
  } else {
    nav.classList.remove('site-nav--scrolled');
  }
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// Mobile menu
if (hamburger && overlay) {
  hamburger.addEventListener('click', () => {
    overlay.classList.add('is-open');
    hamburger.style.display = 'none';
    document.body.style.overflow = 'hidden';
  });
}

if (overlayClose && overlay) {
  overlayClose.addEventListener('click', closeMenu);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

function closeMenu() {
  if (!overlay) return;
  overlay.classList.remove('is-open');
  if (hamburger) hamburger.style.display = '';
  document.body.style.overflow = '';
}

// Close menu when overlay link clicked
overlay?.querySelectorAll('.site-nav__overlay-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});
