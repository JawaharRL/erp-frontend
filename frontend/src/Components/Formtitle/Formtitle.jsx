import React from 'react'
import './Formtitle.css'
import { Link } from 'react-router-dom';
import Personalnavigate from '../../Assets/Personalnavigate.svg'
import Academicnavigate from '../../Assets/Academicnavigate.svg'



function Formtitle() {
  return (
    <div>
        
        <div className='form-content'>
        <div className='form-title'>
            <h1>Registration Form</h1>
        </div>
        {/* <div className='registration-navigation '>
            <div className='navigates personal-navigate '>
                <img className='navigate-icon' src={Personalnavigate} alt="" />
            </div>
            <div className='line-to'>
                
            </div>
        </div> */}
        </div>


    </div>
  )
}

export default Formtitle