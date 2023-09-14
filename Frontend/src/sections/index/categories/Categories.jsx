import './categories.css'
import data from './data'

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
          <a href="#" className="btn">Learn More</a>
        </div>
        <div className="categories_right">
          <div className="row">
            <article className="category">
              {/* <!-- <span className="category_icon"><i data-feather="dollar-sign"></i></span> --> */}
              <h5>Blockchain</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, qui!</p>
            </article>

            <article className="category">
              {/* <!-- <span className="category_icon"><i data-feather="dollar-sign"></i></span> --> */}
              <h5>Graphic Design</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, qui!</p>
            </article>
          </div>
          <div className="row">
            <article className="category">
              {/* <!-- <span className="category_icon"><i data-feather="dollar-sign"></i></span> --> */}
              <h5>Blockchain</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, qui!</p>
            </article>

            <article className="category">
              {/* <!-- <span className="category_icon"><i data-feather="dollar-sign"></i></span> --> */}
              <h5>Graphic Design</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, qui!</p>
            </article>
          </div>
          <div className="row">
            <article className="category">
              {/* <!-- <span className="category_icon"><i data-feather="dollar-sign"></i></span> --> */}
              <h5>Blockchain</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, qui!</p>
            </article>

            <article className="category">
              {/* <!-- <span className="category_icon"><i data-feather="dollar-sign"></i></span> --> */}
              <h5>Graphic Design</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, qui!</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories