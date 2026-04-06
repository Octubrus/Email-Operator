// Burger menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const burgers = document.querySelectorAll('.navbar-burger');
  const menus = document.querySelectorAll('.navbar-menu');
  const backdrops = document.querySelectorAll('.navbar-backdrop');

  function closeMenu() {
    menus.forEach(m => m.classList.add('hidden'));
  }

  function toggleMenu() {
    const isHidden = menus[0]?.classList.contains('hidden');
    menus.forEach(m => m.classList.toggle('hidden', !isHidden));
  }

  burgers.forEach(b => b.addEventListener('click', toggleMenu));
  backdrops.forEach(b => b.addEventListener('click', closeMenu));

  // Close mobile menu when a nav link is clicked
  document.querySelectorAll('.navbar-menu a[href]').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Navbar scroll shadow
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('nav-scrolled', window.scrollY > 10);
    }, { passive: true });
  }
});
