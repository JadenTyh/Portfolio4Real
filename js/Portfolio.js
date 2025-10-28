// Portfolio interactions: menu toggles, smooth scrolling, back-to-top

document.addEventListener('DOMContentLoaded', () => {
  // --- Menu toggles (defensive: only if elements exist) ---
  const navBar = document.querySelector('.navbar');
  const bxMenu = document.querySelector('.bx-menu');
  const bxX = document.querySelector('.bx-x');

  if (bxMenu && navBar) {
    bxMenu.addEventListener('click', (e) => {
      if (e.target.classList.contains('bx-menu')) {
        navBar.classList.add('show-navbar');
        bxMenu.classList.add('hide-bx');
        if (bxX) bxX.classList.add('show-bx');
      }
    });
  }

  if (bxX && navBar && bxMenu) {
    bxX.addEventListener('click', (e) => {
      if (e.target.classList.contains('bx-x')) {
        navBar.classList.remove('show-navbar');
        bxMenu.classList.remove('hide-bx');
        bxX.classList.remove('show-bx');
      }
    });
  }

  // --- Smooth scroll for in-page anchors ---
  const links = Array.from(document.querySelectorAll("a[href^='#']"))
    .filter((a) => {
      const href = a.getAttribute('href');
      return href && href !== '#' && href !== '#0';
    });

  function getFixedNavOffset() {
    const nav = document.querySelector('.navbar');
    if (!nav) return 0;
    const style = window.getComputedStyle(nav);
    if (style.position === 'fixed') return nav.offsetHeight || 0;
    return 0;
  }

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      // same-page guard
      if (
        location.pathname.replace(/\/$/, '') !== link.pathname.replace(/\/$/, '') ||
        location.hostname !== link.hostname
      ) {
        return;
      }

      const hash = link.getAttribute('href');
      const id = decodeURIComponent(hash.slice(1));
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();

      const y = target.getBoundingClientRect().top + window.pageYOffset;
      const offset = getFixedNavOffset();

      window.scrollTo({
        top: y - offset,
        behavior: 'smooth',
      });

      // Update the URL hash without jumping
      history.pushState(null, '', `#${id}`);

      // Close checkbox-based mobile nav if open
      const check = document.getElementById('check');
      if (check && check.checked) check.checked = false;

      // Close class-based mobile nav if open
      if (navBar && navBar.classList.contains('show-navbar')) {
        navBar.classList.remove('show-navbar');
        if (bxMenu) bxMenu.classList.remove('hide-bx');
        if (bxX) bxX.classList.remove('show-bx');
      }

      // Accessibility: focus without jumping
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });

  // Adjust initial hash position if navbar is fixed
  if (location.hash) {
    const id = decodeURIComponent(location.hash.slice(1));
    const target = document.getElementById(id);
    const offset = getFixedNavOffset();
    if (target && offset) {
      setTimeout(() => {
        const y = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: y - offset });
      }, 0);
    }
  }

  // --- Back-to-top button ---
  const backBtn =
    document.querySelector('#backToTop, [data-back-to-top], .back-to-top');

  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const rafThrottle = (fn) => {
    let ticking = false;
    return (...args) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        fn(...args);
        ticking = false;
      });
    };
  };

  if (backBtn) {
    const toggleBtn = () => {
      const show = window.scrollY > 600;
      backBtn.classList.toggle('visible', show);
      backBtn.setAttribute('aria-hidden', show ? 'false' : 'true');
    };

    toggleBtn();
    window.addEventListener('scroll', rafThrottle(toggleBtn));

    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    });
  }
});