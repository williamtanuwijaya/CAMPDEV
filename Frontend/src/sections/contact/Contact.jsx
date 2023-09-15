import './contact.css';
import { useRef, useState } from 'react';
import contactImage from './../../assets/images/contact.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lifrczz', 'template_np5x8lc', form.current, 'a6HEma8VdAKb2-QIN').then(
      (result) => {
        console.log(result.text);
        console.log('sukses');
        setMessageSent(true);
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section className="contact">
      <div className="container contact_container">
        <aside className="contact_aside">
          <div className="aside_image">
            <img src={contactImage} alt="" />
          </div>
          <h2>Kontak Kami</h2>
          <p>Halaman "Kontak Kami" menyediakan informasi dan sarana komunikasi untuk pengguna yang ingin berhubungan dengan kami.</p>
          <ul className="contact_details">
            <li>
              <i className="uil uil-phone"></i>
              <h5>+622397492349</h5>
            </li>
            <li>
              <i className="uil uil-envelope"></i>
              <h5>CampDev@gmail.com</h5>
            </li>
            <li>
              <i className="uil uil-location-point"></i>
              <h5>Rajawali 14 Street</h5>
            </li>
          </ul>
          <ul className="contact_socials">
            <li>
              <a href="#">
                <i className="uil uil-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-linkedin"></i>
              </a>
            </li>
          </ul>
        </aside>

        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <div className="form_name">
            <input id="input" type="text" name="firstname" placeholder="First Name" required />
            <input id="input" type="text" name="lastname" placeholder="Last Name" required />
          </div>
          <input id="input" type="email" name="emailadress" placeholder="Alamat Email" required />
          <textarea name="message" cols="30" rows="7" placeholder="Komentar dan Pesan" required></textarea>
          <button type="submit" className="btn btn-primary">
            Kirim Pesan
          </button>
          {messageSent && <p>Pesan berhasil dikirim!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
