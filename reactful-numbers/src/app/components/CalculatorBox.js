import React from "react";
import ExpressionsBox from "./ExpressionsBox";
import ButtonsBox from "./ButtonsBox";

function CalculatorBox() {
  return (
    <div className="calculator-box">
      <ExpressionsBox></ExpressionsBox>
      <ButtonsBox></ButtonsBox>
    </div>
  );
}
export default CalculatorBox;
