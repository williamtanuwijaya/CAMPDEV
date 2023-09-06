// change navbar style on scroll

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// Ambil elemen tombol menu
const openMenuButton = document.getElementById("open-menu-btn");
const navMenu = document.querySelector(".nav_menu");

// Ketika tombol buka menu diklik
openMenuButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Menutup menu jika pengguna mengklik di luar menu
document.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.closest("nav") && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
  }
});

// show/hide faq answer
// const faqs = document.querySelectorAll('.faq');

// faqs.forEach((faq) => {
//   faq.addEventListener('click', () => {
//     faq.classList.toggle('open');

//     // change icon
//     const icon = faq.querySelector('.faq_icon i');

//     if (icon.getAttribute('data-feather') === 'plus') {
//       icon.setAttribute('data-feather', 'minus');
//     } else {
//       icon.setAttribute('data-feather', 'plus');
//     }

//     feather.replace();
//   });
// });
