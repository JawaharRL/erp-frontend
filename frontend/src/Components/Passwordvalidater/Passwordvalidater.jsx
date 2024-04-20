import React, { useState } from 'react';
import './Passwordvalidater.css'

const Passwordvalidater = ({input_name_createpw,input_name_reenterpw}) => {
  const [password, setPassword] = useState('');

  const passwordRules = [
    { regex: /[A-Z]/, label: 'Include atleast one uppercase letter' },
    { regex: /[a-z]/, label: 'Include atleast one lowercase letter' },
    { regex: /[0-9]/, label: 'Include atleast one number' },
    { regex: /[$@#&!]/, label: 'Includes atleast one special character' },
    { regex: /^.{8,}$/, label: 'Password Should be atleast 8 characters' },
  ];

  const checkPasswordRules = (password) => {
    return passwordRules.map(rule => ({
      ...rule,
      meetsCriteria: rule.regex.test(password),
    }));
  };

  const passwordChecks = checkPasswordRules(password);

  return (
    <div>
      <input type="password" name={input_name_createpw} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter new password"/>
    
      <ul>
        {passwordChecks.map((check, index) => (
          <li className="password_instructions" key={index} style={{ display: check.meetsCriteria ? 'none' : 'block'} }>
           
       {check.label}
          </li>
        ))}
      </ul>
      <input className="create_password_fields" name={input_name_reenterpw} type="password" placeholder="Re-enter password"/> 
    </div>
  );
};

export default Passwordvalidater;