import './categories.css'
import data from './data'
import {
  SiCyberdefenders, SiFlutter, SiDatabricks
} from 'react-icons/si'
import {
  DiReact
} from 'react-icons/di'
import {
  CgWebsite
} from 'react-icons/cg'


const Categories = () => {
  return (
    <section className="categories">
      <div className="container categories_container">
        <div className="categories_left">
          <h1>Categories</h1>
          <p>
          Telusuri beragam kategori kursus kami yang menawarkan berbagai topik dan peluang belajar sesuai dengan minat dan kebutuhan Anda.
          </p>
          <a href="#" className="btn">Learn More</a>
        </div>
        <div className="categories_right">
          <div className="row">
            <article className="category">
              <h5>Web Development</h5>
              <DiReact className="category_icon"/>
              <p>Membuat, merancang, dan memelihara situs web dengan bahasa pemrograman tertentu untuk pengalaman online interaktif.</p>
            </article>

            <article className="category">
              <h5>Mobile App Development</h5>
              <SiFlutter className="category_icon"/>
              <p>Pengembangan aplikasi mobile mencakup pembuatan perangkat lunak menggunakan bahasa pemrograman dan teknologi khusus.</p>
            </article>
          </div>
          <div className="row">
            <article className="category">
              <h5>Cyber security</h5>
              <SiCyberdefenders className="category_icon"/>
              <p>Keamanan cyber melibatkan melindungi sistem dan data dari ancaman digital untuk menjaga kerahasiaan dan integritas.</p>
            </article>

            <article className="category">
              <h5>Data science</h5>
              <SiDatabricks className="category_icon"/>
              <p>Data Science adalah ilmu yang menganalisis data untuk mendapatkan wawasan dan mendukung pengambilan keputusan.</p>
            </article>
          </div>
          <div className="row">
            <article className="category">
              <h5>Internet of Things</h5>
              <SiCyberdefenders className="category_icon"/>
              <p>IoT (Internet of Things) adalah jaringan perangkat terhubung ke internet yang berkomunikasi dan berbagi data otomatis.</p>
            </article>

            <article className="category">
              {/* <!-- <span className="category_icon"><i data-feather="dollar-sign"></i></span> --> */}
              <h5>UI/UX Design</h5>
              <CgWebsite className="category_icon"/>
              <p>UI/UX design menggabungkan elemen visual dengan interaksi untuk menciptakan pengalaman pengguna yang baik.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories