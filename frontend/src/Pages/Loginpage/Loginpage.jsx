import React, { useState } from 'react';
import axios from "axios";
import './Loginpage.css';
import { useNavigate } from 'react-router-dom'
import { Loginbutton } from '../../Components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Loginpage() {
  const [emailid, setemailid] = useState('');
  const [password, setPassword] = useState('');
  const navigate =useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8080/api/authentication/authenticate", { emailid, password })
      .then(async(res) => {
        console.log(res);
        if (res.data === "Authentication successful") {
          toast("Login Successful");
          await new Promise((resolve) => setTimeout(resolve, 1000));
          navigate('/profile-page')
        }
      })
      .catch(err => {
        console.log(err);
        toast("Invalid Emailid or Password");
      });
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

      <ToastContainer />

    </div>
  );
}

export default Loginpage;

