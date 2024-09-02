import React, { useState } from 'react';
import './Facultyregistration.css';
import { Allfields, Allbuttons } from '../../Components';
import { useLocation, useNavigate } from 'react-router-dom';
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
    handlingBatch: ''
  });

  const [fields, setFields] = useState([{ handlingDiscipline: '', academicYear: '' }]);
  const maxFields = 10;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = {
      ...formData,
      handlingClass: fields.map(field => `${field.handlingDiscipline}#${field.academicYear}`).join(', ')
    };

    try {
      const response = await axios.post('http://localhost:8080/api/faculty/post', formDataToSend, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log('Form submitted successfully:', response.data);
      toast("Registration Successful");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate('/login-page');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast(`Error: ${error.response?.data?.message || 'Something went wrong'}`);
    }
  };

  const handleOtherField = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleAddField = () => {
    if (fields.length < maxFields) {
      setFields([...fields, { handlingDiscipline: '', academicYear: '' }]);
    } else {
      toast(`You can only add up to ${maxFields} fields.`);
    }
  };

  const handleRemoveField = (index) => {
    if (fields.length > 1) {
      setFields(fields.filter((_, i) => i !== index));
    } else {
      toast('At least one field is required.');
    }
  };

  const handleDisciplineChange = (index, value) => {
    const newFields = [...fields];
    newFields[index].handlingDiscipline = value;
    setFields(newFields);
  };

  const handleAcademicYearChange = (index, event) => {
    const { value } = event.target;
    const newFields = [...fields];
    newFields[index].academicYear = value;
    setFields(newFields);
  };

  return (
    <div>
      <form className="faculty_registration_form" onSubmit={handleSubmit}>
        <div className="faculty_registration_container">
          <Allfields fieldtype="text" value="First Name" inputname="firstName" req_flag={true} formData={formData} setFormData={setFormData} />
          <Allfields fieldtype="text" value="Last Name" inputname="lastName" formData={formData} setFormData={setFormData} />
          <Allfields fieldtype="text" value="Mobile Number" inputname="mobileNumber" req_flag={true} formData={formData} setFormData={setFormData} />
          
          <div className="discipline">
            <label htmlFor="discipline">Discipline</label>
            <select name="discipline" className='discipline-dropdown' value={formData.discipline || ''} onChange={handleOtherField}>
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
              <option value="Power Electronics and Drives">Power Electronics and Drives</option>
              <option value="Microwave and Optical Communication">Microwave and Optical Communication</option>
            </select>
          </div>

          <Allfields fieldtype="text" value="Handling batch" inputname="handlingBatch" formData={formData} setFormData={setFormData} />

          {fields.map((field, index) => (
            <div className="handling_class" key={index}>
              <label>Handling Discipline</label>
              <select className='discipline-dropdown' value={field.handlingDiscipline || ''} onChange={(event) => handleDisciplineChange(index, event.target.value)}>
                <option >Select</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
                <option value="Electronics and communication Engineering">Electronics and communication Engineering</option>
                <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                <option value="Structural Engineering">Structural Engineering</option>
                <option value="Environmental Engineering">Environmental Engineering</option>
                <option value="Manufacturing Engineering">Manufacturing Engineering</option>
                <option value="Computer Aided Design">Computer Aided Design</option>
                <option value="Power Electronics and Drives">Power Electronics and Drives</option>
                <option value="Microwave and Optical Communication">Microwave and Optical Communication</option>
              </select>
              
              <label>Handling Academic Year</label>
              <input type="text" value={field.academicYear} onChange={(event) => handleAcademicYearChange(index, event)} placeholder={`Enter academic year for field ${index + 1}`} />
              
              {fields.length > 1 && (
                <button type="button" onClick={() => handleRemoveField(index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          
          {fields.length < maxFields && (
            <button type="button" onClick={handleAddField}>
              Add Field
            </button>
          )}
        </div>
        
        <Allbuttons value="submit" image={Nextwhite} />
      </form>
    </div>
  );
}

export default Facultyregistration;