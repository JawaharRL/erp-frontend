import React from 'react';
import './Landingpage.css';
import registericon from '../../Assets/register1.svg'
import loginicon from '../../Assets/login1.svg'
import Footer from '../../Components/Footer/Footer';
import Allbuttons from '../../Components/Allbuttons/Allbuttons';
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom';


const Landingpage = () => {
  return (
    <div>
    <Header></Header>
    <div class="landingpage-container">
        <div class="nav">
            <Link to={'/personal-form'}  >
            <Allbuttons value="Register" image={registericon}/>
            </Link>
        
            <Link to={'/login-page'}>
            <Allbuttons value="Login" image={loginicon}/>
            </Link>
           
        </div>
    </div>
    
    
    <Footer/>
    </div>
  )
}

export default Landingpage