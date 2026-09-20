(() => {
  'use strict';

  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  // Sticky navbar shadow on scroll
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  const setMenu = (open) => {
    menu.classList.toggle('open', open);
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  };
  toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });

  // Active nav link on scroll
  const links = [...menu.querySelectorAll('.nav-link')];
  const sections = links.map((a) => document.querySelector(a.hash)).filter(Boolean);
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => a.classList.toggle('active', a.hash === `#${en.target.id}`));
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach((s) => spy.observe(s));

  // Subtle fade/slide-in on scroll
  const reveal = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add('visible');
        reveal.unobserve(en.target);
      }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el));

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // One Gmail compose template shared by every .js-email-hire link.
  // ponytail: single template here, not a copy-pasted URL in every HTML file.
  const hireSubject = 'Job Opportunity for Reihan Achmad Susilo - [Company Name]';
  const hireBody = [
    'Hi Reihan,',
    'I came across your portfolio and I was impressed with your experience in web development and business process digitalization.',
    'At [Company Name], we are currently hiring for a [Role / Position] and I believe your background could be a great fit for our team.',
    'Would you be open to a short call to discuss this opportunity further? Please let me know a time that works best for you.',
    'Looking forward to connecting with you.',
    'Best regards,\n[Your Name]\n[Your Position] - [Company Name]\n[Phone / LinkedIn]',
  ].join('\n\n');
  const hireUrl =
    'https://mail.google.com/mail/?view=cm&fs=1&to=reihanahmadsusilo@gmail.com' +
    '&su=' + encodeURIComponent(hireSubject) +
    '&body=' + encodeURIComponent(hireBody);
  document.querySelectorAll('a.js-email-hire').forEach((a) => {
    a.href = hireUrl;
    a.target = '_blank';
    a.rel = 'noopener';
  });

  // Lightbox for gallery images (project detail pages only)
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  if (lightbox && lightboxImg) {
    const close = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
    };
    document.querySelectorAll('.gallery-item img').forEach((img) => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
      });
    });
    lightbox.addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }
})();
