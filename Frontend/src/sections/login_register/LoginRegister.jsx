import { useState} from 'react';
import './Login.css';
// import '../../../../Backend/server';
import axios from 'axios';
import { useEffect } from 'react';

function LoginRegister() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [valueRegis, setValueRegis] = useState({
    nama: '',
    email: '',
    password_hash: '',
  });

  const [valueLogin, setValueLogin] = useState({
    email: '',
    password_hash: '',
  });

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    axios
      .post('http://146.190.102.199:8081/sign-in', valueLogin)
      .then((res) => {
        if (res.data.status === 'Sign in success') {
          window.location.replace('/dasboard');
          console.log(valueLogin);
          console.log(res.data.status);
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSubmitRegister = (event) => {
    event.preventDefault();

    axios
      .post('http://146.190.102.199:8081/sign-up', valueRegis)
      .then((res) => {
        if (res.data.message === 'success') {
          setIsSignUp(false);
          console.log(valueRegis);
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

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

  useEffect(() => {
    () => console.log(isSignUp);
  }, [isSignUp]);

  return (
    <div className="container_Login">
      <div className="form-box">
        <h1 id="title">Sign Up</h1>
        <form onSubmit={isSignUp ? handleSubmitRegister : handleSubmitLogin} id="formloginandregis">
          <div className="input-group">
            <div className="input-field" id="nameField">
              <i className="fa-solid fa-user"></i>
              <input type="text" name="name" id="name" placeholder="Name" className="inpuform" onChange={(e) => setValueRegis({ ...valueRegis, nama: e.target.value })} />
            </div>

            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="inputform"
                onChange={isSignUp ? (e) => setValueRegis({ ...valueRegis, email: e.target.value }) : (e) => setValueLogin({ ...valueRegis, email: e.target.value })}
              />
            </div>

            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="inputform"
                onChange={isSignUp ? (e) => setValueRegis({ ...valueRegis, password_hash: e.target.value }) : (e) => setValueLogin({ ...valueLogin, password_hash: e.target.value })}
              />
            </div>
          </div>
          <div className="btn-field">
            <button type="button" id="signupBtn" onClick={toggleForm}>
              Sign up
            </button>
            <button type="button" id="signinpBtn" className="disable" onClick={toggleForm} to="/">
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
