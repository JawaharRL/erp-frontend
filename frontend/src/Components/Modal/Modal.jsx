import React, { useEffect, useState } from 'react';
import './Modal.css';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import { toast } from 'react-toastify'; 

const Modal = ({ student, onClose }) => {
    
    const navigate = useNavigate(); 
    const [activeSection, setActiveSection] = useState("personal");
    
    useEffect(() => {
      
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
    const onSubmit = async () => {
     
      try { 
          const response = await axios.post('http://localhost:8080/api/student', student, { 
              headers: { 'Content-Type': 'multipart/form-data' } 
          }); 
          console.log('Form submitted successfully:', response.data); 
          localStorage.clear();
          toast("Registration Successful"); 
          await new Promise((resolve) => setTimeout(resolve, 1000)); 
          navigate('/login-page'); 
      } catch (error) {
  
        console.error('Error submitting form:', error);
        toast('Something went wrong');
        console.log(error);
  
      }
      onClose();
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
                  //onClick={() => handleSectionClick("personal")}
                >
                  Personal Details
                </li>
                <li
                  className="profile_links"
                  style={getLinkStyle("communication")}
                  //onClick={() => handleSectionClick("communication")}
                >
                  Communication Details
                </li>
                <li
                  className="profile_links"
                  style={getLinkStyle("bank")}
                  //onClick={() => handleSectionClick("bank")}
                >
                  Bank Details
                </li>
                <li
                  className="profile_links"
                  style={getLinkStyle("education")}
                  //onClick={() => handleSectionClick("education")}
                >
                  Educational Details
                </li>
                <li
                  className="profile_links"
                  style={getLinkStyle("academic")}
                  //onClick={() => handleSectionClick("academic")}
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
                          <strong>Blood Group:</strong>
                        </td>
                        <td>{student.bloodGroup}</td>
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
               <button
               className="navigate_buttons"
                id="navigate_buttons_next_educational"
                onClick={() => handleSectionClick("communication")}
              >Next</button>
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
                      <tr>
                        <td>
                          <strong>Hosteller:</strong>
                        </td>
                        <td>{student.hosteller}</td>
                      </tr>
                      {student.hosteller==="Yes" &&(
                        <tr>
                        <td>
                          <strong>Hostel Type:</strong>
                        </td>
                        <td>{student.hostelType}</td>
                      </tr>
                      )}
                      {/* Add more communication details fields */}
                    </tbody>
                  </table>
                  <button
                className="navigate_buttons"
                id="navigate_buttons_previous_educational"
                onClick={() => handleSectionClick("personal")}
              >Previous</button>
               <button
               className="navigate_buttons"
                id="navigate_buttons_next_educational"
                onClick={() => handleSectionClick("bank")}
              >Next</button>
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
                  <button
                className="navigate_buttons"
                id="navigate_buttons_previous_educational"
                onClick={() => handleSectionClick("communication")}
              >Previous</button>
               <button
               className="navigate_buttons"
                id="navigate_buttons_next_educational"
                onClick={() => handleSectionClick("education")}
              >Next</button>
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
                      <tr>
                        <td>
                          <strong>EMIS Number:</strong>
                        </td>
                        <td>{student.emisNumber}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>First Graduate:</strong>
                        </td>
                        <td>{student.firstGraduate || "NA"}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Special Category:</strong>
                        </td>
                        <td>{student.specialCategory}</td>
                      </tr>
                      {/* Add more educational details fields */}
                    </tbody>
                  </table>
                  <button
                className="navigate_buttons"
                id="navigate_buttons_previous_educational"
                onClick={() => handleSectionClick("bank")}
              >Previous</button>
               <button
               className="navigate_buttons"
                id="navigate_buttons_next_educational"
                onClick={() => handleSectionClick("academic")}
              >Next</button>
                </div>
              )}
              {activeSection === "academic" && (
                <div className="student_detail_section">
                  <table className="student_detail_table">
                    <tbody>
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
                  <button
                className="navigate_buttons"
                id="navigate_buttons_previous_educational"
                onClick={() => handleSectionClick("education")}
              >Previous</button>
               <button
               className="navigate_buttons"
                id="navigate_buttons_next_educational"
                onClick={onSubmit}
              >Submit</button>
                </div>
                
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Modal;