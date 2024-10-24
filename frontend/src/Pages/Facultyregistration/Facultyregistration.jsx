import React, { useState } from 'react';
import './Facultyregistration.css';
import { Allfields, Allbuttons } from '../../Components';
import { useLocation, useNavigate } from 'react-router-dom';
import Formtitle from '../../Components/Formtitle/Formtitle'; 
import { toast } from 'react-toastify';
import axios from 'axios';
import Nextwhite from '../../Assets/Nextwhite.svg';

function Facultyregistration() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: location.state.userId,
    mobileNumber: '',
    discipline: '',
    faculty:'',
    handlingBatch:''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/faculty/post', formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log('Form submitted successfully:', response.data);
      localStorage.clear();
      toast("Registration Successful");
      localStorage.clear();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate('/login-page');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast('Something went wrong');
    }
  };

  const handleOtherField = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div>
      <form className="faculty_registration_form" onSubmit={handleSubmit}>
      <Formtitle/>
        <div className="faculty_registration_container">
          <div className='faculty_firstname'>
          <Allfields fieldtype="text" value="First Name" inputname="firstName" req_flag={true} formData={formData} setFormData={setFormData} />
          </div>
          <div className='faculty_lastname'>
          <Allfields fieldtype="text" value="Last Name" inputname="lastName" formData={formData} setFormData={setFormData} />
          </div>
          <div className='faculty_mobilenumber'>
          <label htmlFor="email">Email</label>
          <input type='email' value={formData.email} disabled/>
          
          </div>
          <div className='faculty_mobilenumber'>
          <Allfields fieldtype="text" value="Mobile Number" inputname="mobileNumber" req_flag={true} formData={formData} setFormData={setFormData} />
          </div>
          
          <div className="faculty_discipline">
            <label htmlFor="discipline">Discipline</label>
            <select name="discipline" className='dropdown' value={formData.discipline || ''} onChange={handleOtherField}>
              <option value=''>Select</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
              <option value="Electronics and communication Engineering">Electronics and communication Engineering</option>
              <option value="Computer Science and Engineering">Computer Science and Engineering</option>
              <option value="Department of Physics">Department of Physics</option>
              <option value="Department of Chemistry">Department of Chemistry</option>
              <option value="Department of Mathematics">Department of Mathematics</option>
              <option value="Department of English">Department of English</option>
              <option value="Department of Tamil">Department of Tamil</option>
              <option value="Department of Physical Education">Department of Physical Education</option>
            </select>
          </div>

          
          <div className="faculty">
               <label htmlFor="Faculty">Faculty</label>
               <div className="radio" >
                 <div className="radio-spacing"><input type="radio" name="faculty" value="Yes" onChange={handleOtherField} checked={formData.faculty === 'Yes'}/> Yes</div>
                 <div className="radio-spacing"><input type="radio" name="faculty" value="No" onChange={handleOtherField} checked={formData.faculty === 'No'} /> No</div>
                 
               </div>
             </div>
             {
              formData.faculty==="Yes" && (
              <Allfields fieldtype="text" value="Handling batch" inputname="handlingBatch" formData={formData} setFormData={setFormData} />)
             }
             <div id='faculty_form_submit_button'>
             <Allbuttons value="submit" image={Nextwhite} />
             </div>
                    
        </div>
    
      </form>
    </div>
  );
}

export default Facultyregistration;