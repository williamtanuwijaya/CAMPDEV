import { useState} from 'react';
import './Login.css';
// import '../../../../Backend/server'

function LoginRegister() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  

  return (
    <div className="container_Login">
      <div className="form-box">
        <h1 className="title">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        <form  action="http://localhost:8081/tambah" method='POST' >
          <div className={`input-group ${isSignUp ? '' : 'collapsed'}`}>
            <div className="input-field" id="nameField">
              <i className="fa-solid fa-user"></i>
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>

            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>

            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>

            <p>
              Lost password{' '}
              <a href="#" onClick={toggleForm}>
                Click Here!
              </a>
            </p>
          </div>
          <div className="btn-field">
            <button type="button" onClick={toggleForm} id="signupBtn">
              Sign up
            </button>
            <button type="button" id="signinBtn" className="disable">
              Sign in
            </button>
          </div>
          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    </div>
  );
}

export default LoginRegister;
