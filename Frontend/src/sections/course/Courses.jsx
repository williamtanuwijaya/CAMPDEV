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
                        <h4>Responsive Social Media Website UI Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, magnam? Quasi dolorum mollitia esse nemo odio!</p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article>

                <article className="course">
                    <div className="course_image">
                        <img src={course2}/>
                    </div>
                    <div className="course_info">
                        <h4>Responsive Social Media Website UI Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, magnam? Quasi dolorum mollitia esse nemo odio!</p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article>

                <article className="course">
                    <div className="course_image">
                        <img src={course3} />
                    </div>
                    <div className="course_info">
                        <h4>Responsive Social Media Website UI Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, magnam? Quasi dolorum mollitia esse nemo odio!</p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article>

                <article className="course">
                    <div className="course_image">
                        <img src={course4} />
                    </div>
                    <div className="course_info">
                        <h4>Responsive Social Media Website UI Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, magnam? Quasi dolorum mollitia esse nemo odio!</p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article>

                <article className="course">
                    <div className="course_image">
                        <img src={course5} />
                    </div>
                    <div className="course_info">
                        <h4>Responsive Social Media Website UI Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, magnam? Quasi dolorum mollitia esse nemo odio!</p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article>

                <article className="course">
                    <div className="course_image">
                        <img src={course6}/>
                    </div>
                    <div className="course_info">
                        <h4>Responsive Social Media Website UI Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, magnam? Quasi dolorum mollitia esse nemo odio!</p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article>

                <article className="course">
                    <div className="course_image">
                        <img src={course7}/>
                    </div>
                    <div className="course_info">
                        <h4>Responsive Social Media Website UI Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, magnam? Quasi dolorum mollitia esse nemo odio!</p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article>

                <article className="course">
                    <div className="course_image">
                        <img src={course8}/>
                    </div>
                    <div className="course_info">
                        <h4>Responsive Social Media Website UI Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, magnam? Quasi dolorum mollitia esse nemo odio!</p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article>

                <article className="course">
                    <div className="course_image">
                        <img src={course9}/>
                    </div>
                    <div className="course_info">
                        <h4>Responsive Social Media Website UI Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, magnam? Quasi dolorum mollitia esse nemo odio!</p>
                        <a href="courses.html" className="btn btn-primary">Learn More</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Courses