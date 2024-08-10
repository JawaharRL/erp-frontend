import React, { useEffect, useState } from 'react';
import './Facultydashboard.css';
import { useLocation } from 'react-router-dom';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Allbuttons from '../../Components/Allbuttons/Allbuttons.jsx';
import Profileicon from '../../Assets/profile.svg';
import View from '../../Assets/eyewhite.svg';
import Logout from '../../Assets/logout.svg';
import axios from 'axios';

function Facultydashboard() {
  var sl= 0;
  const [faculty, setFaculty] = useState(null);
  const [open, setOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const facultyId = location.state.userId;
        const response = await axios.get(`http://localhost:8080/api/faculty/${facultyId}`);
        console.log('Response data:', response.data);
        setFaculty(response.data);
      } catch (error) {
        console.error('Error fetching faculty:', error);
      }
    };

    fetchFaculty();
  }, [location.state.userId]);

  if (!faculty) {
    return <p>Loading faculty data...</p>;
  }

  return (
    <div>
      <Header />
      <div className="nav">
        <div className="faculty_profile_icon" onClick={()=>setOpen(!open)} >
            <img id="profile_icon" src={Profileicon} alt="" />
        </div>

      </div >
      { open &&
      <div className="faculty_profile_details">
        
      <div className="faculty-profile">
         <p className="field_background">{faculty.name}</p>
         <p className="field_background">{faculty.discipline}</p>
         <Allbuttons value="Logout" image={Logout}/>
         </div>
      </div>
      }
        
        

      <div className="faculty_dashboard_container">
        <div className="profile-links">
          <ul>
            <li className="profile_links">CSE III Year</li>
            {/* <li className="profile_links" >Requests</li> */}
          </ul>
        </div>

        <div className="profile_name">
        
          {faculty.students && faculty.students.length > 0 ? (
            faculty.students.map((student, index) => (
              <div key={index} className="student_info">
                <p>{++sl}</p>
                <p>{student.firstName} {student.lastName}</p>
                <p>{student.registerNo}</p>
                <p>{student.emailid}</p>
                <Allbuttons value="View" image={View} target="/"/>
                {/* Add more fields as necessary */}
              </div>
            ))
          ) : (
            <p>No students available</p>
          )}
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Facultydashboard;
