import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landingpage, Loginpage,Registrationpage1 } from './Pages';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/register-page" element={<Registrationpage1/>}/>
        <Route path="/login-page" element={<Loginpage/>}/>
      </Routes>
    
    </div>
  );
}
export default App;
