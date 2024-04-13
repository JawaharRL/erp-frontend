import React from 'react';
import './Landingpage.css';
import registericon from '../../Assets/register1.svg'
import loginicon from '../../Assets/login1.svg'
import Footer from '../../Components/Footer/Footer';
import Allbuttons from '../../Components/Allbuttons/Allbuttons';
import Header from '../../Components/Header/Header'
import { Link,useNavigate } from 'react-router-dom';


function Landingpage() {
  const navigate = useNavigate();

  const goToPersonalform = () => {
    navigate('/personal-form');
  };
  const goToLoginpage = () => {
    navigate('/login-page');
  };

  return (
    <div>
    <Header></Header>
    <div class="landingpage-container">
        <div class="nav">
            <Allbuttons className="register-button" target={goToPersonalform} value="Register" image={registericon}/>
            <Allbuttons className="login-button" target={goToLoginpage} value="Login" image={loginicon}/>
           
        </div>
    </div>
    
    
    <Footer/>
    </div>
  )
}

export default Landingpage