  /* Tab switching */
  function switchTab(e, id) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    e.currentTarget.classList.add('active');
    document.getElementById('tab-' + id).classList.add('active');
  }

  /* Media upload handler */
  function handleMedia(zoneId, input) {
    const file = input.files[0];
    if (!file) return;

    const zone = document.getElementById(zoneId);
    const placeholder = zone.querySelector('.media-placeholder');
    const caption = zone.querySelector('.media-caption');
    const url = URL.createObjectURL(file);

    // Remove existing media
    const existing = zone.querySelector('img, video');
    if (existing) existing.remove();

    if (file.type.startsWith('video/')) {
      const video = document.createElement('video');
      video.src = url;
      video.controls = true;
      video.style.cssText = 'width:100%;display:block;max-height:340px;background:#000;';
      zone.insertBefore(video, caption);
    } else {
      const img = document.createElement('img');
      img.src = url;
      img.alt = 'Uploaded media';
      img.style.cssText = 'width:100%;display:block;max-height:340px;object-fit:cover;';
      zone.insertBefore(img, caption);
    }

    // Hide placeholder, show small re-upload link
    placeholder.style.display = 'none';
    const reupload = document.createElement('div');
    reupload.style.cssText = 'padding:0.4rem 0.75rem;text-align:right;';
    reupload.innerHTML = `<span onclick="document.getElementById('${input.id}').click()"
      style="font-family:monospace;font-size:0.65rem;color:var(--muted);cursor:pointer;text-decoration:underline;">
      Replace ↑</span>`;
    zone.insertBefore(reupload, caption);
  }