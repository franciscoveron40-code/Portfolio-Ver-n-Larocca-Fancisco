const body = document.body;
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

function setMenu(open) {
  body.classList.toggle('menu-open', open);

  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute(
    'aria-label',
    open ? 'Cerrar menú' : 'Abrir menú'
  );

  menu.setAttribute('aria-hidden', String(!open));
}

// Abrir / cerrar menú
toggle.addEventListener('click', () => {
  setMenu(!body.classList.contains('menu-open'));
});

// Cerrar menú al tocar un enlace
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setMenu(false);
  });
});

// Cerrar menú con ESC
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenu(false);
  }
});

// Animaciones al hacer scroll
const items = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

items.forEach((item, index) => {
  item.style.transitionDelay =
    `${Math.min(index * 55, 220)}ms`;

  observer.observe(item);
});

// Año automático en footer
document.getElementById('year').textContent =
  new Date().getFullYear();