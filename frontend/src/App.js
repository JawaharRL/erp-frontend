import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landingpage, Loginpage, Personalform,Academicform, Profilepage } from './Pages';


function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/login-page" element={<Loginpage/>}/>
        <Route path="/personal-form" element={<Personalform/>}/>
        <Route path="/academic-form" element={<Academicform/>}/>
        <Route path="/profile-page" element={<Profilepage/>}/>
      </Routes>
    
    </div>
  );
}
export default App;
