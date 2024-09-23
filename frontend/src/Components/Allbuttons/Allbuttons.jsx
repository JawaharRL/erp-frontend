import React from 'react'
import './Allbuttons.css'

const Allbutton = ({value,image,target,type})=> {
  return (
    <button className='All-button' type={type} onClick={target}>
            <img className='icon' src={image}  alt=''/>
            {value}
    </button>
  )
}

export default Allbutton