import React, { useState } from 'react';
import './Facultyregistration.css';
import { Allfields } from '../../Components';
import { Allbuttons } from '../../Components';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nextwhite from '../../Assets/Nextwhite.svg';

function Facultyregistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    discipline: '',
    handlingBatch: ''
    // handlingClass: ''
  });

  const [fields, setFields] = useState(['']);
  const maxFields = 10;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = {
      ...formData,
      handlingClass: fields.join(', ')
    };

    try {
      const response = await axios.post('http://localhost:8080/api/faculty/post', formDataToSend, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Form submitted successfully:', response.data);
      toast("Registration Successful");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // navigate('/login-page');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast(`Error: ${error.response?.data?.message || 'Something went wrong'}`);
    }
  };

  const handleOtherField = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleAddField = () => {
    if (fields.length < maxFields) {
      setFields([...fields, '']);
    } else {
      alert(`You can only add up to ${maxFields} fields.`);
    }
  };

  const handleRemoveField = (index) => {
    if (fields.length > 1) {
      setFields(fields.filter((_, i) => i !== index));
    } else {
      alert('At least one field is required.');
    }
  };

  const handleChange = (index, event) => {
    const newFields = [...fields];
    newFields[index] = event.target.value;
    setFields(newFields);
  };

  return (
    <div>
      <form className="faculty_registration_form" onSubmit={handleSubmit}>
        <div className="faculty_registration_container">
          <div className="faculty_first_name">
            <Allfields 
              fieldtype="text" 
              value="First Name" 
              inputname="firstName"  
              fieldpattern="[A-Za-z]+" 
              req_flag={true} 
              format={/[^A-Za-z\s]/g} 
              formData={formData} 
              setFormData={setFormData} 
            />
          </div>

          <div className="faculty_last_name">
            <Allfields 
              fieldtype="text" 
              value="Last Name" 
              inputname="lastName"  
              fieldpattern="[A-Za-z]+" 
              format={/[^A-Za-z\s]/g} 
              formData={formData} 
              setFormData={setFormData}
            />
          </div>

          <div className="mailid">
            <label htmlFor="Emailid">Email ID</label>
            <input 
              id='mailid' 
              type="email" 
              name="email"  
              placeholder="Enter email id" 
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" 
              required  
              value={formData.email}  
              onChange={handleOtherField}  
            />
          </div>

          <div className="Mobile_Number">
            <Allfields 
              fieldtype="text" 
              value="Mobile Number" 
              inputname="mobileNumber"  
              fieldpattern="[0-9]{10}" 
              req_flag={true} 
              format={/[^0-9]/g} 
              formData={formData} 
              setFormData={setFormData}
            />
          </div>

          <div className="discipline">
            <label htmlFor="discipline">Discipline</label>
            <select 
              className='discipline-dropdown' 
              name="discipline"  
              value={formData.discipline || ''}  
              onChange={handleOtherField}
            >
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

          <div className="handling_batch">
            <Allfields 
              fieldtype="text" 
              value="Handling batch" 
              inputname="handlingBatch"  
              fieldpattern="\d{4}-\d{4}$" 
              format={/[^0-9-]/g} 
              formData={formData} 
              setFormData={setFormData}
            />
          </div>

          {fields.map((field, index) => (
            <div className="handling_class" key={index}>
              <label>
                Handling Class
                </label>
                <input
                  type="text"
                  value={field}
                  name="handlingClass"
                  onChange={(event) => handleChange(index, event)}
                  placeholder={`Enter value for field ${index + 1}`}
                />
              
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
