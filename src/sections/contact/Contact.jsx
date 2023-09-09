import React from 'react'
import './contact.css'
import contacct from './../../assets/images/contact.png'

const Contact = () => {
    return (
        <section className="contact">
            <div className="container contact_container">
                <aside className="contact_aside">
                    <div className="aside_image">
                        <img src={contacct} alt="" srcset="" />
                    </div>
                    <h2>Kontak Kami</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde atque, ratione iure similique nulla soluta incidunt molestias dolores voluptate voluptates maiores neque necessitatibus reiciendis animi sed optio numquam. Quod,
                        dolores.
                    </p>
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
                            <a href="#"><i className="uil uil-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="uil uil-instagram"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="uil uil-linkedin"></i></a>
                        </li>
                    </ul>
                </aside>

                <form action="" className="contact_form">
                    <div className="form_name">
                        <input type="text" name="First Name" id="" placeholder="First Name" required />
                        <input type="text" name="Last Name" id="" placeholder="Last Name" required />
                    </div>
                    <input type="email" name="Email Address" id="" placeholder="Alamat Email" required />
                    <textarea name="Message" id="" cols="30" rows="7" placeholder="Komentar dan Pesan" required></textarea>
                    <button type="submit" className="btn btn-primary">Kirim Pesan</button>
                </form>
            </div>
        </section>
    )
}

export default Contact