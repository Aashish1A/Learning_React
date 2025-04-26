import React, { useState } from 'react'

const Todo = () => {

    const [tasks, setTasks] = useState(['Eat', "Complete react", "complete tree"])
    const [newTask, setNewTask] = useState("")

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
       if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewTask("")
       }
    }

    const deleteTask = (index) => {
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
    }

    const moveTaskUp = (index) => {
        if(index>0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    const moveTaskDown = (index) => {
        if(index < tasks.length - 1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

  return (
    <div className='flex flex-col px-4 rounded-4xl bg-black text-white'>
        <h1 className='text-6xl'>TO-DO-LIST</h1>
        <div>
            <input className='border-2 text-3xl p-2.5 rounded-2xl' type="text" placeholder='Enter a task' value={newTask} onChange={handleInputChange} />
            <button className='bg-green-500 text-white px-10 py-2 text-2xl rounded cursor-pointer' onClick={() => addTask()}>Add</button>
        </div>
        <ol>
            {tasks.map((task, index)=> 
                <li key={index} className='flex justify-around items-center gap-2 text-2xl font-bold mb-3.5 border-2 px-2 py-4 border-sky-300 rounded-xl'>
                    <span className="">{task}</span>
                    <button className='bg-red-500 hover:bg-red-300 text-white px-4 rounded ml-2 cursor-pointer' onClick={() => deleteTask(index)}>Delete</button>
                    <button className="bg-amber-500 hover:bg-blue-400 px-4 rounded ml-2 cursor-pointer" onClick={() => moveTaskUp(index)}>^</button>
                    <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 rounded ml-2 cursor-pointer" onClick={() => moveTaskDown(index)}>▽</button>
                </li>
            )}
        </ol>
    </div>
  )
}

export default Todo