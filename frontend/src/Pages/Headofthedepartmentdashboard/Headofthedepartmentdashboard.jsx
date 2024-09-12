import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Headofthedepartmentdashboard.css';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Profileicon from '../../Assets/profile.svg';
import axios from 'axios';
import Allbuttons from '../../Components/Allbuttons/Allbuttons.jsx';
import Logout from '../../Assets/logout.svg';

function Headofthedepartmentdashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userId, setUserId] = useState('Headofthedepartment');
  const [open, setOpen] = useState(false);
  const [Headofthedepartment, setHeadofthedepartment] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeadofthedepartment = async () => {
      try {
        const { userId } = location.state || {};
        const response = await axios.get(`/api/faculty/hod/student/${userId}`);
        setHeadofthedepartment(response.data);
      } catch (error) {
        console.error('Error fetching faculty:', error);
        setError('Failed to fetch data. Please try again later.');
      }
    };

    fetchHeadofthedepartment();
  }, [location.state]);

  const handleLogoutClick = () => {
    navigate('/login-page');
  };

  const gotofacultyinfohod = () => {
    navigate('/facultyinfohod-page', { state: { userId } });
  };

  const gotostudentinfohod = () => {
    navigate('/studentinfohod-page', { state: { userId } });
  };

  return (
    <div>
      <Header />
      <div className="nav">
        <div className="faculty_profile_icon" onClick={() => setOpen(!open)}>
          <img id="profile_icon" src={Profileicon} alt="Profile Icon" />
        </div>
      </div>

      {open && (
        <div className="faculty_profile_details">
          <div className="faculty-profile">
            <p className="field_background">{Headofthedepartment.firstName} {Headofthedepartment.lastName}</p>
            <p className="field_background">{Headofthedepartment.discipline}</p>
            <p className="field_background">{Headofthedepartment.email}</p>
            <p className="field_background">{Headofthedepartment.mobileNumber}</p>
            <Allbuttons value="Logout" image={Logout} target={handleLogoutClick} />
          </div>
        </div>
      )}

      <button onClick={gotostudentinfohod}>Student</button>
      <button onClick={gotofacultyinfohod}>Faculty</button>

     

      <div className="Headofthedepartmentdashboard_footer">
        <Footer />
      </div>
    </div>
  );
}

export default Headofthedepartmentdashboard;