import React, { useEffect, useReducer, useRef, useState } from 'react'

const StopWatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=> {
        if(isRunning){
            intervalIdRef.current = setInterval(()=> {
                setElapsedTime(Date.now() - startTimeRef.current);
            },10)
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning])

    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    const stop = () => {
        setIsRunning(false);
    }

    const reset = () => {
        setElapsedTime(0);
        setIsRunning(false);
    }

    const formatTime = () => {

        let hours = Math.floor(elapsedTime/ (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliSeconds = Math.floor((elapsedTime %1000)/10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliSeconds = String(milliSeconds).padStart(2, "0");
        

        return `${minutes}:${seconds}:${milliSeconds}`
    }

  return (
    <div className='flex flex-col items-center bg-gray-300 border-5 rounded-4xl p-7'>
        <div className="text-7xl font-mono font-bold mb-5">
            {formatTime()}
        </div>
        <div className="">
            <button className='text-2xl font-bold py-2.5 px-5 m-1 min-w-32r rounded cursor-pointer bg-green-500 text-white' onClick={start}>Start</button>
            <button className='text-2xl font-bold py-2.5 px-5 m-1 min-w-32r rounded cursor-pointer bg-red-500 text-white' onClick={stop}>Stop</button>
            <button className='text-2xl font-bold py-2.5 px-5 m-1 min-w-32r rounded cursor-pointer bg-blue-500 text-white' onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default StopWatch