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
          {
            data.map(item =>
              <article key={item.id} className="category">
                <span className="category_icon"><i data-feather="dollar-sign"></i></span>
                <h5>{item.title}</h5>
                <p>{item.explain}</p>
              </article>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Categories