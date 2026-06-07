/* ============================================================
   NAVBAR JS — Mobile toggle + Sticky shrink
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  const hamburger = document.querySelector('.navbar__hamburger');
  const links     = document.querySelector('.navbar__links');
  const navbar    = document.querySelector('.navbar');

  // ── Mobile hamburger toggle ──
  if (hamburger && links) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      links.classList.toggle('open');
    });

    // Close menu when a link is clicked
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  // ── Set active link based on current page ──
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('.navbar__links a').forEach(function (link) {
    const linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    }
  });

});
