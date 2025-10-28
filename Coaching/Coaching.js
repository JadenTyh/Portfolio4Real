// Coaching form submission (Formspree) + Featured photo rotator

document.addEventListener('DOMContentLoaded', () => {
  // ---- Formspree submission ----
  const form = document.getElementById('coaching-form');
  const statusEl = document.getElementById('form-status');
  const submitBtn = document.getElementById('submitBtn');

  // This is already configured in your repo
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqagpqga";

  if (form) {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function setStatus(msg, type = 'info') {
      if (!statusEl) return;
      statusEl.textContent = msg;
      statusEl.classList.remove('text-success', 'text-danger', 'text-info');
      statusEl.classList.add(
        type === 'success' ? 'text-success' :
        type === 'error' ? 'text-danger' : 'text-info'
      );
    }

    function validate() {
      const name = document.getElementById('formGroupName')?.value.trim();
      const email = document.getElementById('formGroupEmail')?.value.trim();

      if (!name) {
        setStatus('Please enter your name.', 'error');
        document.getElementById('formGroupName')?.focus();
        return false;
      }
      if (!email || !emailRe.test(email)) {
        setStatus('Please enter a valid email.', 'error');
        document.getElementById('formGroupEmail')?.focus();
        return false;
      }
      return true;
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!FORMSPREE_ENDPOINT) {
        setStatus('Form endpoint is not configured.', 'error');
        return;
      }
      if (!validate()) return;

      const fd = new FormData(form);

      try {
        setStatus('Sending...', 'info');
        if (submitBtn) submitBtn.disabled = true;

        const resp = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: fd
        });

        if (resp.ok) {
          setStatus('Thanks! Your registration has been sent. I will get back to you shortly.', 'success');
          form.reset();
        } else {
          const data = await resp.json().catch(() => ({}));
          const msg = data?.errors?.map(e => e.message).join(', ') || 'Submission failed. Please try again later.';
          setStatus(msg, 'error');
        }
      } catch (err) {
        setStatus('Network error. Please try again later.', 'error');
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  // ---- Featured photo rotator (every 5 seconds with fade) ----
  const img = document.getElementById('feature-photo');
  if (img) {
    // Exact filenames from Coaching/ directory (mind the case)
    const photos = ['J_TENNIS_1.jpg', 'J_TENNIS_2.jpg', 'J_TENNIS_3.jpg'];
    let index = 0;

    // Preload to reduce flicker
    photos.forEach(src => {
      const i = new Image();
      i.src = src;
    });

    const nextPhoto = () => {
      // Fade out, then swap, then fade back in on load
      img.classList.add('feature-photo--fade');

      const onFadeOut = () => {
        img.removeEventListener('transitionend', onFadeOut);
        index = (index + 1) % photos.length;
        const nextSrc = photos[index];

        const onLoad = () => {
          img.removeEventListener('load', onLoad);
          requestAnimationFrame(() => img.classList.remove('feature-photo--fade'));
        };

        img.addEventListener('load', onLoad, { once: true });
        img.src = nextSrc;
      };

      img.addEventListener('transitionend', onFadeOut, { once: true });
    };

    let timer = setInterval(nextPhoto, 5000);

    // Pause when tab not visible to save resources
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        clearInterval(timer);
        timer = null;
      } else if (!timer) {
        timer = setInterval(nextPhoto, 5000);
      }
    });
  }
});