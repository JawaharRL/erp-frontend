import React, { useState } from 'react';
import './Passwordvalidater.css';

const Passwordvalidater = ({ input_name_createpw, input_name_reenterpw }) => {
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const passwordRules = [
    { regex: /[A-Z]/, label: 'Include at least one uppercase letter' },
    { regex: /[a-z]/, label: 'Include at least one lowercase letter' },
    { regex: /[0-9]/, label: 'Include at least one number' },
    { regex: /[$@#&!]/, label: 'Includes at least one special character' },
    { regex: /^.{8,}$/, label: 'Password should be at least 8 characters' },
  ];

  const checkPasswordRules = (password) => {
    return passwordRules.map((rule) => ({
      ...rule,
      meetsCriteria: rule.regex.test(password),
    }));
  };

  return (
    <div>
      <input
        type="password"
        name={input_name_createpw}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onFocus={() => setIsFocused(true)} // Set isFocused to true when input is focused
        onBlur={() => setIsFocused(false)} // Set isFocused to false when input is blurred
        placeholder="Enter new password"
      />

      {isFocused && password && (
        <ul>
          {checkPasswordRules(password).map((check, index) => (
            <li
              className="password_instructions"
              key={index}
              style={{ display: check.meetsCriteria ? 'none' : 'block' }}
            >
              {check.label}
            </li>
          ))}
        </ul>
      )}

      <input
        className="reenter_password_fields"
        name={input_name_reenterpw}
        type="password"
        placeholder="Re-enter password"
      />
    </div>
  );
};

export default Passwordvalidater;
