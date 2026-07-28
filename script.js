/* Roam Content Co. — interactivity */

(() => {
  const nav = document.getElementById('nav');
  const toggle = nav.querySelector('.nav__toggle');
  const menu = nav.querySelector('.nav__menu');

  /* Sticky nav reveal */
  const onScroll = () => {
    if (window.scrollY > 60) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Theme toggle */
  const root = document.documentElement;
  const themeBtn = nav.querySelector('.nav__theme');
  const syncPressed = () => themeBtn && themeBtn.setAttribute('aria-pressed', root.getAttribute('data-theme') === 'dark');
  syncPressed();
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('roam-theme', next); } catch (e) {}
      syncPressed();
    });
  }

  /* Mobile menu */
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      nav.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('is-open');
      nav.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }));
  }

  /* Scroll reveal */
  const targets = document.querySelectorAll(
    '.intro__grid, .marquee, .featured .section-head, .couple, .quote-band .container, ' +
    '.feed .section-head, .feed__grid .reel-card, ' +
    '.experience .section-head, .service, .timeline .section-head, .timeline__step, ' +
    '.reel .section-head, .lookbook .section-head, .masonry__item, ' +
    '.about__media, .about__copy, .testimonials .section-head, .testimonial, ' +
    '.journal .section-head, .post, .faq .section-head, .faq__item, ' +
    '.cta .eyebrow, .cta .h-display, .cta__sub, .cta__ctas, ' +
    '.inquire__aside, .form-embed'
  );
  targets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  targets.forEach(el => io.observe(el));

  /* Year stamp */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* Subtle hero parallax */
  const heroImg = document.querySelector('.hero__img');
  if (heroImg && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let raf = 0;
    const tick = () => {
      const y = Math.min(window.scrollY, window.innerHeight);
      heroImg.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(${1 + y * 0.0001})`;
      raf = 0;
    };
    window.addEventListener('scroll', () => {
      if (!raf) raf = requestAnimationFrame(tick);
    }, { passive: true });
  }
})();
