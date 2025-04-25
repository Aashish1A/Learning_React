import React, { useState } from 'react';

const About = () => {
  const [todosList, setTodosList] = useState([]);
  return (
    <>
        <h1>Hi this is about page</h1>
        <button onClick={() => {
          import("../13. UseTailwindCSS/data").then((module) => setTodosList(module.todos))
        }}>Load Data</button>
        <ul>
          {
            todosList.map((todo,id) => <li key={todo.id}>{todo.title}</li> )
          }
        </ul>
    </>
  )
}

export default About