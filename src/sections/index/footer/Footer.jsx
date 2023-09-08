import './footer.css'

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container footer_container">
        <div class="footer_1">
          <a href="index.html" class="footer_logo">
            <h4>CampDev</h4>
          </a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatem repellat iure maiores amet explicabo,</p>
        </div>

        <div class="footer_2">
          <h4>Permalinks</h4>
          <ul class="permalinks">
            <li><a href="index.html">Homes</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="courses.html">Courses</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>

        <div class="footer_3">
          <h4>Privacy</h4>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Refunds Policy</a></li>
        </div>

        <div class="footer_4">
          <h4>Contact Us</h4>
          <div class="">
            <p>+62 8352332532</p>
            <p>CampDev@gmail.com</p>
          </div>

          <ul class="footer_socials">
            <li>
              <a href="#"><i class="uil uil-facebook-f"></i></a>
            </li>
            <li>
              <a href="#"><i class="uil uil-facebook-f"></i></a>
            </li>
            <li>
              <a href="#"><i class="uil uil-facebook-f"></i></a>
            </li>
            <li>
              <a href="#"><i class="uil uil-facebook-f"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer_copyright">
        <small>Copyright &copy; Camp Dev</small>
      </div>
    </footer>
  )
}

export default Footer