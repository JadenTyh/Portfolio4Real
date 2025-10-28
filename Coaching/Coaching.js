// Send Coaching form submissions to your email via Formspree
// 1) Create a Formspree form and copy the endpoint URL.
// 2) Replace the FORMSPREE_ENDPOINT below with your endpoint.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('coaching-form');
  const statusEl = document.getElementById('form-status');
  const submitBtn = document.getElementById('submitBtn');

  // Replace with your Formspree endpoint, e.g. "https://formspree.io/f/abcdwxyz"
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqagpqga";

  if (!form) return;

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
    if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT.includes('your_form_id')) {
      setStatus('Form endpoint is not configured. Please add your Formspree endpoint in Coaching.js.', 'error');
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
});