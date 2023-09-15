import './header.css';
import imageHeader from './../../../assets/images/header.png';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="header_left">
          <h1>Kembangkan Kemampuan Anda, Bangun Karier yang Sukses</h1>
          <p>Temukan kursus berkualitas tinggi yang akan membantu Anda mencapai tujuan karier Anda yang lebih tinggi.</p>
          <a href="/login_and_register" className="btn btn-primary">
            Sign in
          </a>
        </div>
        <div className="header_right">
          <div className="header_right-image">
            <img src={imageHeader} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
