import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profilepage.css'
import Header from "../../Components/Header/Header.jsx"
import Allbuttons from "../../Components/Allbuttons/Allbuttons.jsx"
import Profileicon from '../../Assets/profile.svg'


function StudentDisplay() {
  const [studentWithFiles, setStudentWithFiles] = useState(null);
  const [academicDetails, setAcademicDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentWithFiles = async () => {
      try {
        const studentId = "hihello@gmail.com"; // Replace with the ID of the student you want to fetch
        const response = await axios.get(`http://localhost:8080/api/student/${studentId}`);
        //console.log("Student with files response:", response.data);
        setStudentWithFiles(response.data);

        const academicResponse = await axios.get(`http://localhost:8080/api/academics/${studentId}`);
        //console.log("Academic response:", academicResponse.data);
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
      <Header/>
      <div class="nav">
            <Allbuttons className="profile-button" target={""} value="Profile" image={Profileicon}/>
        </div>

   <div className="profile">
   <div className="profile-links">
          <ul>
              <a className="profile_links" href=""><li>Personal Details</li></a>
              <a className="profile_links" href=""><li>Communication Details</li></a>
              <a className="profile_links" href=""><li>Bank Details</li></a>
              <a className="profile_links" href=""><li>Educational Details</li></a>
              <a className="profile_links" href=""><li>Other Details</li></a>
          </ul>
    </div>
  <div className="profile-personal-dislpay">
      
   <div>
      <p>Name </p>
      <p className="field_bckground">{studentDto.first_Name} {studentDto.last_Name}</p>
   </div>

   <div>
      <p>Date of Birth</p>
      <p className="field_bckground">{studentDto.date_Of_Birth}</p>
   </div>
   <div>
      <p>Profile Photo</p>
      {profilePhotoContent && <img src={`data:image/jpeg;base64,${profilePhotoContent}`} alt="Profile" />}
   </div>
   <div>
    <p>Gender</p>
   <p  className="field_bckground">{studentDto.gender}</p>      
   </div>
   <div>
    <p>Aadhar Number</p>
    <p className="field_bckground">{studentDto.aadhar_Number}</p>
   </div>
   <div>
    <p>Nationality</p>
    <p className="field_bckground"> {studentDto.nationality}</p>
   </div>
   <div>
    <p>Religion</p>
    <p className="field_bckground">  {studentDto.religion}</p>
   </div>
   <div>
    <p>Community</p>
    <p className="field_bckground"> {studentDto.community}</p>
   </div>
   <div>
    <p>Caste</p>
    <p className="field_bckground">  {studentDto.caste}</p>
   </div>
   <div>
    <p>Father's Name</p>
    <p className="field_bckground"> {studentDto.fathers_Name}</p>
   </div>
   <div>
    <p>Father's Occupation</p>
    <p className="field_bckground"> {studentDto.fathers_Occupation}</p>
   </div>
   <div>
    <p>Father's Mobile Number</p>
    <p className="field_bckground"> {studentDto.fathers_Mobile_Number}</p>
   </div>
   <div>
    <p>Mother's Name</p>
    <p className="field_bckground"> {studentDto.mothers_Name}</p>
   </div>
   <div>
    <p>Mother's Occupation</p>
    <p className="field_bckground">  {studentDto.mothers_Occupation}</p>
   </div>
   <div>
    <p>Mother's Mobile Number</p>
    <p className="field_bckground"> {studentDto.mothers_Mobile_Number}</p>
   </div>
   <div>
    <p>Guardian's Name</p>
    <p className="field_bckground"> {studentDto.guardians_Name}</p>
   </div>
   <div>
    <p>Guardian's Occupation</p>
    <p className="field_bckground">  {studentDto.guardians_Occupation}</p>
   </div>
   <div>
    <p>Guardian's Mobile Number</p>
    <p className="field_bckground">  {studentDto.guardians_Mobile_Number}</p>
   </div>
   <div>
    <p>Parents Status</p>
    <p className="field_bckground">   {studentDto.parents_Status}</p>
   </div>
   <div>
    <p>Income</p>
    <p className="field_bckground">  {studentDto.income}</p>
   </div>
   <div>
    <p>Marital Status</p>
    <p className="field_bckground">  {studentDto.marital_Status}</p>
   </div>

    </div>
   </div>
   <div className="profile-communication-dislpay">

    <div>
        <p>Mobile Number</p>
          <p className="field_bckground"> {studentDto.mobile_Number}</p>
   </div>
   <div>
        <p>Email ID</p>
          <p className="field_bckground"> {studentDto.email_Id}</p>
   </div>
   <div>
        <p>Residential Address</p>
          <p className="field_bckground"> {studentDto.residential_Address}</p>
   </div>
   <div>
        <p>Communication Address</p>
          <p className="field_bckground">{studentDto.communication_Address}</p>
   </div>
   <div>
        <p>Hosteller</p>
          <p className="field_bckground">{studentDto.hosteller}</p>
   </div>
   <div>
        <p>Hostel Type</p>
          <p className="field_bckground">{studentDto.hostel_Type}</p>
   </div>
  </div>





<div className="profile-bank-display">

  <div>
    <p>Bank Name</p>
    <p className="field_bckground">  {studentDto.bank_Name}</p>
   </div>

   <div>
    <p>IFSC Code</p>
    <p className="field_bckground"> {studentDto.ifsc_Code}</p>
   </div>

   <div>
    <p>Branch Name</p>
    <p className="field_bckground">{studentDto.branch_Name}</p>
   </div>

   <div>
    <p>Account Number</p>
    <p className="field_bckground"> {studentDto.account_Number}</p>
   </div>
</div>

<div className="profile-education-display">
  <div>
        <p>SSLC</p>
          <p className="field_bckground">{studentDto.sslc}</p>
          
   </div>
   <div>
   {sslcFileContent && <a href={`data:image/jpeg;base64,${sslcFileContent}`} download="SSLC_File.jpeg">Download SSLC File</a>}
   </div>
   <div>
        <p>HSC 1 Year</p>
          <p className="field_bckground">{studentDto.hsc_1_Year}</p>
   </div>
   <div>
   {hsc1YearFileContent && <a href={`data:image/jpeg;base64,${hsc1YearFileContent}`} download="HSC_1_Year_File.jpeg">Download HSC 1 Year File</a>}
   </div>
   <div>
        <p>HSC 2 Year</p>
          <p className="field_bckground">{studentDto.hsc_2_Year}</p>
          {hsc2YearFileContent && <a href={`data:image/jpeg;base64,${hsc2YearFileContent}`} download="HSC_2_Year_File.jpeg">Download HSC 2 Year File</a>}
   </div>
   <div>
        <p>Diploma</p>
          <p className="field_bckground">{studentDto.diploma}</p>
          {diplomaFileContent && <a href={`data:image/jpeg;base64,${diplomaFileContent}`} download="Diploma_File.jpeg">Download Diploma File</a>}
   </div>
   <div>
        <p>EMIS Number</p>
          <p className="field_bckground">{studentDto.emis_Number}</p>
   </div>
   <div>
        <p>First Graduate</p>
          <p className="field_bckground">{studentDto.first_Graduate}</p>
   </div>
   <div>
        <p>Special Category</p>
          <p className="field_bckground">{studentDto.special_Category}</p>
   </div>
  </div>
    
<div className="profile-academics-dislpay">
      
   <div>
      <p>Register Number </p>
      <p className="field_bckground">{register_No}</p>
   </div>

   <div>
      <p>Programme</p>
      <p className="field_bckground">{programme}</p>
   </div>
   <div>
    <p>Discipline</p>
   <p  className="field_bckground">{discipline}</p>      
   </div>
   <div>
    <p>Academic Year</p>
    <p className="field_bckground"> {academic_Year}</p>
   </div>
   <div>
    <p>Semester</p>
    <p className="field_bckground"> {semester}</p>
   </div>
   <div>
    <p>ABC ID</p>
    <p className="field_bckground">  {academicDetails.abc_Id}</p>
   </div>
   <div>
    <p>UMIS ID</p>
    <p className="field_bckground"> {academicDetails.umis_Id}</p>
   </div>
   <div>
    <p>Date of Admission</p>
    <p className="field_bckground"> {academicDetails.date_Of_Admission}</p>
   </div>
   <div>
    <p>Course Joined Date</p>
    <p className="field_bckground">{academicDetails.course_Joined_Date}</p>
   </div>
   <div>
    <p>Course Type</p>
    <p className="field_bckground">  {academicDetails.course_Type}</p>
   </div>
   <div>
    <p>Regulation</p>
    <p className="field_bckground">  {academicDetails.regulation}</p>
   </div>
   <div>
    <p>Fast Track</p>
    <p className="field_bckground"> {academicDetails.fast_Track}</p>
   </div>
   <div>
    <p>CGPA</p>
    <p className="field_bckground">  {academicDetails.cgpa}</p>
   </div>
   <div>
    <p>Student Status</p>
    <p className="field_bckground"> {academicDetails.student_Status}</p>
   </div>
  

  </div>
     
     
      
    </div>
  );
}

export default StudentDisplay;