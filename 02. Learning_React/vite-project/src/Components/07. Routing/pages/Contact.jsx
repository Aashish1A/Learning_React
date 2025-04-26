import React from 'react'
import { useNavigate } from 'react-router-dom'


const Contact = () => {

    const navigate = useNavigate();

  return (
    <div>
        <h1 className='text-4xl font-bold'>Contact Page</h1>
        <div className="flex items-center justify-center w-full pb-5 gap-5">
            <button onClick={() => navigate("info")} className='border-2 px-2'>Contact Info</button>
            <button onClick={() => navigate("form")} className='border-2 px-2'>Contact Form</button>
        </div>
    </div>
  )
}

export default Contact