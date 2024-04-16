import React from 'react'
import './Loginpage.css'
// import Illustration from '../../Assets/Illustration.jpg'
// import eye from '../../Assets/eyewhite.svg'
import { Loginbutton } from '../../Components'

function Loginpage() {
  return (
    <div >
      <div className="logincontainer">    
        <div className="Loginform">
            <div className="form">
            <h1 id='login-title'>Login</h1>
            <label className='login-mailid' htmlFor="Email ID">Email ID</label>
            <input type="text" id='input-mail' />
            <label className='login-password' htmlFor="Password">Password</label>
            <input  type="password" />
            <a href="#" id='forgotpassword'> <p className='forgotpassword'>Forgot password?</p></a>
            <div className='login-button-space' >
            <Loginbutton></Loginbutton>
            </div>
            <p className='or'>or</p>
            <p className='or new-register'>Create new account</p>
            </div>
        </div>
      </div>
      </div>

   
  )
}

export default Loginpage