import React from 'react'
import './Allfields.css'

const Allfields = ({ fieldtype, value, inputname, fieldpattern, req_flag, format, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));

  };
  const handleInputChange = (e) => {
    e.target.value = e.target.value.replace(format, '');
  };

  return (
    <div className="field">
      <label htmlFor={inputname}>{value}</label>
      <input
        type={fieldtype}
        name={inputname}
        value={formData[inputname] || ''}
        onChange={handleChange}
        pattern={fieldpattern}
        required={req_flag}
        placeholder={`Enter ${value }`}
        onInput={handleInputChange}
      />
    </div>
  );
};

export default Allfields;
