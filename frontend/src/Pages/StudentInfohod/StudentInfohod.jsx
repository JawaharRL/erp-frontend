import React from 'react'
import { useLocation , useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

function StudentInfoHOD() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
        <Header></Header>

        <p>hi</p>
        <Footer></Footer>
    </div>
  )
}

export default StudentInfoHOD