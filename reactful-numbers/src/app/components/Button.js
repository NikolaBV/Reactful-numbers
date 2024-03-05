import React from "react";
function Button({ buttonColor, buttonText, onClick }) {
  return (
    <button className={`button ${buttonColor}`} onClick={onClick}>
      {buttonText}
    </button>
  );
}
export default Button;
