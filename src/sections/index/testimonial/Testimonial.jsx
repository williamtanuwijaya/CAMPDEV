import React from 'react'
import avatar1 from "./../../../assets/images/avatar1.jpg"
import avatar2 from "./../../../assets/images/avatar2.jpg"
import avatar3 from "./../../../assets/images/avatar3.jpg"
import avatar4 from "./../../../assets/images/avatar4.jpg"
import avatar5 from "./../../../assets/images/avatar5.jpg"
import './testimonial.css'

const Testimonial = () => {
    return (
        <section className="container testimonials_container mySwiper">
            <h2>Students's Testimonials</h2>
            <div className="swiper-wrapper">
                <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img src={avatar1} alt="" srcSet="" />
                    </div>
                    <div className="testimonial_info">
                        <h5>Diana Ayi</h5>
                        <small>Student</small>
                        <div className="testimonial_body">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ipsam consequuntur corrupti doloremque impedit minima nesciunt, architecto cum aspernatur animi eos totam veritatis iusto voluptatibus voluptatem voluptas dolor
                                dicta autem!
                            </p>
                        </div>
                    </div>
                </article>

                <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img src={avatar2} alt="" srcSet="" />
                    </div>
                    <div className="testimonial_info">
                        <h5>Diana Ayi</h5>
                        <small>Student</small>
                        <div className="testimonial_body">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ipsam consequuntur corrupti doloremque impedit minima nesciunt, architecto cum aspernatur animi eos totam veritatis iusto voluptatibus voluptatem voluptas dolor
                                dicta autem!
                            </p>
                        </div>
                    </div>
                </article>

                <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img src={avatar3} alt="" srcSet="" />
                    </div>
                    <div className="testimonial_info">
                        <h5>Diana Ayi</h5>
                        <small>Student</small>
                        <div className="testimonial_body">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ipsam consequuntur corrupti doloremque impedit minima nesciunt, architecto cum aspernatur animi eos totam veritatis iusto voluptatibus voluptatem voluptas dolor
                                dicta autem!
                            </p>
                        </div>
                    </div>
                </article>

                <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img src={avatar4} alt="" srcSet="" />
                    </div>
                    <div className="testimonial_info">
                        <h5>Diana Ayi</h5>
                        <small>Student</small>
                        <div className="testimonial_body">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ipsam consequuntur corrupti doloremque impedit minima nesciunt, architecto cum aspernatur animi eos totam veritatis iusto voluptatibus voluptatem voluptas dolor
                                dicta autem!
                            </p>
                        </div>
                    </div>
                </article>

                <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img src={avatar5} alt="" srcSet="" />
                    </div>
                    <div className="testimonial_info">
                        <h5>Diana Ayi</h5>
                        <small>Student</small>
                        <div className="testimonial_body">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ipsam consequuntur corrupti doloremque impedit minima nesciunt, architecto cum aspernatur animi eos totam veritatis iusto voluptatibus voluptatem voluptas dolor
                                dicta autem!
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Testimonial