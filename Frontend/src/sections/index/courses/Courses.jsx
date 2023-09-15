import './courses.css';
import course1 from './../../../assets/images/course1.jpg';
import course2 from './../../../assets/images/course2.jpg';
import course3 from './../../../assets/images/course3.jpg';

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
            <a href="courses.html" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </article>

        <article className="course">
          <div className="course_image">
            <img src={course2} />
          </div>
          <div className="course_info">
            <h4>Kursus Pengembangan Web</h4>
            <p>Kursus Pengembangan Web: Ini mencakup topik seperti HTML, CSS, JavaScript, serta kerangka kerja (framework) web seperti React, Angular, atau Vue.js. Anda akan belajar cara membangun situs web interaktif dan responsif</p>
            <a href="courses.html" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </article>

        <article className="course">
          <div className="course_image">
            <img src={course3} />
          </div>
          <div className="course_info">
            <h4>Kursus Pengembangan Aplikasi Mobile</h4>
            <p>Kursus Pengembangan Aplikasi Mobile: Ini mencakup pengembangan aplikasi mobile untuk platform seperti Android (menggunakan Java atau Kotlin) dan iOS (menggunakan Swift)</p>
            <a href="courses.html" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Courses;

