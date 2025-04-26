import React, { useEffect, useRef } from 'react'

const Hook = () => {

    const inputRef = useRef(null);

    useEffect(()=> {
        console.log("Component rendered");
    })

    const handleClick = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "red";
    }

  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
        <input ref={inputRef} />
    </div>
  )
}

export default Hook