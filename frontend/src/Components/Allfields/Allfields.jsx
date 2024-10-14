import React from 'react';
import './Allfields.css';

const Allfields = ({ fieldtype, value, inputname, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = value.replace(/^\s+/, '');
    const updatedFormData = { ...formData, [name]: updatedValue };
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
  };

  const inputValue = formData[inputname] ? formData[inputname] : '';

  return (
    <div className="field">
      <label htmlFor={inputname}>{value}</label>
      <input
        type={fieldtype}
        name={inputname}
        value={inputValue}
        onChange={handleChange}
        placeholder={`Enter ${value}`}
      />
    </div>
  );
};

export default Allfields;