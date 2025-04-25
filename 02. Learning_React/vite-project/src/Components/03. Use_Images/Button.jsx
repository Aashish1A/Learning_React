import React from 'react'

const Button = ({imageBtn, buttonName, clickHandler}) => {
  return (
    <div onClick={clickHandler} title={buttonName}>
        <img src={imageBtn} alt={buttonName} />
    </div>
  )
}

export default Button;