import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ColorPicker = () => {

    const [color, setColor] = useState("#fff");

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    const [foods, setFoods] = useState(['Apple', 'Banana', "Orange", "Cherry"])

    const addFood = () => {
        const newFood = document.getElementById("foodInput").value;
        setFoods((f) => [...f, newFood])
    }

    const removeFood = (index) => {
        setFoods(foods.filter((_,i) => i !== index));
    }

  return (
    <div className='flex flex-col'>
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor: color}}>
            <p>Selected Color : {color}</p>
        </div>
        <label>Select a Color:</label>
        <input type="color"  value={color} onChange={handleColorChange}/>

        <div className="border-3 px-2">
            <h2>List of Foods</h2>
            <ul>{foods.map((food,index)=> <li key={index} onClick={() => removeFood(index)} >{food}</li> )}</ul>
            <input type="text" id='foodInput' placeholder='Enter Food name' />
            <button onClick={addFood}>Add Food</button>
        </div>
    </div>
  )
}

export default ColorPicker