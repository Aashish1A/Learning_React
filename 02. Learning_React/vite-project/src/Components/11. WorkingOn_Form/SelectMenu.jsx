import React from "react";

const SelectMenu = ({id, name, value, label, onChange, error, options, defaultOption}) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      >
        {
            defaultOption && (
                <option value="" hidden>{defaultOption}</option>
            )
        }
       {
        options.map((option, i) => <option value={options} key={i}>{option}</option>)
       }
      </select>
      <p className="errors">{error}</p>
    </div>
  );
};

export default SelectMenu;
