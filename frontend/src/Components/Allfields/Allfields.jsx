import React from 'react'
import './Allfields.css'

const Allfields = ({ fieldtype, value, inputname, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));

  };

  return (
    <div className="field">
      <label htmlFor={inputname}>{value}</label>
      <input
        type={fieldtype}
        name={inputname}
        value={formData[inputname] || ''}
        onChange={handleChange}
        placeholder={`Enter ${value }`}
      />
    </div>
  );
};

export default Allfields;
