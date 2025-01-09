import React from 'react'

const Basket = ({appleCount, basketName}) => {
  return (
    <div className='basket'>
        <h1>
          <span>Apple : {appleCount}</span>
        </h1>
        <p>Basket{basketName}</p>
    </div>
  )
}

export default Basket;