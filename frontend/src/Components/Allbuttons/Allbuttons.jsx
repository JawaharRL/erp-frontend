import React from 'react'
import './Allbuttons.css'

const Allbutton = ({value,image})=> {
  return (
    <button className='All-button'>
            <img className='icon' src={image} alt="icon" />
            {value}
    </button>
  )
}

export default Allbutton