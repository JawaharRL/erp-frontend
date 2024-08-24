import React from 'react';
import './Allbuttons.css';

const Allbutton = ({ value, image, onClick, target }) => {
  const handleClick = () => {
    if (onClick) onClick();  // Call the onClick function if provided
    if (target) window.location.href = target;  // Navigate to target URL if provided
  };

  return (
    <button className='All-button' onClick={handleClick}>
      <img className='icon' src={image} alt="icon" />
      {value}
    </button>
  );
}

export default Allbutton;
