"use client";
import React from "react";
import ExpressionsBox from "./ExpressionsBox";
import ButtonsBox from "./ButtonsBox";
import { useState } from "react";
function CalculatorBox() {
  const [inputValue, setInputValue] = useState("");
  const handleButtonClick = (text) => {
    setInputValue(inputValue + text);
  };
  const clearInput = () => {
    setInputValue("");
  };
  const invertSign = () => {
    setInputValue(inputValue * -1);
  };
  const percentage = () => {
    setInputValue(inputValue / 100);
  };
  const equals = () => {
    setInputValue(eval(inputValue));
  };

  return (
    <div className="calculator-box">
      <ExpressionsBox value={inputValue}></ExpressionsBox>
      <ButtonsBox
        setInputValue={handleButtonClick}
        clearInput={clearInput}
        invertSign={invertSign}
        percentage={percentage}
        equals={equals}
        expressionBoxValue={inputValue}
      ></ButtonsBox>
    </div>
  );
}
export default CalculatorBox;
