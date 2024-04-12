import React from 'react'
import './Allfields.css'

const Allfields = ({value,fieldtype,inputname,field_pattern,req_flag})=> {
  return (
    <div>
    <label >{value} </label>
    <input type={fieldtype} name={inputname} pattern={field_pattern} required={req_flag} />
    </div>
  )
}

export default Allfields