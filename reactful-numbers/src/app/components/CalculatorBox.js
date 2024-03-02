import React from "react";
import ExpressionsBox from "./ExpressionsBox";
import ButtonsBox from "./ButtonsBox";

function CalculatorBox() {
  return (
    <div className="calculator-box">
      <h1>CalculatorBox</h1>
      <ExpressionsBox></ExpressionsBox>
      <ButtonsBox></ButtonsBox>
    </div>
  );
}
export default CalculatorBox;
