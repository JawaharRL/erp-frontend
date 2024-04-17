import React from 'react';
import './Createpasswordpopup.css'

function Createpasswordpopup() {
 

  return (
        <div className="login-popup">
            <form className="create-passwors-form">
              {/* Form fields for username and password */}
              <h2 className='create-password-title' >
                Create password
              </h2>
              <input className="create_password_fields" type="text" placeholder="Username" /> 
              <input className="create_password_fields" type="password" placeholder="Create password" />
              <input className="create_password_fields" type="password" placeholder="Re-enter password" />
              <button className='All-button'>Create</button>
            </form>
          </div>
        
      
  );
};

export default Createpasswordpopup;


