import React from 'react';
import './Landingpage.css';
import registericon from '../../Assets/register1.svg'
import loginicon from '../../Assets/login1.svg'
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header'


const Landingpage = () => {
  return (
    <div>
    <Header></Header>
    <div class="landingpage-container">
        <div class="nav">
            <div>
                <Link to={'/register-page-personal'} class="landing-button" >
                    <img class="icon" src={registericon} alt=""/>
                    <p>Register</p>
                </Link>
            </div>
           <div>
            <Link to={'/login-page'} class="landing-button">
                <img  class="icon" src={loginicon} alt=""/>
                <p>Login</p>
            </Link>
           </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Landingpage