const data = [
    { id: 1, link: "./", title: 'Home' },
    { id: 2, link: "./About", title: 'About' },
    { id: 3, link: "./Course", title: 'Courses' },
    { id: 4, link: "./Contact", title: 'Contact' },
]

// change navbar style on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
  });
  
  // Ambil elemen tombol menu
  const openMenuButton = document.getElementById("open-menu-btn");
  const navMenu = document.querySelector(".nav_menu");
  
  // Ketika tombol buka menu diklik
  // openMenuButton.addEventListener("click", () => {
  //   navMenu.classList.toggle("active");
  // });
  
  // Menutup menu jika pengguna mengklik di luar menu
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!target.closest("nav") && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }
  });

export default data;