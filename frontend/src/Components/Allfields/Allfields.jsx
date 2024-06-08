import React from 'react'
import './Allfields.css'

const Allfields = ({ fieldtype, value, inputname, fieldpattern, req_flag, format, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        placeholder={value}
        onInput={handleInputChange}
      />
    </div>
  );
};

export default Allfields;
