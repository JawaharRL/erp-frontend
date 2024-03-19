import React from 'react';
import './Landingpage.css';
// import '../Registrationpage1/Registrationpage1.jsx'
import clglogo from '../../Assets/clglogo.png'
import registericon from '../../Assets/register1.svg'
import loginicon from '../../Assets/login1.svg'
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';

const Landingpage = () => {
  return (
    <div>
    <header>
        <div><img class="clglogo" src={clglogo} alt="collegelogo"/></div>
        <div class="clgname">
        <h2 >Alagappa Chettiar Government College of Engineering and Technology-Karaikudi</h2>
        <p class="clgdes">(An Autonomous Institution Permanently Affiliated to Anna University)</p>
        </div>
    </header>
    <hr/>

    <div class="container">
        <div class="nav">
            <div>
                <Link to={'/register-page'} class="landing-button" >
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