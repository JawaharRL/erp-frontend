import React , { useEffect, useState } from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import './Headofthedepartmentdashboard.css';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

function Headofthedepartmentdashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  
  return (
    <div>
        <Header />
        <Footer />
    </div>
  )
}

export default Headofthedepartmentdashboard;