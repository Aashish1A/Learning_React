import React from 'react'

const List = () => {

    const fruits = [
        {id: 1, name: "Banana", calories: 80}, 
        {id: 2, name: "Apple", calories: 45}, 
        {id: 3, name: "Coconut", calories: 123}, 
        {id: 4, name: "PineApple", calories: 37},
    ];

    // fruits.sort((a,b)=> a.name.localeCompare(b.name)) // Alphabetical
    fruits.sort((a,b) => a.calories - b.calories) // Numeric

    const lowCalFruits = fruits.filter((fruit)=> fruit.calories<100)

    const listItems = fruits.map((fruit, index)=>{
        return <li key={index}>
            {fruit.id}: &nbsp;
            {fruit.name}: &nbsp;
            <b>{fruit.calories}</b>
            </li>
    })

    const lowCal = lowCalFruits.map((fruit, index)=>{
        return <li key={index}>
            {fruit.id}: &nbsp;
            {fruit.name}: &nbsp;
            <b>{fruit.calories}</b>
            </li>
    })

  return (
    <div>
        <ol>
            {listItems}
            <br />
            {lowCal}
        </ol>
    </div>
  )
}

export default List