document.addEventListener('DOMContentLoaded', () => {

  // Desktop dropdown hover
  document.querySelectorAll('.nav-item').forEach(item => {
    const dropdown = item.querySelector('.dropdown-wrapper');
    let timeout;

    item.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      dropdown.style.display = 'block';
    });

    item.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        dropdown.style.display = 'none';
      }, 150);
    });
  });

  // Mobile menu
  const openBtn = document.getElementById('openMobileMenu');
  const closeBtn = document.getElementById('closeMobileMenu');
  const mobileMenu = document.getElementById('mobileMenu');

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      mobileMenu.style.display = 'block';
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
    });
  }

  // Mobile dropdowns
  document.querySelectorAll('.mobile-dropdown-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    btn.nextElementSibling.classList.toggle('open');
  });
});


});