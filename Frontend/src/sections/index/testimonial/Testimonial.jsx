// import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './testimonial.css';
// import data from './data';

import avatar1 from './../../../assets/images/avatar1.jpg';
// import avatar2 from './../../../assets/images/avatar2.jpg';
// import avatar3 from './../../../assets/images/avatar3.jpg';
// import avatar4 from './../../../assets/images/avatar4.jpg';
// import avatar5 from './../../../assets/images/avatar5.jpg';

const Testimonial = () => {
  return (
    <section>
      <h2>Students Testimonials</h2>
      <Carousel>
        <div>
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
        </div>

        <div>
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
        </div>

        <div>
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
        </div>
      </Carousel>
    </section>
  );
};
export default Testimonial;
