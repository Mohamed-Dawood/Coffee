// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.header .nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Social Icons
function openSocial(platform) {
  if (platform === 'facebook') window.open('https://facebook.com', '_blank');
  if (platform === 'instagram') window.open('https://instagram.com', '_blank');
  if (platform === 'linkedin') window.open('https://linkedin.com', '_blank');
}
