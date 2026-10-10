// carousel.js — Far Shore reusable carousel (scroll-snap, arrows, dots, seamless loop)
//
// USAGE — include css/carousel.css and this script, then write:
//
//   <div class="carousel" data-carousel aria-label="Name of the carousel">
//     <div class="carousel__track">
//       <div class="carousel__slide"> …any content… </div>
//       <div class="carousel__slide"> …any content… </div>
//     </div>
//   </div>
//
// To add a slide, add another .carousel__slide. Everything else (arrows, dots,
// "1 von 4" labels, looping) is generated here. Several carousels per page work.
//
// Optional attributes on the [data-carousel] element, for other languages:
//   data-label-prev="Previous slide"  data-label-next="Next slide"
//   data-label-slide="Slide"          data-label-of="of"
//
// Loop trick: a copy of the last slide is placed before the first, and a copy
// of the first after the last. Moving past either end animates into the copy;
// once scrolling settles we jump (without animation) to the real slide it
// mirrors, so the loop looks continuous.

const ARROW_PREV = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>';
const ARROW_NEXT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>';

function initCarousel(root) {
  const track = root.querySelector('.carousel__track');
  if (!track) return;
  const realSlides = [...track.children].filter(el => el.classList.contains('carousel__slide'));
  const count = realSlides.length;
  if (count === 0) return;

  const labels = {
    prev:  root.dataset.labelPrev  || 'Vorherige Folie',
    next:  root.dataset.labelNext  || 'Nächste Folie',
    slide: root.dataset.labelSlide || 'Folie',
    of:    root.dataset.labelOf    || 'von',
  };

  root.setAttribute('aria-roledescription', 'carousel');
  track.tabIndex = 0;
  realSlides.forEach((slide, i) => {
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('aria-label', `${i + 1} ${labels.of} ${count}`);
  });

  if (count === 1) {
    root.classList.add('carousel--single');
    return;
  }

  // ── Controls ──
  const controls = document.createElement('div');
  controls.className = 'carousel__controls';
  controls.innerHTML = `
    <button class="carousel__arrow carousel__arrow--prev" type="button" aria-label="${labels.prev}">${ARROW_PREV}</button>
    <div class="carousel__dots"></div>
    <button class="carousel__arrow carousel__arrow--next" type="button" aria-label="${labels.next}">${ARROW_NEXT}</button>`;
  root.appendChild(controls);

  const prevBtn = controls.querySelector('.carousel__arrow--prev');
  const nextBtn = controls.querySelector('.carousel__arrow--next');
  const dotsWrap = controls.querySelector('.carousel__dots');

  // ── Loop copies ──
  function makeClone(slide) {
    const clone = slide.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.inert = true;
    clone.removeAttribute('role');
    clone.removeAttribute('aria-roledescription');
    clone.removeAttribute('aria-label');
    clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
    // Copies are only seen mid-transition, so show their text immediately
    clone.querySelectorAll('.reveal, .reveal--right, .reveal--left')
      .forEach(el => el.classList.add('is-visible'));
    return clone;
  }

  track.prepend(makeClone(realSlides[count - 1]));
  track.append(makeClone(realSlides[0]));

  // Track positions: 0 = copy of last, 1..count = real slides, count + 1 = copy of first
  const allSlides = [...track.children];

  const dots = realSlides.map((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'carousel__dot';
    dot.setAttribute('aria-label', `${labels.slide} ${i + 1}`);
    dot.addEventListener('click', () => scrollToPos(i + 1));
    dotsWrap.appendChild(dot);
    return dot;
  });

  function currentPos() {
    return Math.round(track.scrollLeft / track.clientWidth);
  }

  function scrollToPos(pos, smooth = true) {
    const left = allSlides[pos].offsetLeft;
    if (smooth) {
      track.scrollTo({ left, behavior: 'smooth' });
    } else {
      track.style.scrollBehavior = 'auto';
      track.scrollLeft = left;
      track.style.scrollBehavior = '';
    }
  }

  // Real slide index (0..count-1) shown at a track position, copies included
  function realIndex(pos) {
    return (pos - 1 + count) % count;
  }

  let activePos = 1;

  function updateDots() {
    activePos = currentPos();
    const active = realIndex(activePos);
    dots.forEach((dot, i) => {
      dot.setAttribute('aria-current', i === active ? 'true' : 'false');
    });
  }

  // Once scrolling stops on a copy, swap to the real slide it mirrors
  function fixLoopEdge() {
    const pos = currentPos();
    if (pos === 0) scrollToPos(count, false);
    else if (pos === count + 1) scrollToPos(1, false);
    updateDots();
  }

  // Scroll-settle detection that also works where 'scrollend' isn't supported
  let settleTimer;
  let ticking = false;
  track.addEventListener('scroll', () => {
    clearTimeout(settleTimer);
    settleTimer = setTimeout(fixLoopEdge, 120);

    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateDots();
      ticking = false;
    });
  }, { passive: true });

  prevBtn.addEventListener('click', () => scrollToPos(Math.max(currentPos() - 1, 0)));
  nextBtn.addEventListener('click', () => scrollToPos(Math.min(currentPos() + 1, count + 1)));

  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); prevBtn.click(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); nextBtn.click(); }
  });

  // Keep the current slide in place when the window is resized
  window.addEventListener('resize', () => scrollToPos(activePos, false), { passive: true });

  // Start on the first real slide, not the copy in front of it
  scrollToPos(1, false);
  updateDots();
}

document.querySelectorAll('[data-carousel]').forEach(initCarousel);
