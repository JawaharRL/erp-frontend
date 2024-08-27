import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landingpage, Loginpage, Facultyregistration,Profilepage, Facultydashboard,Registrationform,Bonafide} from './Pages';


function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/login-page" element={<Loginpage/>}/>
        <Route path="/registration-form" element={<Registrationform/>}/>
        <Route path="/profile-page" element={<Profilepage/>}/>
        <Route path="/faculty-dashboard" element={<Facultydashboard/>}/>
        <Route path="/faculty-registration" element={<Facultyregistration/>}/>
        <Route path="/bonafide-page" element={<Bonafide/>}/>
      </Routes>
    
    </div>
  );
}
export default App;
