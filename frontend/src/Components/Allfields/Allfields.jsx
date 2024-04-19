import React from 'react'
import './Allfields.css'

const Allfields = ({value,fieldtype,inputname,field_pattern,req_flag,format})=> {
  const handleInputChange = (e) => {
    // Custom input handling logic to allow only numbers
    e.target.value = e.target.value.replace(format, '');
  };
  return (
    <div>
    <label >{value} </label>
    <input type={fieldtype} name={inputname} pattern={field_pattern} required={req_flag} onInput={handleInputChange}/>
    </div>
  )
}

export default Allfields