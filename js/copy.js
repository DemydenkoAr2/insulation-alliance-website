document.querySelectorAll('.copy-link').forEach(el => {
  el.addEventListener('click', () => {
    const text = el.dataset.copy;
    navigator.clipboard.writeText(text).then(() => {
      el.classList.add('copied');
      setTimeout(() => el.classList.remove('copied'), 1500);
    });
  });
});