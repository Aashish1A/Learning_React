import React from "react";

const Input = ({label, id, name, value, onChange, error}) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <p className="errors">{error}</p>
    </div>
  );
};

export default Input;
