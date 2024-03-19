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
            <h2>Login</h2>
            <label htmlFor="Email ID">Email ID</label>
            <input type="text" />
            <label htmlFor="Password">Password</label>
            <input type="password" /><img src={eye} alt="" />
            <a href="#"> <p className='forgotpassword'>Forgot password?</p></a>
            <Loginbutton></Loginbutton>
            <p className='or'>or</p>
            <p className='or'>Create new account</p>
            </div>

        </div>
      </div>
      </div>

   
  )
}

export default Loginpage