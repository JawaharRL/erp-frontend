import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Academicform.css';
import Previouswhite from '../../Assets/Previouswhite.svg';
import Nextwhite from '../../Assets/Nextwhite.svg';
import Formtitle from '../../Components/Formtitle/Formtitle';
import Allfields from '../../Components/Allfields/Allfields';
import Allbuttons from '../../Components/Allbuttons/Allbuttons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Academicform() {

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : {};
  });

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleOtherField = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:8080/api/academics';
    
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      localStorage.removeItem('formData');
      toast.success("Registration successful");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate('/');
    } catch (error) {
      console.error('Error saving student:', error);
      toast.error("Registration failed");
    }
  };

  return (
    <div className="registration-background">
      <div className='form-content'>
        <Formtitle />
      </div>
      <br />
      <form id='registration_form' onSubmit={handleSubmit}>
        <div className="academic-container">
          <div className="reg-no">
            <Allfields fieldtype="text" value="RegisterNo" inputname="register_No" fieldpattern="[0-9]+" req_flag={true} format={/[^0-9]/g} formData={formData} setFormData={setFormData} />
          </div>
          <div className="programme">
            <label htmlFor="programme">Programme</label>
            <select className='programme-dropdown' name="programme"  value={formData.programme || ''} onChange={handleOtherField}>
              <option>Select</option>
              <option value="BE (Fulltime)" >BE (Full time)</option>
              <option value="BE (part time)" >BE (part time)</option>
              <option value="ME">ME</option>
            </select>
          </div>
          <div className="discipline">
            <label htmlFor="discipline">Discipline</label>
            <select className='discipline-dropdown' name="discipline"  value={formData.discipline || ''} onChange={handleOtherField}>
              <option >Select</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Mechanical Engineering" >Mechanical Engineering</option>
              <option value="Electrical and Electronics Engineering" >Electrical and Electronics Engineering</option>
              <option value="Electronics and communication Engineering" >Electronics and communication Engineering</option>
              <option value="Computer Science and Engineering" >Computer Science and Engineering</option>
              <option value="Structural Engineering" >Structural Engineering</option>
              <option value="Environmental Engineering" >Environmental Engineering</option>
              <option value="Manufacturing Engineering" >Manufacturing Engineering</option>
              <option value="Computer Aided Design" >Computer Aided Design</option>
              <option value="Power Electronics and Drives" >Power Electronics and Drives</option>
              <option value="Microwave and Optical Communication" >Microwave and Optical Communication</option>
            </select>
          </div>
          <div className="aca-year">
            <Allfields fieldtype="text" value="Academic Year" inputname="academic_Year" fieldpattern="\d{4}-\d{4}$" req_flag={true} format={/[^0-9-]/g} formData={formData} setFormData={setFormData} />
          </div>
          <div className="adm-no">
            <Allfields fieldtype="text" value="Admission Number" inputname="admission_Number" fieldpattern="[0-9]+" req_flag={true} format={/[^0-9a-zA-Z/-]/g} formData={formData} setFormData={setFormData} />
          </div>
          <div className="regulation">
            <Allfields fieldtype="text" value="Regulation" inputname="regulation" fieldpattern="[A-Za-z0-9]+" req_flag={true} format={/[^0-9a-zA-Z]/g} formData={formData} setFormData={setFormData} />
          </div>
          <div className="sem">
            <label htmlFor="semester">Semester</label>
            <select className='community-dropdown' name="semester"  value={formData.semester || ''} onChange={handleOtherField}>
              <option>Select</option>
              <option value="I" >I</option>
              <option value="II" >II</option>
              <option value="III" >III</option>
              <option value="IV" >IV</option>
              <option value="V" >V</option>
              <option value="VI" >VI</option>
              <option value="VII" >VII</option>
              <option value="VIII" >VIII</option>
            </select>
          </div>
          <div className="abc-id">
            <Allfields fieldtype="text" value="ABC Id" inputname="abc_Id" fieldpattern="[0-9]+" req_flag={true} format={/[^0-9]/g} formData={formData} setFormData={setFormData} />
          </div>
          <div className="umis-id">
            <Allfields fieldtype="text" value="UMIS Id" inputname="umis_Id" fieldpattern="[0-9]+" req_flag={true} format={/[^0-9]/g} formData={formData} setFormData={setFormData} />
          </div>
          <div className="date-of-adm">
            <Allfields fieldtype="date" value="Date of Admission" inputname="date_Of_Admission" fieldpattern="" req_flag={true} format="" formData={formData} setFormData={setFormData} />
          </div>
          <div className="join-date">
            <Allfields fieldtype="date" value="Course Joined Date" inputname="course_Joined_Date" fieldpattern="" req_flag={true} format="" formData={formData} setFormData={setFormData} />
          </div>
          <div className="course-type">
            <label htmlFor="course_Type">Course Type</label>
            <div className="radio">
              <div className="radio-spacing"><input type="radio" name="course_Type" value="Regular" onChange={handleOtherField} checked={formData.course_Type === 'Regular'} /> Regular</div>
              <div className="radio-spacing"><input type="radio" name="course_Type" value="Lateral" onChange={handleOtherField} checked={formData.course_Type === 'Lateral'} /> Lateral</div>
            </div>
          </div>
          <div className="fasttrack">
            <label htmlFor="fast_Track">Fasttrack</label>
            <div className="radio">
              <div className="radio-spacing"><input type="radio" name="fast_Track" value="Yes" onChange={handleOtherField} checked={formData.fast_Track === 'Yes'} /> Yes</div>
              <div className="radio-spacing"><input type="radio" name="fast_Track" value="No"  onChange={handleOtherField}checked={formData.fast_Track === 'No'} /> No</div>
            </div>
          </div>
          <div className="cgpa">
            <Allfields fieldtype="text" value="CGPA" inputname="cgpa" fieldpattern="\d+\.\d+" req_flag={true} format={/[^0-9.]/g} formData={formData} setFormData={setFormData} />
          </div>
          <div className="student-status">
            <label htmlFor="student_Status">Student Status</label>
            <select className='student-status-dropdown' name="student_Status"  value={formData.student_Status || ''} onChange={handleOtherField}>
              <option>Select</option>
              <option value="Terminated" >Terminated</option>
              <option value="Discontinued">Discontinued</option>
              <option value="Passed Out" >Passed Out</option>
            </select>
          </div>
        </div>
        <div className="btn-container">
          <Allbuttons value="Previous" img={Previouswhite} btnClass="previous-btn" navigateTo="/personalinformation" />
          <Allbuttons value="Next" img={Nextwhite} btnClass="next-btn" />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Academicform