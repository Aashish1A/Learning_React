import React, { useState } from 'react'

const Todo = () => {

    const [tasks, setTasks] = useState(['Eat'])
    const [newTask, setNewTask] = useState("")

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {

    }

    const deleteTask = () => {

    }

    const moveTaskUp = () => {

    }

    const moveTaskDown = () => {

    }

  return (
    <div className='flex flex-col'>
        <h1>TO-DO-LIST</h1>
        <div>
            <input type="text" placeholder='Enter a task' value={newTask} onChange={handleInputChange} />
            <button className='' onClick={() => addTask()}>Add</button>
        </div>
        <ol>
            {tasks.map((task, index)=> 
                <li key={index}>
                    <span className="">{task}</span>
                    <button className='' onClick={() => deleteTask(index)}>Delete</button>
                </li>
            )}
        </ol>
    </div>
  )
}

export default Todo