import React, { useState } from "react";
import "./ClassComponent.css";
import OldCounter from "./OldCounter";

const ClassComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Counter</h2>
          <p className="text-3xl font-semibold text-blue-600">{count}</p>
          <div className="mt-4 flex space-x-3">
            <button
              onClick={() => setCount(count - 1)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Decrement
            </button>
            <button
              onClick={() => setCount(0)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Reset
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Increment
            </button>
          </div>
        </div>
        <OldCounter />
      </div>
    </>
  );
};

export default ClassComponent;
