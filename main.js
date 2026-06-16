
document.addEventListener('DOMContentLoaded', function () {

  const SHEET_SCRIPT_URL = 'https://hook.eu1.make.com/gicf9bsdpa8sgkliqawlrzdh2el3hu2p';

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const form = this;
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Se trimite...';
      }

      const formData = new FormData(form);

      fetch(https://hook.eu1.make.com/gicf9bsdpa8sgkliqawlrzdh2el3hu2p, {
        method: 'POST',
        body: formData
      })
        .then(function (response) { return response.json(); })
        .then(function () {
          alert('Mulțumim! Cererea a fost trimisă.');
          form.reset();
        })
        .catch(function () {
          alert('A apărut o eroare la trimitere. Te rugăm să ne contactezi telefonic.');
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }
        });
    });
  }

  const revealTargets = document.querySelectorAll(
    '.svc-card, .price-card, .testi-card, .home-card, .card'
  );

  if ('IntersectionObserver' in window && revealTargets.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity .5s ease, transform .5s ease';
      observer.observe(el);
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href.endsWith(currentPage) && currentPage !== '') {
      link.classList.add('active');
    }
  });

});
