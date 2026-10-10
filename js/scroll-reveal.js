// scroll-reveal.js — Far Shore IntersectionObserver fade-in

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .reveal--right, .reveal--left').forEach(el => {
  observer.observe(el);
});
