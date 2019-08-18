import React from 'react';

const Input = ({ type, onChange, placeholder, name, value}) => {
    return (
      <div className="form-group">
        <input
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          value={value}
          className="form-control"
        />
      </div>
    );
}
 
export default Input;