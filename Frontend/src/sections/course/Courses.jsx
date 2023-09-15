import React from 'react'
import './courses.css'
import course1 from './../../assets/images/course1.jpg'
import course2 from './../../assets/images/course2.jpg'
import course3 from './../../assets/images/course3.jpg'
import course4 from './../../assets/images/course4.jpg'
import course5 from './../../assets/images/course5.jpg'
import course6 from './../../assets/images/course6.jpg'
import course7 from './../../assets/images/course7.jpg'
import course8 from './../../assets/images/course8.jpg'
import course9 from './../../assets/images/course9.jpg'

const Courses = () => {
    return (
        <section className="courses">
            <h2>Our Popular Courses</h2>
            <div className="container courses_container">
                <article className="course">
                    <div className="course_image">
                        <img src={course1} />
                    </div>
                    <div className="course_info">
                        <h4>Dasar Pemrograman Java</h4>
                        <p>Kursus Pemrograman Dasar: Ini adalah kursus untuk pemula yang mencakup dasar-dasar pemrograman seperti sintaks, logika pemrograman, variabel, dan tipe data.</p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article>

                <article className="course">
                    <div className="course_image">
                        <img src={course2}/>
                    </div>
                    <div className="course_info">
                        <h4>Kursus Pengembangan Web</h4>
                        <p>Kursus Pengembangan Web: Ini mencakup topik seperti HTML, CSS, JavaScript, serta kerangka kerja (framework) web seperti React, Angular, atau Vue.js. Anda akan belajar cara membangun situs web interaktif dan responsif</p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article>

                <article className="course">
                    <div className="course_image">
                        <img src={course3} />
                    </div>
                    <div className="course_info">
                        <h4>Kursus Pengembangan Aplikasi Mobile</h4>
                        <p>Kursus Pengembangan Aplikasi Mobile: Ini mencakup pengembangan aplikasi mobile untuk platform seperti Android (menggunakan Java atau Kotlin) dan iOS (menggunakan Swift)</p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article>

                <article className="course">
                    <div className="course_image">
                        <img src={course4} />
                    </div>
                    <div className="course_info">
                        <h4>Kursus Pengembangan Game</h4>
                        <p>Kursus Pengembangan Game: Jika Anda tertarik dalam pengembangan game, Anda dapat menemukan kursus yang mengajarkan pembuatan game menggunakan berbagai platform dan mesin game seperti Unity atau Unreal Engine.</p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article>

                <article className="course">
                    <div className="course_image">
                        <img src={course5} />
                    </div>
                    <div className="course_info">
                        <h4>Kursus Keamanan Informasi</h4>
                        <p>Kursus Keamanan Informasi: Ini membahas topik keamanan siber dan praktik terbaik untuk melindungi sistem dan data. Ini penting dalam dunia teknologi saat ini.</p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article>

                <article className="course">
                    <div className="course_image">
                        <img src={course6}/>
                    </div>
                    <div className="course_info">
                        <h4>Kursus Pengembangan Berbasis AI dan Machine Learning </h4>
                        <p>Kursus Pengembangan Berbasis AI dan Machine Learning: Jika Anda tertarik dalam kecerdasan buatan (AI) dan pembelajaran mesin (machine learning), Anda dapat menemukan kursus yang mengajarkan konsep-konsep ini serta penggunaan alat dan framework terkait.</p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article>

                <article className="course">
                    <div className="course_image">
                        <img src={course7}/>
                    </div>
                    <div className="course_info">
                        <h4>Kursus Pengembangan Situs E-Commerce atau Aplikasi Sosial</h4>
                        <p>Kursus Pengembangan Situs E-commerce atau Aplikasi Sosial: Ini mencakup pengembangan aplikasi berbasis e-commerce seperti toko online atau aplikasi sosial seperti kloning media sosial.</p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article>

                <article className="course">
                    <div className="course_image">
                        <img src={course8}/>
                    </div>
                    <div className="course_info">
                        <h4>Kursus Pengembangan Perangkat Lunak Berbasis Open Source</h4>
                        <p>Kursus Pengembangan Perangkat Lunak Berbasis Open Source: Ini mengajarkan pengembangan perangkat lunak dengan menggunakan proyek open source dan kerja bersama dalam komunitas pengembang</p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article>

                <article className="course">
                    <div className="course_image">
                        <img src={course9}/>
                    </div>
                    <div className="course_info">
                        <h4>Kursus Pengembangan Berbasis IoT</h4>
                        <p>Kursus Pengembangan Berbasis IoT: Jika Anda tertarik dalam Internet of Things (IoT), ada kursus yang membantu Anda memahami bagaimana mengembangkan aplikasi dan perangkat IoT.</p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Courses