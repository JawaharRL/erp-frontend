import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Academicform.css'
import Previouswhite from '../../Assets/Previouswhite.svg'
import Nextwhite from '../../Assets/Nextwhite.svg'
import { useLocation } from 'react-router-dom'
import Formtitle from '../../Components/Formtitle/Formtitle'
import Allfields from '../../Components/Allfields/Allfields';
import Allbuttons from '../../Components/Allbuttons/Allbuttons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Popup from 'reactjs-popup'


function Academicform() {
  const location =useLocation();
  console.log(location)

  const navigate =useNavigate();
  const goToPersonalform = () => {
    navigate('/personal-form');
  };
  const [isOpen, setIsOpen] = useState(false);
 
  // const openModal = () => {
  //   setIsOpen(true);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const formData = new FormData(e.target);
    const url = 'http://localhost:8080/api/academics';

    const data = {
      email_Id :location.state.Uname,
      register_No: formData.get('register_No'),
      programme: formData.get('programme'),
      discipline: formData.get('discipline'),
      admission_Number: formData.get('admission_Number'),
      academic_Year: formData.get('academic_Year'),
      semester: formData.get('semester'),
      abc_Id: formData.get('abc_Id'),
      umis_Id: formData.get('umis_Id'),
      date_Of_Admission: formData.get('date_Of_Admission'),
      course_Joined_Date: formData.get('course_Joined_Date'),
      course_Type: formData.get('course_Type'),
      regulation: formData.get('regulation'),
      fast_Track: formData.get('fast_Track'),
      cgpa:  formData.get('cgpa'),
      student_Status: formData.get('student_Status')
    };
    console.log(data.email_Id);
    try {
      
      const response = await axios.post(url, data);
      console.log(response.data);
      toast("Registration successful");
      setIsOpen(true);
      
      // openModal();
    } catch (error) {
      console.error('Error saving student:', error);
      toast("Registration failed");
    }
    
  };
  const PasswordSubmit = async (e) => {
    e.preventDefault();
   
    const formData = new FormData(e.target);
    const createPassword = formData.get('create_Password');
    const reenterPassword = formData.get('reenter_Password');
    if (createPassword !== reenterPassword) {
      toast("Passwords does not matched");
      return; // Prevent further execution
    }
    const url = 'http://localhost:8080/api/authentication';

    const data = {
      email_Id :location.state.Uname,
      password: createPassword,
      
    };
    console.log(data.email_Id);
    try {
      const response = await axios.post(url, data);
      console.log(response.data);
      toast("Password creation successful");
      await new Promise((resolve) => setTimeout(resolve, 800));
      navigate('/login-page');
      // openModal();
    } catch (error) {
      console.error('Error saving student:', error);
      toast("Password creation failed");
    }
    
  };

  return (
    <div className="registration-background">
    <div className='form-content'>
   <Formtitle></Formtitle>
   </div>
    <br/>
    <form id='registration_form' onSubmit={handleSubmit}>
    <div className="academic-container">
        <div className="reg-no">
        <Allfields fieldtype="text" value="Register_No" inputname="register_No" fieldpattern="[0-9]+" req_flag={true} format={/[^0-9]/g}/>
         {/* <label htmlFor="RegisterNo">RegisterNo</label>
         <input type="text" name="RegisterNo"/> */}
       </div>
       <div className="programme">
       <Allfields fieldtype="text" value="Programme" inputname="programme" fieldpattern="[A-Za-z]+" req_flag={true} format={/[^A-Za-z\s]/g}/>
         {/* <label htmlFor="Programme">Programme</label>
         <input type="text" name="Programme" /> */}
       </div>
       <div className="discipline">
       <Allfields fieldtype="text" value="Discipline" inputname="discipline" fieldpattern="[A-Za-z]+" req_flag={true}format={/[^A-Za-z\s]/g}/>
         {/* <label htmlFor="Discipline">Discipline</label>
         <input type="text" name="Discipline" /> */}
       </div> 
       <div className="aca-year">
       <Allfields fieldtype="text" value="Academic_Year" inputname="academic_Year" fieldpattern="\d{4}-\d{4}$" req_flag={true} format={/[^0-9-]/g}/>
         {/* <label htmlFor="Academic Year">Academic Year</label>
         <input type="text" name="Academic Year"/> */}
       </div>
       
        <div className="adm-no">
        <Allfields fieldtype="text" value="Admission_Number" inputname="admission_Number" fieldpattern="[0-9]+" req_flag={true} format={/[^0-9a-zA-Z/-]/g}/>
         {/* <label htmlFor="AdmissionNo">AdmissionNo</label>
         <input type="text" name="AdmissionNo" /> */}
       </div>
       <div className="regulation">
       <Allfields fieldtype="text" value="Regulation" inputname="regulation" fieldpattern="[A-Za-z0-9]+" req_flag={true} format={/[^0-9a-zA-Z]/g}/>
        {/* <label htmlFor="Regulation">Regulation</label>
        <input type="text" name="Regulation"/> */}
      </div>
      
       <div className="sem">
         <label htmlFor="Semester">Semester</label>
         <select className='community-dropdown' name="semester">
          <option>Select</option>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>
          <option value="V">V</option>
          <option value="VI">VI</option>
          <option value="VII">VII</option>
          <option value="VIII">VIII</option>
         </select>
       </div> 
       <div className="abc-id">
        {/* <label htmlFor="ABC Id">ABC Id</label>
        <input type="text" name="ABC Id" /> */}
        <Allfields fieldtype="text" value="ABC_Id" inputname="abc_Id" fieldpattern="[0-9]+" req_flag={true} format={/[^0-9]/g}/>
      </div>
        <div className="umis-id">
        <Allfields fieldtype="text" value="UMIS_Id" inputname="umis_Id" fieldpattern="[0-9]+" req_flag={true} format={/[^0-9]/g}/>
         {/* <label htmlFor="UMIS Id">UMIS Id</label>
         <input type="text" name="UMIS Id"   /> */}
       </div>
       <div className="date-of-adm">

       <Allfields fieldtype="date" value="Date_of_Admission" inputname="date_Of_Admission"fieldpattern="" req_flag={true} format=""/>

         {/* <label htmlFor="Date of Admission">Date of Admission</label>
         <input type="date" name="Date of Admission"  /> */}
       </div>
       <div className="join-date">

       <Allfields fieldtype="date" value="Course_Joined_Date" inputname="course_Joined_Date"fieldpattern="" req_flag={true} format=""/>

         {/* <label htmlFor="Course joined">Course joined</label>
         <input type="date" name="Course joined"  /> */}
       </div> 

     <div className="course-type">
       <label htmlFor="Coursetype">Course Type</label>
       <div className="radio">
       <div className="radio-spacing"><input type="radio" name="course_Type"value="Regular"/> Regular</div>
       <div className="radio-spacing"> <input type="radio" name="course_Type" value="Lateral"/> Lateral</div>
      </div>
     </div>
      <div className="fasttrack">
       <label htmlFor="Fasttrack">Fasttrack</label>
       <div className="radio">
       <div className="radio-spacing"><input type="radio" name="fast_Track"value="Yes"/> Yes</div>
       <div className="radio-spacing"> <input type="radio" name="fast_Track" value="No"/> No</div>
      </div>
     </div>
       <div className="cgpa" >
       <Allfields fieldtype="text" value="CGPA" inputname="cgpa"fieldpattern="\d+\.\d+" req_flag={true} format={/[^0-9.]/g}/>
         {/* <label htmlFor="CGPA">CGPA</label>
         <input type="text" name="CGPA" /> */}
       </div> 
       <div className="student-status">
       <label htmlFor="Student_Status">Student_Status</label>
         <select className='community-dropdown' name="student_Status">
          <option>Select</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
         </select>
      </div>
     
</div>
<div className='academic-buttons'>
      <Allbuttons target={goToPersonalform} value="Previous" image={Previouswhite}/>
      <div>
      <Allbuttons value="Submit" image={Nextwhite} />
        {/* <button>Submit</button> */}
        <ToastContainer />
     
      </div>
     </div>
     </form>
     <div className="password_popup">
      {/* <button onClick={openModal}>Open Popup</button> */}
      <Popup 
        open={isOpen} 
        modal
        closeOnDocumentClick={false}
      >
        <div>
        <div className="login-popup">
            <form className="create-passwors-form" id="createpassword" onSubmit={PasswordSubmit}>
              <h2 className='create-password-title' >
                Create password
              </h2>
              <label htmlFor="">User name</label>
              <input className="create_password_fields" type="text" placeholder={location.state.Uname} disabled /> 
              <input className="create_password_fields" name="create_Password" type="password" placeholder="Create password" 
              pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'/>
              <input className="create_password_fields" name="reenter_Password" type="password" placeholder="Re-enter password" 
              pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'/>
              <button className='All-button' >Create</button>
            </form>
          </div>
        </div>
      </Popup>
    </div>
{/*         
     {showDiv && 
     <div>
       <Createpasswordpopup />
      </div>}
     */}
</div>

  )
}

export default Academicform