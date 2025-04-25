import React, {useState, useEffect} from 'react';
import "./State.css";
import BJP from "../../assets/BJP.jpg";
import RJD from "../../assets/RJD.jpg";
import JDU from "../../assets/JDU.jpg";

const State = () => {

  const [count, setCount] = useState(0);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  const handleInputAge = (event) => {
    setAge(event.target.value);
  }

  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "black" : "white";
    document.body.style.color = isDarkMode ? "white" : "black";
  }, [isDarkMode])

  const [bjpCount, bjpCounting] = useState(0);
  const [rjdCount, rjdCounting] = useState(0);
  const [jduCount, jduCounting] = useState(0);
  const getWinner = () => {
    if(bjpCount > rjdCount && bjpCount > jduCount){
      return "BJP";
    }
    else if(rjdCount > bjpCount && rjdCount > jduCount){
      return "RJD";
    }
    else if(jduCount > bjpCount && jduCount > rjdCount){
      return "JDU";
    }
    else{
      return "No final winner yet";
    }
  }

  return (
    <div className='State'>

      <div className="counter">
        <h1>Counter: {count}</h1>
        <button onClick={()=>{setCount(count + 1)}}>Increment</button>
        <button onClick={()=>{setCount(count - 1)}}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div className="formHandle">
        <h1>Hello, {name || "Guest"}!</h1>
        <h2>Age {age || "None"} years!</h2>
        <input type="text" placeholder='Enter your name' value={name} onChange={handleInputChange}/>
        <input type="number" placeholder='Enter your age' value={age} onChange={handleInputAge}/>
      </div>

      <div className="darkLight">
        <h2>{isDarkMode ? "Dark Mode" : "Light Mode"}</h2>
        <button onClick={() => setIsDarkMode(true)}>Dark Mode</button>
        <button onClick={() => setIsDarkMode(false)}>Light Mode</button>
      </div>

      <div className="votingApp">
        <h2>Voting APP</h2>
        <div className="BJP">
          <img src={BJP} alt="BJP" />
          <span><button onClick={()=>{bjpCounting(bjpCount + 1)}}>Vote BJP</button></span>
        </div>
        <div className="RJD">
          <img src={RJD} alt="RJD" />
          <span><button onClick={()=>{rjdCounting(rjdCount + 1)}}>Vote RJD</button></span>
        </div>
        <div className="JDU">
          <img src={JDU} alt="JDU" />
          <span><button onClick={()=>{jduCounting(jduCount + 1)}}>Vote JDU</button></span>
        </div>
        <div className="results">
          <h1>Total Votes</h1>
          <b>BJP : {bjpCount}</b><br />
          <b>RJD : {rjdCount}</b><br />
          <b>JDU : {jduCount}</b>
          <h2>Winner: {getWinner()}</h2>
        </div>
      </div>
    </div>
  )
}

export default State;