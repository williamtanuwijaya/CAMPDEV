import { useState } from 'react';
import './Login.css'
// import '../../../../Backend/server';

function LoginRegister() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    const nameField = document.getElementById('nameField');
    const title = document.getElementById('title');
    const signupBtn = document.getElementById('signupBtn');
    const signinpBtn = document.getElementById('signinpBtn');

    if (isSignUp) {
      nameField.style.maxHeight = '0';
      title.innerHTML = 'Sign In';
      signupBtn.classList.add('disable');
      signinpBtn.classList.remove('disable');
    } else {
      nameField.style.maxHeight = '60px';
      title.innerHTML = 'Sign Up';
      signinpBtn.classList.add('disable');
      signupBtn.classList.remove('disable');
    }

    setIsSignUp(!isSignUp);
  };

  return (
    <div className="container_Login">
      <div className="form-box">
        <h1 id="title">Sign Up</h1>
        <form action="/tambah" method='POST'>
          <div className="input-group">
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
              <input type="password" name="password" id="password" placeholder="Password" />
            </div>

            <p>
              Lost password{' '}
              <a href="#" onClick={toggleForm}>
                Click Here!
              </a>
            </p>
          </div>
          <div className="btn-field">
            <button type="button" id="signupBtn" onClick={toggleForm}>
              Sign up
            </button>
            <button type="button" id="signinpBtn" className="disable" onClick={toggleForm}>
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
