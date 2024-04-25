import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profilepage.css';
import { useLocation } from 'react-router-dom'
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Allbuttons from "../../Components/Allbuttons/Allbuttons.jsx";
import Profileicon from '../../Assets/profile.svg';

function StudentDisplay() {

  const location =useLocation();
  console.log(location)

  const [studentWithFiles, setStudentWithFiles] = useState(null);
  const [academicDetails, setAcademicDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displaySection, setDisplaySection] = useState("personal"); 

    const getLinkStyle = (section) => {
      return displaySection === section ? { borderRadius: '6px',
      opacity: '1',padding:'5px',
      background: 'rgba(255, 255, 255, 0.4)',
      boxsizing: 'border-box',
      border: '1px solid rgba(255, 255, 255, 0.68)',
      backdropfilter:' blur(5px)',  transition: 'all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    } : {};

    };
  useEffect(() => {
    const fetchStudentWithFiles = async () => {
      try {
        const studentId = location.state.emailid; // Replace with the ID of the student you want to fetch
        const response = await axios.get(`http://localhost:8080/api/student/${studentId}`);
        setStudentWithFiles(response.data);

        const academicResponse = await axios.get(`http://localhost:8080/api/academics/${studentId}`);
        setAcademicDetails(academicResponse.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchStudentWithFiles();
  }, []);

  const handleSectionClick = (section) => {
    setDisplaySection(section);
    //setSelectedSection(section);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !studentWithFiles) {
    return <div>Error: {error ? error.message : "Student data not found"}</div>;
  }

  const { studentDto, profilePhotoContent, sslcFileContent, hsc1YearFileContent, hsc2YearFileContent, diplomaFileContent } = studentWithFiles;
  const { register_No, programme, discipline, academic_Year, semester } = academicDetails;

  return (
    <div>
      <Header />
      <div className="nav">
        <Allbuttons className="profile-button" target={""} value="Profile" image={Profileicon} />
      </div>

      <div className="profile">
        <div className="profile-links">
          <ul>
            <li className="profile_links" style={getLinkStyle('personal')}  onClick={() => handleSectionClick("personal")}>Personal Details</li>
            <li className="profile_links" style={getLinkStyle('communication')}  onClick={() => handleSectionClick("communication")}>Communication Details</li>
            <li className="profile_links" style={getLinkStyle('bank')}  onClick={() => handleSectionClick("bank")}>Bank Details</li>
            <li className="profile_links" style={getLinkStyle('education')}  onClick={() => handleSectionClick("education")}>Educational Details</li>
            <li className="profile_links" style={getLinkStyle('academic')}  onClick={() => handleSectionClick("academic")}>Academic Details</li>
          </ul>
        </div>

        {displaySection === "personal" && (
          <div className="profile-personal-display">
            <div className='profile_name'>
          <p>Name </p>
          <p className="field_bckground">{studentDto.first_Name} {studentDto.last_Name}</p>
        </div>

        <div className='profile_date_of_birth'>
          <p>Date of Birth</p>
          <p className="field_bckground">{studentDto.date_Of_Birth}</p>
        </div>
        <div className='profile_profile_photo'>
        
          {profilePhotoContent && <img id="user_profile_photo" src={`data:image/jpeg;base64,${profilePhotoContent}`} alt="Profile" />}
        </div>
        <div className='profile_gender'>
          <p>Gender</p>
          <p className="field_bckground">{studentDto.gender}</p>
        </div>
        <div className='profile_aadhar_number'>
          <p>Aadhar Number</p>
          <p className="field_bckground">{studentDto.aadhar_Number}</p>
        </div>
        <div className='profile_nationality'>
          <p>Nationality</p>
          <p className="field_bckground"> {studentDto.nationality}</p>
        </div>
        <div className='profile_religion'>
          <p>Religion</p>
          <p className="field_bckground">  {studentDto.religion}</p>
        </div>
        <div className='profile_community'>
          <p>Community</p>
          <p className="field_bckground"> {studentDto.community}</p>
        </div>
        <div className='profile_caste'>
          <p>Caste</p>
          <p className="field_bckground">  {studentDto.caste}</p>
        </div>
        <div className='profile_fathers_name'>
          <p>Father's Name</p>
          <p className="field_bckground"> {studentDto.fathers_Name}</p>
        </div>
        <div className='profile_fathers_occupation'>
          <p>Father's Occupation</p>
          <p className="field_bckground"> {studentDto.fathers_Occupation}</p>
        </div>
        <div className='profile_fathers_mobile_number'>
          <p>Father's Mobile Number</p>
          <p className="field_bckground"> {studentDto.fathers_Mobile_Number}</p>
        </div>
        <div className='profile_mothers_name'>
          <p>Mother's Name</p>
          <p className="field_bckground"> {studentDto.mothers_Name}</p>
        </div>
        <div className='profile_mothers_occupation'>
          <p>Mother's Occupation</p>
          <p className="field_bckground">  {studentDto.mothers_Occupation}</p>
        </div>
        <div className='profile_mothers_mobile_number'>
          <p>Mother's Mobile Number</p>
          <p className="field_bckground"> {studentDto.mothers_Mobile_Number}</p>
        </div>
        <div className='profile_guardians_name'>
          <p>Guardian's Name</p>
          <p className="field_bckground"> {studentDto.guardians_Name}</p>
        </div>
        <div className='profile_guardians_occupation'>
          <p>Guardian's Occupation</p>
          <p className="field_bckground">  {studentDto.guardians_Occupation}</p>
        </div>
        <div className='profile_guardian_mobile_number'>
          <p>Guardian's Mobile Number</p>
          <p className="field_bckground">  {studentDto.guardians_Mobile_Number}</p>
        </div>
        <div className='profile_parents_status'>
          <p>Parents Status</p>
          <p className="field_bckground">   {studentDto.parents_Status}</p>
        </div>
        <div className='profile_income'>
          <p>Income</p>
          <p className="field_bckground">  {studentDto.income}</p>
        </div>
        <div className='profile_marital_status'>
          <p>Marital Status</p>
          <p className="field_bckground">  {studentDto.marital_Status}</p>
        </div>

          </div>
        )}

        {displaySection === "communication" && (
          <div className="profile-communication-display">
            <div className='profile_mobile_number'>
        <p>Mobile Number</p>
        <p className="field_bckground"> {studentDto.mobile_Number}</p>
      </div>
      <div className='profile_email_id'>
        <p>Email ID</p>
        <p className="field_bckground"> {studentDto.email_Id}</p>
      </div>
      <div className='profile_residential_address'>
        <p>Residential Address</p>
        <p className="field_bckground"> {studentDto.residential_Address}</p>
      </div>
      <div className='profile_communication_address'>
        <p>Communication Address</p>
        <p className="field_bckground">{studentDto.communication_Address}</p>
      </div>
      <div className='profile_hosteller'>
        <p>Hosteller</p>
        <p className="field_bckground">{studentDto.hosteller}</p>
      </div>
      <div className='profile_hostel_type'>
        <p>Hostel Type</p>
        <p className="field_bckground">{studentDto.hostel_Type}</p>
      </div>
            
          </div>
        )}

        {displaySection === "bank" && (
          <div className="profile-bank-display">
             <div className='profile_bank_name'>
    <p>Bank Name</p>
    <p className="field_bckground">  {studentDto.bank_Name}</p>
   </div>

   <div className='profile_ifsc_code'>
    <p>IFSC Code</p>
    <p className="field_bckground"> {studentDto.ifsc_Code}</p>
   </div>

   <div className='profile_branch_name'>
    <p>Branch Name</p>
    <p className="field_bckground">{studentDto.branch_Name}</p>
   </div>

   <div className='profile_account_number'>
    <p>Account Number</p>
    <p className="field_bckground"> {studentDto.account_Number}</p>
   </div>

            
          </div>
        )}

        {displaySection === "education" && (
          <div className="profile-education-display">
            <div className='profile_sslc'>
        <p>SSLC</p>
        <p className="field_bckground">{studentDto.sslc}</p>
            <div className="file_download">       
               {sslcFileContent && <a className="marksheet_download_links"  href={`data:image/jpeg;base64,${sslcFileContent}`} download="SSLC_File.jpeg">Download SSLC File</a>}
            </div>
      </div>
      <div className='profile_hsc_1_year'>
        <p>HSC 1 Year</p>
        <p className="field_bckground">{studentDto.hsc_1_Year}</p>
        <div  className="file_download">
        {hsc1YearFileContent && <a className="marksheet_download_links" href={`data:image/jpeg;base64,${hsc1YearFileContent}`} download="HSC_1_Year_File.jpeg">Download HSC 1 Year File</a>}
        </div>
      </div>
      <div className='profile_hsc_2_year'>
        <p>HSC 2 Year</p>
        <p className="field_bckground">{studentDto.hsc_2_Year}</p>
<div  className="file_download">
{hsc2YearFileContent && <a className="marksheet_download_links" href={`data:image/jpeg;base64,${hsc2YearFileContent}`} download="HSC_2_Year_File.jpeg">Download HSC 2 Year File</a>}
</div>
      </div>
      <div className='profile_diploma'>
        <p>Diploma</p>
        <p className="field_bckground">{studentDto.diploma}</p>
        <div  className="file_download">
        {diplomaFileContent && <a className="marksheet_download_links" href={`data:image/jpeg;base64,${diplomaFileContent}`} download="Diploma_File.jpeg">Download Diploma File</a>}
        </div>
      </div>
      <div className='profile_emis_number'>
        <p>EMIS Number</p>
        <p className="field_bckground">{studentDto.emis_Number}</p>
      </div>
      <div className='profile_first_graduate'>
        <p>First Graduate</p>
        <p className="field_bckground">{studentDto.first_Graduate}</p>
      </div>
      <div className='profile_special_category'>
        <p>Special Category</p>
        <p className="field_bckground">{studentDto.special_Category}</p>
      </div>
            
          </div>
        )}

        {displaySection === "academic" && (
          <div className="profile-academic-display">
            <div className='profile_register_number'>
        <p>Register Number </p>
        <p className="field_bckground">{register_No}</p>
      </div>

      <div className='profile_programme'>
        <p>Programme</p>
        <p className="field_bckground">{programme}</p>
      </div>
      <div className='profile_discipline'>
        <p>Discipline</p>
        <p className="field_bckground">{discipline}</p>
      </div>
      <div className='profile_academic_year'>
        <p>Academic Year</p>
        <p className="field_bckground"> {academic_Year}</p>
      </div>
      <div className='profile_semester'>
        <p>Semester</p>
        <p className="field_bckground"> {semester}</p>
      </div>
      <div className='profile_abc_id'>
        <p>ABC ID</p>
        <p className="field_bckground">  {academicDetails.abc_Id}</p>
      </div>
      <div className='profile_umis_id'>
        <p>UMIS ID</p>
        <p className="field_bckground"> {academicDetails.umis_Id}</p>
      </div>
      <div className='profile_date_of_admission'>
        <p>Date of Admission</p>
        <p className="field_bckground"> {academicDetails.date_Of_Admission}</p>
      </div>
      <div className='profile_course_joined_date'>
        <p>Course Joined Date</p>
        <p className="field_bckground">{academicDetails.course_Joined_Date}</p>
      </div>
      <div className='profile_course_type'>
        <p>Course Type</p>
        <p className="field_bckground">  {academicDetails.course_Type}</p>
      </div>
      <div className='profile__regulation'>
        <p>Regulation</p>
        <p className="field_bckground">  {academicDetails.regulation}</p>
      </div>
      <div className='profile_fast_track'>
        <p>Fast Track</p>
        <p className="field_bckground"> {academicDetails.fast_Track}</p>
      </div>
      <div className='profile_cgpa'>
        <p>CGPA</p>
        <p className="field_bckground">  {academicDetails.cgpa}</p>
      </div>
      <div className='profile_student_status'>
        <p>Student Status</p>
        <p className="field_bckground"> {academicDetails.student_Status}</p>
      </div>

            
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default StudentDisplay;
