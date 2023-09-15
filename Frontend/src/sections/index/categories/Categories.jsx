import './categories.css';
import data from './data';
import { SiCyberdefenders, SiFlutter, SiDatabricks } from 'react-icons/si';
import { DiReact } from 'react-icons/di';
import { CgWebsite } from 'react-icons/cg';

const Categories = () => {
  return (
    <section className="categories">
      <div className="container categories_container">
        <div className="categories_left">
          <h1>Categories</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur impedit quam eum, culpa fugiat quaerat nisi dolor provident temporibus magni. Laboriosam harum fuga architecto accusamus corrupti obcaecati corporis, praesentium
            ut!
          </p>
          <a href="#" className="btn">
            Learn More
          </a>
        </div>
        <div className="categories_right">
          <div className="row">
            <article className="category">
              <h5>Web Development</h5>
              <DiReact className="category_icon" />
              <p>Pengembangan pembuatan website</p>
            </article>

            <article className="category">
              <h5>Mobile App Development</h5>
              <SiFlutter className="category_icon" />
              <p>Pengembangan pembuatan aplikasi</p>
            </article>
          </div>
          <div className="row">
            <article className="category">
              <h5>Cyber security</h5>
              <SiCyberdefenders className="category_icon" />
              <p>Keamanan sistem</p>
            </article>

            <article className="category">
              <h5>Data science</h5>
              <SiDatabricks className="category_icon" />
              <p>Mengelolah data</p>
            </article>
          </div>
          <div className="row">
            <article className="category">
              <h5>Internet of Things</h5>
              <SiCyberdefenders className="category_icon" />
              <p>Mengembangkan aplikasi dan perangkat IoT.</p>
            </article>

            <article className="category">
              {/* <!-- <span className="category_icon"><i data-feather="dollar-sign"></i></span> --> */}
              <h5>UI/UX Design</h5>
              <CgWebsite className="category_icon" />
              <p>Design tampilan website, mobile dan desktop</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
