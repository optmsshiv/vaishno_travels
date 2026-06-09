/* ============================================================
   NAVBAR LOADER
   Fetches /components/navbar.html and injects it into every page.
   Also handles:
     - Mobile hamburger toggle
     - Sticky shrink on scroll
     - Active link detection
     - Scroll CTA bar (mobile only, shows after 2% scroll)

   HOW TO USE ON EVERY PAGE:
   1. Replace the entire <nav>...</nav> block with:
        <div id="navbar-placeholder"></div>
   2. Add this script tag (before closing </body>):
        <script src="/assets/js/navbar-loader.js"></script>
   3. Remove any old <script src="...navbar.js"></script> line.

   Edit the menu ONLY in /components/navbar.html
   ============================================================ */

(function () {

  var placeholder = document.getElementById('navbar-placeholder');
  if (!placeholder) return;

  var navbarPath = '/components/navbar.html';

  /* ── Fetch and inject navbar ── */
  fetch(navbarPath)
    .then(function (res) {
      if (!res.ok) throw new Error('Navbar fetch failed: ' + res.status);
      return res.text();
    })
    .then(function (html) {
      placeholder.outerHTML = html;
      initNavbar();
    })
    .catch(function (err) {
      console.error('[navbar-loader]', err);
      placeholder.outerHTML = buildFallbackNav();
      initNavbar();
    });

  /* ── Fallback navbar for file:// or failed fetch ── */
  function buildFallbackNav() {
    var base = window.location.pathname.includes('/pages/') ? '../' : '';
    return '<div class="topstrip"><div class="topstrip__inner">'
      + '<a href="tel:+916005139893" class="topstrip__item"><span class="topstrip__icon">📞</span><span class="topstrip__text">+91 60051 39893</span></a>'
      + '<div class="topstrip__divider"></div>'
      + '<a href="https://wa.me/916005159084" target="_blank" rel="noopener" class="topstrip__item topstrip__item--wa"><span class="topstrip__icon">💬</span><span class="topstrip__text">+91 60051 59084</span></a>'
      + '<div class="topstrip__divider topstrip__divider--hide-mobile"></div>'
      + '<span class="topstrip__item topstrip__item--info topstrip__divider--hide-mobile"><span class="topstrip__icon">⏰</span><span class="topstrip__text">Open Daily: 9 AM – 8 PM</span></span>'
      + '</div></div>'
      + '<nav class="navbar">'
      + '<a href="' + base + 'index.html" class="navbar__logo">'
      + '<div class="navbar__om">ॐ</div>'
      + '<div><div class="navbar__brand-name">Shree Vaishnо Travels</div>'
      + '<div class="navbar__brand-tagline">Sacred Yatra Specialists</div></div></a>'
      + '<div class="navbar__hamburger" aria-label="Toggle menu"><span></span><span></span><span></span></div>'
      + '<ul class="navbar__links">'
      + '<li><a href="' + base + 'index.html"              data-nav="home">Home</a></li>'
      + '<li><a href="' + base + 'pages/destinations.html" data-nav="destinations">Destinations</a></li>'
      + '<li><a href="' + base + 'pages/packages.html"     data-nav="packages">Packages</a></li>'
      + '<li><a href="' + base + 'pages/about.html"        data-nav="about">About Us</a></li>'
      + '<li><a href="' + base + 'pages/contact.html"      data-nav="contact">Contact</a></li>'
      + '<li><a href="' + base + 'pages/contact.html" class="navbar__cta">Book Yatra 🙏</a></li>'
      + '</ul></nav>';
  }

  /* ── Inject the scroll CTA bar right after navbar ── */
  function injectScrollCTA() {
    var base = window.location.pathname.includes('/pages/') ? '../' : '';
    var bar = document.createElement('div');
    bar.className = 'navbar__scroll-cta';
    bar.id = 'scroll-cta-bar';
    bar.innerHTML =
      '<a href="' + base + 'pages/contact.html">'
      + '<span class="navbar__scroll-cta__pulse"></span>'
      + '🙏 &nbsp; Book Your Yatra Now'
      + '</a>';
    /* Insert immediately after the navbar */
    var nav = document.querySelector('.navbar');
    if (nav && nav.parentNode) {
      nav.parentNode.insertBefore(bar, nav.nextSibling);
    }
  }

  /* ── Inject floating WhatsApp button ── */
  function injectWhatsAppFloat() {
    if (document.querySelector('.wa-float')) return;
    var btn = document.createElement('a');
    btn.href = 'https://wa.me/916005159084';
    btn.target = '_blank';
    btn.rel = 'noopener';
    btn.className = 'wa-float';
    btn.setAttribute('aria-label', 'Chat on WhatsApp');
    btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="#fff">
      <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.489-2.001A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.25a13.21 13.21 0 0 1-6.737-1.843l-.483-.287-4.998 1.178 1.232-4.866-.316-.5A13.21 13.21 0 0 1 2.75 16C2.75 8.682 8.683 2.75 16 2.75S29.25 8.682 29.25 16 23.317 29.25 16 29.25zm7.23-9.77c-.396-.198-2.344-1.157-2.707-1.288-.363-.132-.627-.198-.891.198-.264.396-1.023 1.288-1.254 1.553-.23.264-.462.297-.858.099-.396-.198-1.672-.616-3.185-1.965-1.177-1.05-1.973-2.346-2.203-2.742-.23-.396-.025-.61.173-.807.178-.177.396-.462.594-.693.198-.23.264-.396.396-.66.132-.264.066-.495-.033-.693-.099-.198-.891-2.145-1.221-2.937-.322-.77-.649-.666-.891-.678l-.759-.013c-.264 0-.693.099-1.056.495-.363.396-1.386 1.354-1.386 3.3 0 1.946 1.419 3.826 1.617 4.09.198.264 2.793 4.264 6.766 5.982.946.408 1.684.652 2.259.835.949.302 1.813.259 2.496.157.761-.114 2.344-.958 2.675-1.884.33-.925.33-1.718.231-1.884-.099-.165-.363-.264-.759-.462z"/>
    </svg>
  `;
    document.body.appendChild(btn);
  }
  /* ── Main init ── */
  function initNavbar() {

    var hamburger = document.querySelector('.navbar__hamburger');
    var links = document.querySelector('.navbar__links');
    var navbar = document.querySelector('.navbar');

    /* Mobile hamburger toggle */
    if (hamburger && links) {
      links.classList.remove('open');
      hamburger.classList.remove('open');

      hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        hamburger.classList.toggle('open');
        links.classList.toggle('open');
      });

      links.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          hamburger.classList.remove('open');
          links.classList.remove('open');
        });
      });

      document.addEventListener('click', function (e) {
        if (!navbar.contains(e.target)) {
          hamburger.classList.remove('open');
          links.classList.remove('open');
        }
      });
    }

    /* Active link */
    var currentFile = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar__links a[data-nav]').forEach(function (link) {
      if (link.getAttribute('href').split('/').pop() === currentFile) {
        link.classList.add('active');
      }
    });

    /* Inject scroll CTA bar */
    injectScrollCTA();

    /* Inject floating WhatsApp button */
    injectWhatsAppFloat();

    /* ── Scroll handler ── */
    var ctaBar = document.getElementById('scroll-cta-bar');
    var isMobile = window.innerWidth <= 900;
    var triggered = false;

    function onScroll() {
      isMobile = window.innerWidth <= 900;
      if (!isMobile) return; /* desktop — do nothing */

      /* 2% of total page height */
      var threshold = document.documentElement.scrollHeight * 0.02;
      var scrolled = window.scrollY || window.pageYOffset;

      if (scrolled >= threshold && !triggered) {
        triggered = true;
        if (ctaBar) ctaBar.classList.add('visible');
        document.body.classList.add('scroll-cta-visible');
      } else if (scrolled < threshold && triggered) {
        triggered = false;
        if (ctaBar) ctaBar.classList.remove('visible');
        document.body.classList.remove('scroll-cta-visible');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    /* Re-check on resize (switching desktop ↔ mobile) */
    window.addEventListener('resize', function () {
      isMobile = window.innerWidth <= 900;
      if (!isMobile && ctaBar) {
        ctaBar.classList.remove('visible');
        document.body.classList.remove('scroll-cta-visible');
      }
    });

  }

})();


(function () {
  var footerPlaceholder = document.getElementById('footer-placeholder');
  if (!footerPlaceholder) return;

  fetch('/components/footer.html')
    .then(function (res) {
      if (!res.ok) throw new Error('Footer fetch failed: ' + res.status);
      return res.text();
    })
    .then(function (html) {
      footerPlaceholder.outerHTML = html;
    })
    .catch(function (err) {
      console.error('[footer-loader]', err);
    });
})();