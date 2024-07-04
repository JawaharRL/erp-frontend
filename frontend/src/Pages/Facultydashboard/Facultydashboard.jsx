import React, { useEffect, useState } from 'react';
import './Facultydashboard.css';
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Allbuttons from "../../Components/Allbuttons/Allbuttons.jsx";
import Profileicon from "../../Assets/profile.svg";
import axios from 'axios';

function Facultydashboard() {
  const [faculty, setFaculty] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const studentId = location.state.userId
        const response = await axios.get(`http://localhost:8080/api/faculty/${studentId}`);
        console.log("Response data:", response.data); // Check if data is received
        setFaculty(response.data);
      } catch (error) {
        console.error("Error fetching faculties:", error);
      }
    };

    fetchFaculties();
  }, []);

  return (
    <div>
      <Header />
      <div className="nav">
        <Allbuttons
          className="profile-button"
          target={""}
          value="Profile"
          image={Profileicon}
        />
      </div>
      <div className="faculty_dashboard_container">
        <div className="profile-links">
          <ul>
            <li className="profile_links">CSE III Year</li>
            {/* <li className="profile_links" >Requsts</li> */}
          </ul>
        </div>
        {/* {faculties.length > 0 ? (
          faculties.map((faculty) => (
            <div key={faculty.id} className="profile_name">
              <p>Name: </p>
              <div className="field_bckground">
                <p className="field_bckground">{faculty.name}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading faculties...</p>
        )} */}
         <div className="profile_name">
              <p>Name </p>
              <p className="field_bckground">
                {faculty.name} 
              </p>
            </div>
      </div>
      <Footer />
    </div>
  );
}

export default Facultydashboard;
