/* ============================================================
   SCROLL REVEAL ANIMATIONS
   Adds .visible class to .reveal elements when they enter view
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show all immediately for older browsers
    revealElements.forEach(function (el) { el.classList.add('visible'); });
  }

});
