import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profilepage.css";
import { useLocation,useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Allbuttons from "../../Components/Allbuttons/Allbuttons.jsx";
import Profileicon from "../../Assets/profile.svg";
import Logout from '../../Assets/logout.svg';

function StudentDisplay() {

  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  const [studentWithFiles, setStudentWithFiles] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  const [displaySection, setDisplaySection] = useState("personal");
  const handleLogoutClick = () => {
    navigate('/login-page');
  };
  const handleBonafideClick = () => {
    navigate('/bonafide-page');
  };
  const getLinkStyle = (section) => {
    return displaySection === section
      ? {
        borderRadius: "6px",
        opacity: "1",
        padding: "5px",
        background: "rgba(255, 255, 255, 0.4)",
        boxsizing: "border-box",
        border: "1px solid rgba(255, 255, 255, 0.68)",
        backdropfilter: " blur(5px)",
        transition: "all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      }
      : {};
  };
  const getMimeType = (base64) => {
    if (base64.startsWith("/9j/")) {
      return "image/jpeg"; // JPEG image
    } else if (base64.startsWith("iVBORw0KGgo")) {
      return "image/png"; // PNG image
    } else if (base64.startsWith("JVBERi0")) {
      return "application/pdf"; // PDF document
    }
    return "";
  };

  const getExtension = (mimeType) => {
    if (mimeType === "image/jpeg") {
      return "jpeg";
    } else if (mimeType === "application/pdf") {
      return "pdf";
    }
    return "";
  };

  useEffect(() => {
    const fetchStudentWithFiles = async () => {
      try {
        const studentId = location.state.userId; 
        console.log(studentId);
        const response = await axios.get(
          `/api/student/${studentId}`
        );
        console.log(response);
        setStudentWithFiles(response.data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchStudentWithFiles();
  }, [location.state.userId]);

  const handleSectionClick = (section) => {
    setDisplaySection(section);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !studentWithFiles) {
    return <div>Error: {error ? error.message : "Student data not found"}</div>;
  }
  const profilePhotoMimeType = studentWithFiles.profilePhotoContent
    ? getMimeType(studentWithFiles.profilePhotoContent)
    : "";
  const passbookMimeType = studentWithFiles.passbookcontent
    ? getMimeType(studentWithFiles.passbookcontent)
    : "";
  const sslcMimeType = studentWithFiles.sslcFileContent
    ? getMimeType(studentWithFiles.sslcFileContent)
    : "";
  const hsc1MimeType = studentWithFiles.hsc1YearFileContent
    ? getMimeType(studentWithFiles.hsc1YearFileContent)
    : "";
  const hsc2MimeType = studentWithFiles.hsc2YearFileContent
    ? getMimeType(studentWithFiles.hsc2YearFileContent)
    : "";
  const diplomaMimeType = studentWithFiles.diplomaFileContent
    ? getMimeType(studentWithFiles.diplomaFileContent)
    : "";

  const passbookExtension = getExtension(passbookMimeType);
  const sslcExtension = getExtension(sslcMimeType);
  const hsc1Extension = getExtension(hsc1MimeType);
  const hsc2Extension = getExtension(hsc2MimeType);
  const diplomaExtension = getExtension(diplomaMimeType);

  return (
    <div>
      <Header />
      <div className="nav">

        <button className="bonafide_button" onClick={handleBonafideClick}>Bonafide</button>
        <Allbuttons
          className="profile-button"
          target={""}
          value="Profile"
          image={Profileicon}
        />
      </div>

      <div className="profile">
        <div className="profile-links">
          <ul>
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

          <Allbuttons value="Logout" image={Logout} target={handleLogoutClick}/>
        </div>

        {displaySection === "personal" && (
          <div className="profile-personal-display">
            <div className="profile_name">
              <p>Name </p>
              <p className="field_bckground">
                {studentWithFiles.firstName} {studentWithFiles.lastName}
              </p>
            </div>

            <div className="profile_date_of_birth">
              <p>Date of Birth</p>
              <p className="field_bckground">
                {studentWithFiles.dateOfBirth}
              </p>
            </div>
            <div className="profile_profile_photo">
              {profilePhotoMimeType && studentWithFiles.profilePhotoContent && (
                <img
                  id="user_profile_photo"
                  src={`data:${profilePhotoMimeType};base64,${studentWithFiles.profilePhotoContent}`}
                  alt="Profile"
                />
              )}
            </div>
            <div className="profile_gender">
              <p>Gender</p>
              <p className="field_bckground">{studentWithFiles.gender}</p>
            </div>
            <div className="profile_aadhar_number">
              <p>Aadhar Number</p>
              <p className="field_bckground">
                {studentWithFiles.aadharNumber}
              </p>
            </div>
            <div className="profile_nationality">
              <p>Nationality</p>
              <p className="field_bckground"> {studentWithFiles.nationality}</p>
            </div>
            <div className="profile_religion">
              <p>Religion</p>
              <p className="field_bckground"> {studentWithFiles.religion}</p>
            </div>
            <div className="profile_community">
              <p>Community</p>
              <p className="field_bckground"> {studentWithFiles.community}</p>
            </div>
            <div className="profile_caste">
              <p>Caste</p>
              <p className="field_bckground"> {studentWithFiles.caste}</p>
            </div>
            <div className="profile_fathers_name">
              <p>Father's Name</p>
              <p className="field_bckground">
                {" "}
                {studentWithFiles.fathersName}
              </p>
            </div>
            <div className="profile_fathers_occupation">
              <p>Father's Occupation</p>
              <p className="field_bckground">
                {" "}
                {studentWithFiles.fathersOccupation || "NA" }
              </p>
            </div>
            <div className="profile_fathers_mobile_number">
              <p>Father's Mobile Number</p>
              <p className="field_bckground">
                {" "}
                {studentWithFiles.fathersMobileNumber || "NA" }
              </p>
            </div>
            <div className="profile_mothers_name">
              <p>Mother's Name</p>
              <p className="field_bckground">
                {" "}
                {studentWithFiles.mothersName}
              </p>
            </div>
            <div className="profile_mothers_occupation">
              <p>Mother's Occupation</p>
              <p className="field_bckground">
                {" "}
                {studentWithFiles.mothersOccupation || "NA" }
              </p>
            </div>
            <div className="profile_mothers_mobile_number">
              <p>Mother's Mobile Number</p>
              <p className="field_bckground">
                {" "}
                {studentWithFiles.mothersMobileNumber || "NA" }
              </p>
            </div>
            <div className="profile_guardians_name">
              <p>Guardian's Name</p>
              <p className="field_bckground">
                {" "}
                {studentWithFiles.guardiansName || "NA" }
              </p>
            </div>
            <div className="profile_guardians_occupation">
              <p>Guardian's Occupation</p>
              <p className="field_bckground">
                {" "}
                {studentWithFiles.guardiansOccupation || "NA" }
              </p>
            </div>
            <div className="profile_guardian_mobile_number">
              <p>Guardian's Mobile Number</p>
              <p className="field_bckground">
                {" "}
                {studentWithFiles.guardiansMobileNumber || "NA" }
              </p>
            </div>
            <div className="profile_parents_status">
              <p>Parents Status</p>
              <p className="field_bckground">
                {" "}
                {studentWithFiles.parentsStatus}
              </p>
            </div>
            <div className="profile_income">
              <p>Income</p>
              <p className="field_bckground"> {studentWithFiles.income}</p>
            </div>
            <div className="profile_marital_status">
              <p>Marital Status</p>
              <p className="field_bckground">
                {" "}
                {studentWithFiles.maritalStatus}
              </p>
            </div>
          </div>
        )}

        {displaySection === "communication" && (
          <div className="profile-communication-display">
            <div className="profile_mobile_number">
              <p>Mobile Number</p>
              <p className="field_bckground">
                {" "}
                {studentWithFiles.mobileNumber}
              </p>
            </div>
            <div className="profile_email_id">
              <p>Email ID</p>
              <p className="field_bckground"> {studentWithFiles.emailid}</p>
            </div>
            <div className="profile_residential_address">
              <p>Residential Address</p>
              <p className="field_bckground">
                {" "}
                {studentWithFiles.residentialAddress}
              </p>
            </div>
            <div className="profile_communication_address">
              <p>Communication Address</p>
              <p className="field_bckground">
                {studentWithFiles.communicationAddress}
              </p>
            </div>
            <div className="profile_hosteller">
              <p>Hosteller</p>
              <p className="field_bckground">{studentWithFiles.hosteller}</p>
            </div>
            <div className="profile_hostel_type">
              <p>Hostel Type</p>
              <p className="field_bckground">{studentWithFiles.hostelType}</p>
            </div>
          </div>
        )}

        {displaySection === "bank" && (
          <div className="profile-bank-display">
            <div className="profile_bank_name">
              <p>Bank Name</p>
              <p className="field_bckground"> {studentWithFiles.bankName}</p>
            </div>

            <div className="profile_ifsc_code">
              <p>IFSC Code</p>
              <p className="field_bckground"> {studentWithFiles.ifscCode}</p>
            </div>

            <div className="profile_branch_name">
              <p>Branch Name</p>
              <p className="field_bckground">{studentWithFiles.branchName}</p>
            </div>

            <div className="profile_account_number">
              <p>Account Number</p>
              <p className="field_bckground">
                {" "}
                {studentWithFiles.accountNumber}
              </p>
            </div>
            <div className="file_download">
              {passbookMimeType && studentWithFiles.passbookcontent && (
                <a
                  className="marksheet_download_links"
                  href={`data:${passbookMimeType};base64,${studentWithFiles.passbookcontent}`}
                  download={`passbook.${passbookExtension}`}
                >
                  Download Passbook
                </a>
              )}
            </div>
          </div>
        )}

        {displaySection === "education" && (
          <div className="profile-education-display">
            <div className="profile_sslc">
              <p>SSLC</p>
              <p className="field_bckground">{studentWithFiles.sslc}</p>
              <div className="file_download">
                {sslcMimeType && studentWithFiles.sslcFileContent && (
                  <a
                    className="marksheet_download_links"
                    href={`data:${sslcMimeType};base64,${studentWithFiles.sslcFileContent}`}
                    download={`sslcfile.${sslcExtension}`}
                  >
                    Download SSLC File
                  </a>
                )}
              </div>
            </div>
            <div className="profile_hsc_1_year">
              <p>HSC 1 Year</p>
              <p className="field_bckground">{studentWithFiles.hsc1Year || "NA" }</p>
              <div className="file_download">
                {hsc1MimeType && studentWithFiles.hsc1YearFileContent && (
                  <a
                    className="marksheet_download_links"
                    href={`data:${hsc1MimeType};base64,${studentWithFiles.hsc1YearFileContent}`}
                    download={`hsc1yearfile.${hsc1Extension}`}
                  >
                    Download HSC 1 Year File
                  </a>
                )}
              </div>
            </div>
            <div className="profile_hsc_2_year">
              <p>HSC 2 Year</p>
              <p className="field_bckground">{studentWithFiles.hsc2Year || "NA" }</p>
              <div className="file_download">
                {hsc2MimeType && studentWithFiles.hsc2YearFileContent && (
                  <a
                    className="marksheet_download_links"
                    href={`data:${hsc2MimeType};base64,${studentWithFiles.hsc2YearFileContent}`}
                    download={`hsc2yearfile.${hsc2Extension}`}
                  >
                    Download HSC 2 Year File
                  </a>
                )}
              </div>
            </div>
            <div className="profile_diploma">
              <p>Diploma</p>
              <p className="field_bckground">{studentWithFiles.diploma || "NA" }</p>
              <div className="file_download">
                {diplomaMimeType && studentWithFiles.diplomaFileContent && (
                  <a
                    className="marksheet_download_links"
                    href={`data:${diplomaMimeType};base64,${studentWithFiles.diplomaFileContent}`}
                    download={`diploma_File.${diplomaExtension}`}
                  >
                    Download Diploma File
                  </a>
                )}
              </div>
            </div>
            <div className="profile_emis_number">
              <p>EMIS Number</p>
              <p className="field_bckground">{studentWithFiles.emisNumber}</p>
            </div>
            <div className="profile_first_graduate">
              <p>First Graduate</p>
              <p className="field_bckground">
                {studentWithFiles.firstGraduate}
              </p>
            </div>
            <div className="profile_special_category">
              <p>Special Category</p>
              <p className="field_bckground">
                {studentWithFiles.specialCategory}
              </p>
            </div>
          </div>
        )}

        {displaySection === "academic" && (
          <div className="profile-academic-display">
            <div className="profile_register_number">
              <p>Register Number </p>
              <p className="field_bckground">{studentWithFiles.registerNo}</p>
            </div>

            <div className="profile_programme">
              <p>Programme</p>
              <p className="field_bckground">{studentWithFiles.programme}</p>
            </div>
            <div className="profile_discipline">
              <p>Discipline</p>
              <p className="field_bckground">{studentWithFiles.discipline}</p>
            </div>
            <div className="profile_academic_year">
              <p>Academic Year</p>
              <p className="field_bckground">
                {" "}
                {studentWithFiles.academicYear}
              </p>
            </div>
            <div className="profile_semester">
              <p>Semester</p>
              <p className="field_bckground"> {studentWithFiles.semester}</p>
            </div>
            <div className="profile_abc_id">
              <p>ABC ID</p>
              <p className="field_bckground"> {studentWithFiles.abcId}</p>
            </div>
            <div className="profile_umis_id">
              <p>UMIS ID</p>
              <p className="field_bckground"> {studentWithFiles.umisId}</p>
            </div>
            <div className="profile_date_of_admission">
              <p>Date of Admission</p>
              <p className="field_bckground">
                {" "}
                {studentWithFiles.dateOfAdmission}
              </p>
            </div>
            <div className="profile_course_joined_date">
              <p>Course Joined Date</p>
              <p className="field_bckground">
                {studentWithFiles.courseJoinedDate}
              </p>
            </div>
            <div className="profile_course_type">
              <p>Course Type</p>
              <p className="field_bckground"> {studentWithFiles.courseType}</p>
            </div>
            <div className="profile__regulation">
              <p>Regulation</p>
              <p className="field_bckground"> {studentWithFiles.regulation}</p>
            </div>
            <div className="profile_fast_track">
              <p>Fast Track</p>
              <p className="field_bckground"> {studentWithFiles.fastTrack}</p>
            </div>
            <div className="profile_cgpa">
              <p>CGPA</p>
              <p className="field_bckground"> {studentWithFiles.cgpa}</p>
            </div>
            <div className="profile_student_status">
              <p>Student Status</p>
              <p className="field_bckground">
                {" "}
                {studentWithFiles.studentStatus}
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default StudentDisplay;
