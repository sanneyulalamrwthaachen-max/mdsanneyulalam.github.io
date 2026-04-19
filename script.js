/* ============================================================
   NAVBAR: scroll shadow + active link highlight
   ============================================================ */
const navbar  = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id], header[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  // Scrolled class
  navbar.classList.toggle('scrolled', window.scrollY > 20);

  // Active nav link
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

/* ============================================================
   MOBILE NAV TOGGLE
   ============================================================ */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close on link click (mobile)
navAnchors.forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ============================================================
   SCROLL REVEAL (IntersectionObserver)
   ============================================================ */
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings inside the same parent
      const siblings = [...entry.target.parentElement.querySelectorAll('.fade-in')];
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 0.08}s`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => observer.observe(el));

/* ============================================================
   SMOOTH ACTIVE STATE: style active nav link
   ============================================================ */
const style = document.createElement('style');
style.textContent = `.nav-links a.active { color: var(--accent) !important; }
  .nav-links a.active::after { width: 100% !important; }`;
document.head.appendChild(style);
