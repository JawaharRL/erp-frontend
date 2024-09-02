import React , { useEffect, useState } from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import './Headofthedepartmentdashboard.css';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Profileicon from '../../Assets/profile.svg';
import axios from 'axios';
import Allbuttons from '../../Components/Allbuttons/Allbuttons.jsx';
import Logout from '../../Assets/logout.svg';

function Headofthedepartmentdashboard() {
  var sl= 0;
  const location = useLocation();
  const navigate = useNavigate();
  const  [userId, setuserId] = useState('Headofthedepartment')
  const [open, setOpen] = useState(null);
  const [Headofthedepartment, setHeadofthedepartment] = useState(null);
  


  useEffect(() => {
    const fetchHeadofthedepartment = async () => {
      try {
        const Headofthedepartment = location.state.userId;
        const response = await axios.get(`http://localhost:8080/api/hod/student/${Headofthedepartment}`);
        console.log('Response data:', response.data);
        setHeadofthedepartment(response.data);
      } catch (error) {
        console.error('Error fetching faculty:', error);
      }
    };

    fetchHeadofthedepartment();
  }, [location.state.userId]);


  const handleLogoutClick = () => {
    navigate('/login-page');
  };
  const gotofacultyinfohod = () => {
    navigate('/facultyinfohod-page', { state: { userId: 'Headofthedepartment' } });
  };
  const gotostudentinfohod = () => {
    navigate('/studentinfohod-page',{ state: { userId: 'Headofthedepartment' } });
  };

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
         <p className="field_background">{Headofthedepartment.firstName} {Headofthedepartment.lastName}</p>
         <p className="field_background">{Headofthedepartment.discipline}</p>
         <p className="field_background">{Headofthedepartment.email}</p>
         <p className="field_background">{Headofthedepartment.mobileNumber}</p>
         <Allbuttons value="Logout" image={Logout} target={handleLogoutClick}/>
         </div>
      </div>
      }

    {/* <div className="student_and_faculty_profile">
    <div className="view_faculty_profiles">
        <button id="view_faculty_profiles" onClick={gotofacultyinfohod}>view faculties</button>
      </div>
      <div className="view_student_profiles">
        <button id="view_student_profiles" onClick={gotostudentinfohod}>view Students</button>
      </div>
    </div> */}
     
     <div className="profile_name">
        
        {Headofthedepartment.students && Headofthedepartment.students.length > 0 ? (
          Headofthedepartment.students.map((student, index) => (
            <div key={index} className="student_info">
              <p>{++sl}</p>
              <p>{student.firstName} {student.lastName}</p>
              <p>{student.registerNo}</p>
              <p>{student.emailid}</p>
              {/* <Allbuttons value="View" image={View} target={() => handleViewClick(student)} />   */}
              {/* Add more fields as necessary */}
            </div>
          ))
        ) : (
          <p>No students available</p>
        )}
        
      </div>


       <div className="Headofthedepartmentdashboard_footer">
       <Footer />
       </div>
    </div>
  )
}

export default Headofthedepartmentdashboard;