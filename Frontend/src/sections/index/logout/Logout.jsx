import './logout.css';
import imageHeader from './../../../assets/images/header.png';


const Logout = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="header_left">
          <h1>Grow your skills to andvance your career path</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti iure fugit ullam repellendus qui odit, labore laborum optio dolores rerum.</p>
          <a href="/" className="btn btn-primary">
            Log out
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

export default Logout;
