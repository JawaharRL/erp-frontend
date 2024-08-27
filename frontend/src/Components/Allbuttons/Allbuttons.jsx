import React from 'react'
import './Allbuttons.css'

const Allbutton = ({value,image,target})=> {
  return (
    <button className='All-button' onClick={target}>
            <img className='icon' src={image}  />
            {value}
    </button>
  )
}

export default Allbutton