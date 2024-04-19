// Allfields.js
import React from 'react';
import './Allfields.css'
const Allfields = ({ fieldtype, value, inputname, fieldpattern, req_flag, onChange }) => {
  return (
    <div>
      <label htmlFor={inputname}>{value}</label>
      <input
        type={fieldtype}
        name={inputname}
        pattern={fieldpattern}
        required={req_flag === "true"}
        onChange={onChange}
      />
    </div>
  );
};

export default Allfields;
