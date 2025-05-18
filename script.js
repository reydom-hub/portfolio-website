// Typing effect
const typedText = document.getElementById("typed-text");
const phrases = ["REYDOMINIC VEGA", "IT STUDENT", "BEST SETTER!"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typedText.textContent = currentPhrase.substring(0, charIndex--);
    } else {
        typedText.textContent = currentPhrase.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const delay = isDeleting ? 50 : 100;
    setTimeout(typeEffect, delay);
}

document.addEventListener("DOMContentLoaded", typeEffect);
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('main')?.classList.add('loaded');
  document.querySelector('header')?.classList.add('loaded');
  document.querySelector('#about-me')?.classList.add('loaded');
  document.querySelector('#skills')?.classList.add('loaded');
  document.querySelector('#project')?.classList.add('loaded');
  document.querySelector('#contact')?.classList.add('loaded');
  document.querySelector('footer')?.classList.add('loaded');
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('open');
});
