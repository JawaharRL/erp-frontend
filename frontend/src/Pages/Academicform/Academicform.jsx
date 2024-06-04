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
import Passwordvalidater from '../../Components/Passwordvalidater/Passwordvalidater'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Popup from 'reactjs-popup'


function Academicform() {

  const location = useLocation();
  console.log(location)

  const navigate = useNavigate();
  const goToPersonalform = () => {
    navigate('/personal-form');
  };
  const [isOpen, setIsOpen] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const url = 'http://localhost:8080/api/academics';

    const data = {
      // emailid: location.state.Uname,
      registerNo: formData.get('registerNo'),
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
      cgpa: formData.get('cgpa'),
      student_Status: formData.get('student_Status')
    };
    // console.log(data.email_Id);
    try {

      const response = await axios.post(url, data);
      console.log(response.data);
      toast("Registration successful");
      setIsOpen(true);

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
    const url = 'http://localhost:8080/api/authentication/create';

    const data = {
      emailid: location.state.Uname,
      password: createPassword,

    };
    console.log(data.email_Id);
    try {
      const response = await axios.post(url, data);
      console.log(response.data);
      toast("Password creation successful");
      await new Promise((resolve) => setTimeout(resolve, 1300));
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
      <br />
      <form id='registration_form' onSubmit={handleSubmit}>
        <div className="academic-container">
          <div className="reg-no">
            <Allfields fieldtype="text" value="RegisterNo" inputname="registerNo" fieldpattern="[0-9]+" req_flag={true} format={/[^0-9]/g} />
          </div>
          <div className="programme">
            <label htmlFor="programme">programme</label>
            <select className='programme-dropdown' name="programme">
              <option>Select</option>
              <option value="BE (Fulltime)">BE (Full time)</option>
              <option value="BE (part time)">BE (part time)</option>
              <option value="ME">ME</option>
            </select>
          </div>
          <div className="discipline">
            <label htmlFor="discipline">discipline</label>
            <select className='discipline-dropdown' name="discipline">
              <option>Select</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
              <option value="Electronics and communication Engineering">Electronics and communication Engineering</option>
              <option value="Computer Science and Engineering">Computer Science and Engineering</option>
              <option value="Structural Engineering">Structural Engineering</option>
              <option value="Environmental Engineering">Environmental Engineering</option>
              <option value="Manufacturing Engineering">Manufacturing Engineering</option>
              <option value="Computer Aided Design">Computer Aided Design</option>
              <option value=" Power Electronics and Drives"> Power Electronics and Drives</option>
              <option value="Microwave and Optical Communication">Microwave and Optical Communication</option>

            </select>
          </div>
          <div className="aca-year">
            <Allfields fieldtype="text" value="Academic Year" inputname="academic_Year" fieldpattern="\d{4}-\d{4}$" req_flag={true} format={/[^0-9-]/g} />
          </div>

          <div className="adm-no">
            <Allfields fieldtype="text" value="Admission Number" inputname="admission_Number" fieldpattern="[0-9]+" req_flag={true} format={/[^0-9a-zA-Z/-]/g} />
          </div>
          <div className="regulation">
            <Allfields fieldtype="text" value="Regulation" inputname="regulation" fieldpattern="[A-Za-z0-9]+" req_flag={true} format={/[^0-9a-zA-Z]/g} />
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
            <Allfields fieldtype="text" value="ABC Id" inputname="abc_Id" fieldpattern="[0-9]+" req_flag={true} format={/[^0-9]/g} />
          </div>
          <div className="umis-id">
            <Allfields fieldtype="text" value="UMIS Id" inputname="umis_Id" fieldpattern="[0-9]+" req_flag={true} format={/[^0-9]/g} />
          </div>
          <div className="date-of-adm">
            <Allfields fieldtype="date" value="Date of Admission" inputname="date_Of_Admission" fieldpattern="" req_flag={true} format="" />
          </div>
          <div className="join-date">
            <Allfields fieldtype="date" value="Course Joined Date" inputname="course_Joined_Date" fieldpattern="" req_flag={true} format="" />
          </div>

          <div className="course-type">
            <label htmlFor="Coursetype">Course Type</label>
            <div className="radio">
              <div className="radio-spacing"><input type="radio" name="course_Type" value="Regular" /> Regular</div>
              <div className="radio-spacing"> <input type="radio" name="course_Type" value="Lateral" /> Lateral</div>
            </div>
          </div>
          <div className="fasttrack">
            <label htmlFor="Fasttrack">Fasttrack</label>
            <div className="radio">
              <div className="radio-spacing"><input type="radio" name="fast_Track" value="Yes" /> Yes</div>
              <div className="radio-spacing"> <input type="radio" name="fast_Track" value="No" /> No</div>
            </div>
          </div>
          <div className="cgpa" >
            <Allfields fieldtype="text" value="CGPA" inputname="cgpa" fieldpattern="\d+\.\d+" req_flag={true} format={/[^0-9.]/g} />
          </div>
          <div className="student-status">
            <label htmlFor="Student_Status">Student status</label>
            <select className='community-dropdown' name="student_Status">
              <option>Select</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

        </div>
        <div className='academic-buttons'>
          <div>
            <Allbuttons value="Submit" image={Nextwhite} />
            <ToastContainer />
          </div>
        </div>
      </form>
      <div className="password_popup">
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
                <input className="create_password_fields" type="text" placeholder={location.state.Uname} disabled />
                <Passwordvalidater input_name_createpw="create_Password" input_name_reenterpw="reenter_Password" />
                <button className='All-button password_crate_button' >Create</button>
              </form>
            </div>
          </div>
        </Popup>
      </div>
    </div>

  )
}

export default Academicform