import React from 'react'

const Button = () => {

    const handleClick = () => console.log("Stop clicking me");

    const handleClickMe = (name) => console.log(`${name} stop clicking me`);

    const handle = (e) => e.target.textContent = "OUCh!";

  return (
    <div>
        <button onClick={handleClick}>Click Me 😀</button>
        <button onClick={()=> handleClickMe("Aashish")}>Click Me 😒</button>
        <button onClick={(e) => handle(e)}>Click</button>
    </div>
  )
}

export default Button