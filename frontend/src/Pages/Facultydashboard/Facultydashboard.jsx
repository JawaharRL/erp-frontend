import React, { useEffect, useState, useCallback } from 'react';
import './Facultydashboard.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Modal from '../../Components/Modal/Modal.jsx';
import Allbuttons from '../../Components/Allbuttons/Allbuttons.jsx';
import Facultyfields from '../../Components/Facultyfields/Facultyfields.jsx';
import Profileicon from '../../Assets/profile.svg';
import View from '../../Assets/eyewhite.svg';
import Add from '../../Assets/add.svg';
import Logout from '../../Assets/logout.svg';
import axios from 'axios';

function Facultydashboard() {
  const [faculty, setFaculty] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [openProfile, setOpenProfile] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openAddClassModal, setOpenAddClassModal] = useState(false);
  const [loading, setLoading] = useState(true); 
  const location = useLocation();
  const navigate = useNavigate();
  const facultyId = location.state.userId;

  const fetchFaculty = useCallback(async () => {
    try {
      const response = await axios.get(`/api/faculty/${facultyId}`);
      setFaculty(response.data);
    } catch (error) {
      console.error('Error fetching faculty:', error);
    } finally {
      setLoading(false); 
    }
  }, [facultyId]); 
  useEffect(() => {
    fetchFaculty();
  }, [fetchFaculty]);

  const handleLogoutClick = () => {
    navigate('/login-page');
  };

  const handleItemClick = useCallback(async (className, batchYear) => {
    try {
      const queryParams = new URLSearchParams({
        email: facultyId,
        className,
        batchYear,
      });

      const response = await axios.get(`/api/faculty/filter?${queryParams.toString()}`);
      setFaculty(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [facultyId]);

  const Card = ({ title, items: [subject, dept, batchYear, semester] }) => (
    <div className="card" onClick={() => handleItemClick(dept, batchYear)}>
      <h3>{title}</h3><br/>
      <div className="class_card_items">
        <ul className='carditem_container'>
          <div className='dept_batch'>
          <li id='dept'>{dept || 'N/A'}</li>
          <li id='batchYear'>{batchYear || 'N/A'}</li>
          </div><br/>
          <div className='sub_sem'>
          <li id='subject'>{subject || 'N/A'}</li>
          <li id='semester'>{semester || 'N/A'}</li>
          </div>
        </ul>
      </div>
    </div>
  );

  const handleViewClick = (student) => {
    setSelectedStudent(student);
    setOpenModal(true);
    setOpenProfile(false);
  };

  const closeModal = () => {
    setOpenModal(false);
    setOpenAddClassModal(false);
    setSelectedStudent(null);
    fetchFaculty();
  };

  const toggleProfile = () => {
    setOpenProfile(!openProfile);
    setOpenModal(false);
  };

  if (loading) {
    return <p>Loading faculty data...</p>;
  }

  if (!faculty) {
    return <p>No faculty data available.</p>;
  }

  // Prepare data for rendering
  const subjectList = faculty.subject ? faculty.subject.split('#') : [];
  const semesterList = faculty.handlingSemester ? faculty.handlingSemester.split('#') : [];
  const deptList = faculty.handlingDept ? faculty.handlingDept.split('#') : [];
  const batchList = faculty.batch ? faculty.batch.split('#') : [];
  
  const maxLength = Math.max(subjectList.length, semesterList.length, deptList.length, batchList.length);

  return (
    <div>
      <Header />
      <div className="nav">
        <div className="class_add_button">
        <Allbuttons image={Add}  value="Add Class" target={() => setOpenAddClassModal(true)} />
        </div>
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

      {openAddClassModal && (
        <Facultyfields email={faculty.email} onClose={closeModal} />
      )}
  
      <div className="card-container">
        {[...Array(maxLength)].map((_, index) => (
          <Card 
            key={index} 
            title={`Class ${index + 1}`} 
            items={[
              subjectList[index] || 'N/A', 
              deptList[index] || 'N/A',
              batchList[index] || 'N/A',
              semesterList[index] || 'N/A',
            ]}
          />
        ))}
      </div>

      <div className="faculty_dashboard_container">



        {faculty.students && faculty.students.length > 0 ? (
          <table className="student_table">
            <thead>
              <tr>
                <th>S.no</th>
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
          <p id='one'>No students available</p>
        )}
      </div>
        {openModal && (
      <Modal student={selectedStudent} onClose={closeModal} />
        )}
        
      <Footer />
    </div>
  );
}

export default Facultydashboard;