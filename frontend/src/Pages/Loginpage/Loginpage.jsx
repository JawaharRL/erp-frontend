import React from 'react'
import './Loginpage.css'
import Illustration from '../../Assets/Illustration.jpg'
import eye from '../../Assets/eyewhite.svg'
import { Loginbutton } from '../../Components'

function Loginpage() {
  return (
    <div>
      <div className="logincontainer">
        <div className="Image">
          <img id='Illustration' src={Illustration} alt="" />
        </div>
      
        <div className="Loginform">
            <div className="form">
            <h2 >Login</h2>
            <label className='login-mailid' htmlFor="Email ID">Email ID</label>
            <input type="text" />
            <label className='login-password' htmlFor="Password">Password</label>
            <input  type="password" /><img src={eye} alt="" />
            <a href="#"> <p className='forgotpassword'>Forgot password?</p></a>
            <div className='login-button-space' >
            <Loginbutton></Loginbutton>
            </div>
            <p className='or'>or</p>
            <p className='or'>Create new account</p>
            </div>

        </div>
      </div>
      </div>

   
  )
}

export default Loginpage