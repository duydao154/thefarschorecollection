// parallax.js — Far Shore ritual section lid-open parallax

const ritualSection = document.querySelector('.ritual');
const lidLayer = document.querySelector('.ritual__image-lid');

if (ritualSection && lidLayer) {
  function updateParallax() {
    const rect = ritualSection.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Progress 0 → 1 as section scrolls from entering viewport to leaving it
    const total = windowH + rect.height;
    const scrolled = windowH - rect.top;
    const progress = Math.min(Math.max(scrolled / total, 0), 1);

    // Map progress 0.1→0.6 to opacity 0→1 (start and end the effect in mid-scroll)
    const opacityStart = 0.1;
    const opacityEnd = 0.6;
    const opacity = Math.min(Math.max((progress - opacityStart) / (opacityEnd - opacityStart), 0), 1);

    // Lid slides from -20px to 0
    const translateY = -20 + opacity * 20;

    lidLayer.style.opacity = opacity;
    lidLayer.style.transform = `translateY(${translateY}px)`;
  }

  window.addEventListener('scroll', updateParallax, { passive: true });
  window.addEventListener('resize', updateParallax, { passive: true });
  updateParallax();
}
