import React from 'react'
import './Facultydashboard.css'
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Studentsampledata from "../../Components/Studentsampledata/Studentsampledata.jsx";
import Allbuttons from "../../Components/Allbuttons/Allbuttons.jsx";
import Profileicon from "../../Assets/profile.svg";

function Facultydashboard() {

    
  return (
    <div>
        <Header/>
        <div className="nav">
        <Allbuttons
          className="profile-button"
          target={""}
          value="Profile"
          image={Profileicon}
        />
      </div>
        <div className="faculty_dashboard_container">

        <div className="profile-links">
          <ul>
            <li className="profile_links"  >CSE III Year</li>
            {/* <li className="profile_links" >Requsts</li> */}
          </ul>
        </div>


        <div className="student_sampledata_container">
        <Studentsampledata/>
        <Studentsampledata/>
        <Studentsampledata/>
    
  
        </div>

        
        </div>
        <Footer/>
        
    </div>
  )
}

export default Facultydashboard