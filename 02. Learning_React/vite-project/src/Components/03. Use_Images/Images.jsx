import React from 'react';
import "./Images.css";
import Button from './Button';
import Basket from "./Basket";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.webp";

const totalAppleCount = 10;
let rightAppleCount = 0;
let leftAppleCount = totalAppleCount - rightAppleCount;

const Images = () => {

  const leftClick = () => {
    leftAppleCount++;
    rightAppleCount--;
  }
  const rightClick = () => {
    rightAppleCount++;
    leftAppleCount--;
  }

  return (
    <div>
        <Basket appleCount={leftAppleCount} basketName={1}/>
        <Button clickHandler={leftClick} imageBtn={leftArrow} buttonName="leftArrow" />
        <Button clickHandler={rightClick} imageBtn={rightArrow} buttonName="rightArrow" />
        <Basket appleCount={rightAppleCount} basketName={2}/>
    </div>
  )
}

export default Images;