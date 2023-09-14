import React from 'react'
import data from './data'
import './creatorPage.css'
import {
     FaInstagram, FaLinkedinIn,FaWhatsapp
} from 'react-icons/fa'

const CreatorPage = () => {
    return (
        <section className="team">
            <h2>Perkenalkan Beberapa Tim kami</h2>
            <div className="container team_container">
                {
                    data.map(item =>
                        <article  key={item.id} className="team_member">
                            <div className="team_member-image">
                                <img src={item.image} alt="" srcSet=""/>
                            </div>
                            <div className="team_member-info">
                                <h4>{item.name}</h4>
                                <p>{item.job}</p>
                            </div>
                            <div className="team_member-socials">                             
                                <a href="http://" target="_blank" className=""><FaInstagram/></a>
                                <a href="http://" target="_blank" className=""><FaLinkedinIn/></a>
                                <a href="http://" target="_blank" className=""><FaWhatsapp/></a>
                            </div>
                        </article>
                    )
                }
            </div>
        </section>
    )
}

export default CreatorPage