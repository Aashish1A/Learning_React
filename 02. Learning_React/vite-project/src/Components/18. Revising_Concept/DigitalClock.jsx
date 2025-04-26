import React, { useEffect, useState } from "react";
import background from "../../../src/assets/bg.jpg";

const DigitalClock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    const formatTime = () => {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    const padZero = (number) => {
        return (number < 10 ? "0" : "") + number;
    }

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
     <div className="text-white text-8xl font-bold font-mono">
        <span>{formatTime()}</span>
     </div>
    </div>
  );
};

export default DigitalClock;
