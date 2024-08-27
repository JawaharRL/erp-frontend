import React, { useEffect, useState } from 'react';
import './Facultydashboard.css';
import { useLocation , useNavigate } from 'react-router-dom';
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
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [open, setOpen] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleLogoutClick = () => {
    // Perform logout and then navigate to a different route if needed
    navigate('/login-page');
  };

  const handleClearClick = () => {
    // Reset or clear state
    setSelectedStudent(null);
    // Optionally, you can perform other clearing actions here
  };

  const handleViewClick = async (student) => {
    try {
      const studentId = student.registerNo;
      const response = await axios.get(`http://localhost:8080/api/student/${studentId}`);
      console.log('Response data:', response.data);
      setSelectedStudent(response.data);
    } catch (error) {
      console.error('Error fetching faculty:', error);
    }
    //setSelectedStudent(student);
  };

  if (!faculty) {
    return <p>Loading faculty data...</p>;
  }

  return (
    <div>
      <Header />
      <div className="nav">
      <Allbuttons value="Clear" image={Logout} target={handleClearClick} />
        <div className="faculty_profile_icon" onClick={()=>setOpen(!open)} >
            <img id="profile_icon" src={Profileicon} alt="" />
        </div>

      </div >
      { open &&
      <div className="faculty_profile_details">
        
      <div className="faculty-profile">
         <p className="field_background">{faculty.firstName} {faculty.lastName}</p>
         <p className="field_background">{faculty.discipline}</p>
         <p className="field_background">{faculty.email}</p>
         <p className="field_background">{faculty.mobileNumber}</p>
         <Allbuttons value="Logout" image={Logout} target={handleLogoutClick}/>
         </div>
      </div>
      }

      <div className="faculty_dashboard_container">
        <div className="profile-links">
          <ul>
            <li className="profile_links">{faculty.discipline}{faculty.handlingBatch}</li>
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
                <Allbuttons value="View" image={View} target={() => handleViewClick(student)} />
                {/* Add more fields as necessary */}
              </div>
            ))
          ) : (
            <p>No students available</p>
          )}
          
        </div>
        {selectedStudent && (
        <div className="student_details">
          <h3>{selectedStudent.firstName} Details</h3>
          <p><strong>First Name:</strong> {selectedStudent.firstName}</p>
          <p><strong>Last Name:</strong> {selectedStudent.lastName}</p>
          <p><strong>Register No:</strong> {selectedStudent.registerNo}</p>
          <p><strong>Email ID:</strong> {selectedStudent.emailid}</p>
          {/* Add more fields as necessary */}
        </div>
      )}
      </div>
     <div id="one"> 
     <Footer />
     </div>
    </div>
  );
}

export default Facultydashboard;
