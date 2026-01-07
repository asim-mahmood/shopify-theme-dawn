document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product-card-image-wrap').forEach(card => {
    const mode = card.dataset.hover;
    const speed = parseInt(card.dataset.speed, 10) || 1000;
    const images = card.querySelectorAll('.product-card-image');

    if (images.length <= 1 || mode === 'none') return;

    let index = 0;
    let timer;

    if (mode === 'swap') {
      card.addEventListener('mouseenter', () => {
        images[index].classList.remove('is-active');
        index = images.length > 1 ? 1 : 0;
        images[index].classList.add('is-active');
      });

      card.addEventListener('mouseleave', () => {
        images[index].classList.remove('is-active');
        index = 0;
        images[0].classList.add('is-active');
      });
    }

    if (mode === 'scroll') {
      card.addEventListener('mouseenter', () => {
        timer = setInterval(() => {
          images[index].classList.remove('is-active');
          index = (index + 1) % images.length;
          images[index].classList.add('is-active');
        }, speed);
      });

      card.addEventListener('mouseleave', () => {
        clearInterval(timer);
        images.forEach((img, i) =>
          img.classList.toggle('is-active', i === 0)
        );
        index = 0;
      });
    }
  });
});
