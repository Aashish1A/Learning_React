import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate();

  return (
    <div>
        <h2 className='text-2xl font-bold'>404 | Page not found</h2>
        <br />
        <button onClick={() => navigate("/")} className='border-2'>Go to homepage</button>
    </div>
  )
}

export default NotFound