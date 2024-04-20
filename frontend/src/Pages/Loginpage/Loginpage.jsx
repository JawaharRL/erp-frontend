import React, { useState } from 'react';
import axios from "axios";
import './Loginpage.css';
import { Loginbutton } from '../../Components';
import { toast } from 'react-toastify';

function Loginpage() {
  const [emailid, setemailid] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8080/api/authentication/authenticate", { emailid, password })
      .then(res => {
        console.log(res);
        if (res.data === "Authentication successful") {
          toast("Login Successful");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className="logincontainer">    
        <div className="Loginform">
          <div className="form">
            <h1 id='login-title'>Login</h1>
            <form id="login" onSubmit={handleSubmit}>
              <label className='login-mailid' htmlFor="Email ID">Email ID</label>
              <input type="text" id='input-mail' onChange={e => setemailid(e.target.value)} />
              <label className='login-password' htmlFor="Password">Password</label>
              <input type="password" onChange={e => setPassword(e.target.value)} />
              <a href="#" id='forgotpassword'> <p className='forgotpassword'>Forgot password?</p></a>
              <div className='login-button-space'>
                <Loginbutton></Loginbutton>
              </div>
            </form>
            <p className='or'>or</p>
            <p className='or new-register'>Create new account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
