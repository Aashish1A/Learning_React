// import React, { useEffect, useState } from 'react'

// const UseLocalStorage = (key, initialData) => {
//   const [data, setData] = useState(initialData);

//   useEffect(() => {
//     const existingData = JSON.parse(localStorage.getItem(key))

//     if(existingData){
//       setData(existingData);
//     }else{
//       localStorage.setItem(key, JSON.stringify(initialData));
//     }
//   },[])
//   const updateLocalStorage = (newData) => {
//     localStorage.setItem(key, JSON.stringify(newData));
//     setData(newData);
//   }
//   return [data, updateLocalStorage];
// }

// export default UseLocalStorage