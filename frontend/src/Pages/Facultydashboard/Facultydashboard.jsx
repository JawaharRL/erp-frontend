import React, { useEffect, useState } from 'react';
import './Facultydashboard.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Modal from '../../Components/Modal/Modal.jsx';
import Allbuttons from '../../Components/Allbuttons/Allbuttons.jsx';
import Profileicon from '../../Assets/profile.svg';
import View from '../../Assets/eyewhite.svg';
import Logout from '../../Assets/logout.svg';
import axios from 'axios';


function Facultydashboard() {
  const [faculty, setFaculty] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [openProfile, setOpenProfile] = useState(false); // State for faculty profile
  const [openModal, setOpenModal] = useState(false); // State for student details modal
  const location = useLocation();
  const navigate = useNavigate();
  const facultyId = location.state.userId;

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await axios.get(`/api/faculty/${facultyId}`);
        console.log('Response data:', response.data);
        setFaculty(response.data);
      } catch (error) {
        console.error('Error fetching faculty:', error);
      }
    };

    fetchFaculty();
  }, [facultyId]);

  const handleLogoutClick = () => {
    navigate('/login-page');
  };

  const handleItemClick = async (className, batchYear) => {
    try {
      const queryParams = new URLSearchParams({
        email: facultyId,
        className: className,
        batchYear: batchYear,
      });

      const response = await axios.get(`/api/faculty/filter?${queryParams.toString()}`);
      setFaculty(response.data);
      console.log('Response data:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleViewClick = (student) => {
    setSelectedStudent(student);
    setOpenModal(true); // Open the modal
    setOpenProfile(false); // Close the faculty profile if it's open
  };

  const closeModal = () => {
    setOpenModal(false); // Close the modal
    setSelectedStudent(null); // Reset selected student
  };

  const toggleProfile = () => {
    setOpenProfile(!openProfile);
    setOpenModal(false); // Close the modal if profile is opened
  };

  if (!faculty) {
    return <p>Loading faculty data...</p>;
  }

  return (
    <div>
      <Header />
      <div className="nav">
        <div className="faculty_profile_icon" onClick={toggleProfile}>
          <img id="profile_icon" src={Profileicon} alt="Profile Icon" />
        </div>
      </div>
      {openProfile && (
        <div className="faculty_profile_details">
          <div className="faculty-profile">
            <p className="field_background">{faculty.firstName} {faculty.lastName}</p>
            <p className="field_background">{faculty.discipline}</p>
            <p className="field_background">{faculty.email}</p>
            <p className="field_background">{faculty.mobileNumber}</p>
            <Allbuttons value="Logout" image={Logout} target={handleLogoutClick} />
          </div>
        </div>
      )}

      <div className="faculty_dashboard_container">
        <div className="profile-links">
          <ul>
            <li className="profile_links" onClick={() => handleItemClick(faculty.discipline, faculty.handlingBatch)}>
              {faculty.discipline} ({faculty.handlingBatch})
            </li>
            {faculty.handlingClass && faculty.handlingClass.split(',').map((item, index) => {
              const [className, batchYear] = item.trim().split('#');
              return (
                <li 
                  key={index} 
                  className="profile_links" 
                  onClick={() => handleItemClick(className, batchYear)}
                >
                  {className} ({batchYear})
                </li>
              );
            })}
          </ul>
        </div>

        <div className="profile_name">
          {faculty.students && faculty.students.length > 0 ? (
            <table className="student_table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Register No</th>
                  <th>Email ID</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {faculty.students.map((student, index) => (
                  <tr key={student.registerNo}>
                    <td>{index + 1}</td>
                    <td>{student.firstName} {student.lastName}</td>
                    <td>{student.registerNo}</td>
                    <td>{student.emailid}</td>
                    <td>
                      <Allbuttons value="View" image={View} target={() => handleViewClick(student)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No students available</p>
          )}
        </div>
      </div>

      {/* Modal for displaying student details */}
      <Modal student={selectedStudent} onClose={closeModal} />

      <div id="one">
        <Footer />
      </div>
    </div>
  );
}

export default Facultydashboard;