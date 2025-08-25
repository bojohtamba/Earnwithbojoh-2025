// Mobile menu toggle & simple click tracking
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn && menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

document.querySelectorAll('.track-click').forEach(a => {
  a.addEventListener('click', () => {
    // Simple log; replace with GA or your own endpoint
    console.log('Affiliate click:', a.href);
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
