import React from "react";
function Button({ buttonColor, buttonText }) {
  return <button className={`button ${buttonColor}`}>{buttonText}</button>;
}
export default Button;
