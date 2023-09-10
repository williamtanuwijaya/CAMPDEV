import React, { useState } from 'react';
import './testimonial.css';
import avatar1 from './../../../assets/images/avatar1.jpg';
import avatar2 from './../../../assets/images/avatar2.jpg';
import avatar3 from './../../../assets/images/avatar3.jpg';
import avatar4 from './../../../assets/images/avatar4.jpg';
import avatar5 from './../../../assets/images/avatar5.jpg';
import Carousel from 'react-bootstrap/Carousel';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <section className="container testimonials_container">
      <h2>Students Testimonials</h2>
      <Carousel
        className="custom-bootstrap"
        activeIndex={activeIndex}
        onSelect={handleSelect}
        interval={3000}
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
      >
        <Carousel.Item>
          <div className="testimonial swiper-slide">
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
        </Carousel.Item>
        <Carousel.Item>
          <div className="testimonial swiper-slide">
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
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="testimonial swiper-slide">
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
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="testimonial swiper-slide">
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
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="testimonial swiper-slide">
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
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Testimonial;