import React, { useEffect, useState } from 'react';
import './Facultydashboard.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Allbuttons from '../../Components/Allbuttons/Allbuttons.jsx';
import Profileicon from '../../Assets/profile.svg';
import View from '../../Assets/eyewhite.svg';
import Logout from '../../Assets/logout.svg';
import axios from 'axios';

// Modal Component
const Modal = ({ student, onClose }) => {
  const [activeSection, setActiveSection] = useState("personal");
  
  useEffect(() => {
    // Reset activeSection to "personal" when the student prop changes
    if (!student) {
      setActiveSection("personal");
    }
  }, [student]);
  if (!student) return null;

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const getLinkStyle = (section) => {
    return activeSection === section
      ? { backgroundColor: "#007bff", color: "#fff" }
      : {};
  };

  return (
    <div className="modal">
      <div className="modal_content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>{student.firstName} Details</h3>
        <div className="modal_sections">
          <div className="modal_sidebar">
            <ul className="model_sidebar_items">
              <li
                className="profile_links"
                style={getLinkStyle("personal")}
                onClick={() => handleSectionClick("personal")}
              >
                Personal Details
              </li>
              <li
                className="profile_links"
                style={getLinkStyle("communication")}
                onClick={() => handleSectionClick("communication")}
              >
                Communication Details
              </li>
              <li
                className="profile_links"
                style={getLinkStyle("bank")}
                onClick={() => handleSectionClick("bank")}
              >
                Bank Details
              </li>
              <li
                className="profile_links"
                style={getLinkStyle("education")}
                onClick={() => handleSectionClick("education")}
              >
                Educational Details
              </li>
              <li
                className="profile_links"
                style={getLinkStyle("academic")}
                onClick={() => handleSectionClick("academic")}
              >
                Academic Details
              </li>
             
            </ul>
          </div>
          <div className="modal_content_area">
            {activeSection === "personal" && (
              <div className="student_detail_section">
                <table className="student_detail_table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Name:</strong>
                      </td>
                      <td>
                        {student.firstName} {student.lastName}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Register No:</strong>
                      </td>
                      <td>{student.registerNo}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Email ID:</strong>
                      </td>
                      <td>{student.emailid}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Date of Birth:</strong>
                      </td>
                      <td>{student.dateOfBirth}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Gender:</strong>
                      </td>
                      <td>{student.gender}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Aadhar Number:</strong>
                      </td>
                      <td>{student.aadharNumber}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Nationality:</strong>
                      </td>
                      <td>{student.nationality}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Religion:</strong>
                      </td>
                      <td>{student.religion}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Community:</strong>
                      </td>
                      <td>{student.community}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Caste:</strong>
                      </td>
                      <td>{student.caste}</td>
                    </tr>
                    {/* Add more personal details fields */}
                  </tbody>
                </table>
              </div>
            )}
            {activeSection === "communication" && (
              <div className="student_detail_section">
                <table className="student_detail_table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Mobile Number:</strong>
                      </td>
                      <td>{student.mobileNumber}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Email ID:</strong>
                      </td>
                      <td>{student.emailid}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Residential Address:</strong>
                      </td>
                      <td>{student.residentialAddress}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Communication Address:</strong>
                      </td>
                      <td>{student.communicationAddress}</td>
                    </tr>
                    {/* Add more communication details fields */}
                  </tbody>
                </table>
              </div>
            )}
            {activeSection === "bank" && (
              <div className="student_detail_section">
                <table className="student_detail_table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Bank Name:</strong>
                      </td>
                      <td>{student.bankName}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>IFSC Code:</strong>
                      </td>
                      <td>{student.ifscCode}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Branch Name:</strong>
                      </td>
                      <td>{student.branchName}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Account Number:</strong>
                      </td>
                      <td>{student.accountNumber}</td>
                    </tr>
                    {/* Add more bank details fields */}
                  </tbody>
                </table>
              </div>
            )}
            {activeSection === "education" && (
              <div className="student_detail_section">
                <table className="student_detail_table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>SSLC:</strong>
                      </td>
                      <td>{student.sslc}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>HSC 1 Year:</strong>
                      </td>
                      <td>{student.hsc1Year || "NA"}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>HSC 2 Year:</strong>
                      </td>
                      <td>{student.hsc2Year || "NA"}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Diploma:</strong>
                      </td>
                      <td>{student.diploma || "NA"}</td>
                    </tr>
                    {/* Add more educational details fields */}
                  </tbody>
                </table>
              </div>
            )}
            {activeSection === "academic" && (
              <div className="student_detail_section">
                <table className="student_detail_table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>EMIS Number:</strong>
                      </td>
                      <td>{student.emisNumber}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Register Number:</strong>
                      </td>
                      <td>{student.registerNo}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Programme:</strong>
                      </td>
                      <td>{student.programme}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Discipline:</strong>
                      </td>
                      <td>{student.discipline}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Academic Year:</strong>
                      </td>
                      <td>{student.academicYear}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Semester:</strong>
                      </td>
                      <td>{student.semester}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>ABC ID:</strong>
                      </td>
                      <td>{student.abcId}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>UMIS ID:</strong>
                      </td>
                      <td>{student.umisId}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Date of Admission:</strong>
                      </td>
                      <td>{student.dateOfAdmission}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Course Joined Date:</strong>
                      </td>
                      <td>{student.courseJoinedDate}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Course Type:</strong>
                      </td>
                      <td>{student.courseType}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Regulation:</strong>
                      </td>
                      <td>{student.regulation}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Fast Track:</strong>
                      </td>
                      <td>{student.fastTrack}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>CGPA:</strong>
                      </td>
                      <td>{student.cgpa}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Student Status:</strong>
                      </td>
                      <td>{student.studentStatus}</td>
                    </tr>
                    {/* Add more academic details fields */}
                  </tbody>
                </table>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};








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
        const response = await axios.get(`http://localhost:8080/api/faculty/${facultyId}`);
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

      const response = await axios.get(`http://localhost:8080/api/faculty/filter?${queryParams.toString()}`);
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