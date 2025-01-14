import React, {useState} from 'react';
import "./EventHandling.css";
import bulbOFF from "../../assets/bulboff.jpg";
import bulbON from "../../assets/bulbon.jpg";

const EventHandling = () => {
  const [name, setName] = useState("");
  const [isBulbOn, setIsBulbOn] = useState(false);

  const handleInputChange = (event) => {
    setName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${name}!`);
  };

  const bulbOn = () => {
    setIsBulbOn(true);
  }
  const bulbOff = () => {
    setIsBulbOn(false);
  }

  return (
    <div className='EventHandling'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                Name: <input type="text" value={name} onChange={handleInputChange} placeholder='Enter your name' />
            </label>
            <button type='submit'>Submit</button>
        </form>
        <p>Your name: {name}</p>

        {/* BulbOn and BulbOff */}
        <div className="bulb">
      {/* Render bulb image based on state */}
      <img
        src={isBulbOn ? bulbON : bulbOFF}
        alt={isBulbOn ? "Bulb On" : "Bulb Off"}
        style={{ width: "200px", height: "auto" }}
      />
      <div>
        {/* Buttons to toggle bulb state */}
        <button onClick={bulbOn} style={{ margin: "10px" }}>ON</button>
        <button onClick={bulbOff} style={{ margin: "10px" }}>OFF</button>
      </div>
    </div>
    </div>
  )
}

export default EventHandling;