// change navbar style on scroll

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// show/hide faq answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    // change icon
    const icon = faq.querySelector('.faq_icon i');

    if (icon.getAttribute('data-feather') === 'plus') {
      icon.setAttribute('data-feather', 'minus');
    } else {
      icon.setAttribute('data-feather', 'plus');
    }

    feather.replace();
  });
});
