import React from 'react'
import { useLocation , useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

function FacultyInfohod() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
        <Header></Header>
        
        <Footer></Footer>
    </div>
  )
}

export default FacultyInfohod