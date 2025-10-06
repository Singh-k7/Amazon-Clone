document.addEventListener('DOMContentLoaded', function() {
  const topPage = document.querySelector('.top-page');
  if (topPage) {
    topPage.style.cursor = 'pointer';
    topPage.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Dropdown functionality
  document.querySelectorAll('.dropdown-toggle').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const menu = this.parentElement.querySelector('.dropdown-menu');
      // Close other open dropdowns
      document.querySelectorAll('.dropdown-menu').forEach(function(m) {
        if (m !== menu) m.style.display = 'none';
      });
      // Toggle current
      menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
        menu.style.display = 'none';
      });
    }
  });
});
