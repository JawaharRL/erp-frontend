import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    return <div>Error: {error ? error.message : `Student data not found`}</div>;
  }

  const { studentDto, profilePhotoContent, sslcFileContent, hsc1YearFileContent, hsc2YearFileContent, diplomaFileContent } = studentWithFiles;

  return (
    <div>
      <h1>Student Details</h1>
      <p>Name: {studentDto.first_Name} {studentDto.last_Name}</p>
      <p>Date of Birth: {studentDto.date_Of_Birth}</p>
      <p>Gender: {studentDto.gender}</p>
      
      {/* Display Academic Details */}
      <h2>Academic Details</h2>
      <p>Register Number: {academicDetails.register_No}</p>
      <p>Programme: {academicDetails.programme}</p>
      <p>Discipline: {academicDetails.discipline}</p>
      <p>Academic Year: {academicDetails.academic_Year}</p>
      <p>Semester: {academicDetails.semester}</p>
      
      {/* Display Profile Photo */}
      <h2>Profile Photo</h2>
      {profilePhotoContent && <img src={`data:image/jpeg;base64,${profilePhotoContent}`} alt="Profile" />}
      
      {/* Display SSLC File */}
      <h2>SSLC File</h2>
      {sslcFileContent && <a href={`data:image/jpeg;base64,${sslcFileContent}`} download="SSLC_File.jpeg">Download SSLC File</a>}
      {/* Render SSLC file content here */}
      
      {/* Display HSC 1 Year File */}
      <h2>HSC 1 Year File</h2>
      {hsc1YearFileContent && <a href={`data:image/jpeg;base64,${hsc1YearFileContent}`} download="HSC_1_Year_File.jpeg">Download HSC 1 Year File</a>}
      {/* Render HSC 1 Year file content here */}
      
      {/* Display HSC 2 Year File */}
      <h2>HSC 2 Year File</h2>
      {hsc2YearFileContent && <a href={`data:image/jpeg;base64,${hsc2YearFileContent}`} download="HSC_2_Year_File.jpeg">Download HSC 2 Year File</a>}
      {/* Render HSC 2 Year file content here */}
      
      {/* Display Diploma File */}
      <h2>Diploma File</h2>
      {diplomaFileContent && <a href={`data:image/jpeg;base64,${diplomaFileContent}`} download="Diploma_File.jpeg">Download Diploma File</a>}
      {/* Render Diploma file content here */}
    </div>
  );
}

export default StudentDisplay;