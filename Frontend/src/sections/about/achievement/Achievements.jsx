import React from 'react'
import AchievementsImage from '../../../assets/images/About_Achievement.png'
import './achievements.css'
import data from './data'


const Achievements = () => {
    return (
        <section className="about_achievements">
            <div className="container about_achievements-container">
                <div className="about_achievements-left">
                    <img src={AchievementsImage} alt="" srcSet="" />
                </div>
                <div className="about_achievements-right">
                    <h1>Achievements</h1>
                    <p>

                    Halaman "Prestasi Kami" menampilkan berbagai prestasi dan pengakuan yang telah kami raih dalam penyelenggaraan kursus teknologi dan pemrograman.

                    </p>
                    <div className="achievements_cards">
                        {
                            data.map(item =>
                                <article key={item.id} className="achievement_card">
                                    <span className="achievement_icon">
                                        <i><item.icon/></i>

                                    </span>
                                    <h3>{item.num}</h3>
                                    <p>{item.title}</p>
                                </article>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements