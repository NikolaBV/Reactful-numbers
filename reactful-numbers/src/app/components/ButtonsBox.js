import React from "react";
import Button from "./Button";
function ButtonsBox() {
  return (
    <div className="buttons-box">
      <div className="grid-container">
        <div>
          <Button buttonColor="grey" buttonText="AC"></Button>
        </div>
        <div>
          <Button buttonColor="grey" buttonText="+/-"></Button>
        </div>
        <div>
          <Button buttonColor="grey" buttonText="%"></Button>
        </div>
        <div>
          <Button buttonColor="orange" buttonText="/"></Button>
        </div>
        <div>
          <Button buttonColor="dark-grey" buttonText="7"></Button>
        </div>
        <div>
          <Button buttonColor="dark-grey" buttonText="8"></Button>
        </div>
        <div>
          <Button buttonColor="dark-grey" buttonText="9"></Button>
        </div>
        <div>
          <Button buttonColor="orange" buttonText="%"></Button>
        </div>
        <div>
          <Button buttonColor="dark-grey" buttonText="4"></Button>
        </div>
        <div>
          <Button buttonColor="dark-grey" buttonText="5"></Button>
        </div>
        <div>
          <Button buttonColor="dark-grey" buttonText="6"></Button>
        </div>
        <div>
          <Button buttonColor="orange" buttonText="-"></Button>
        </div>
        <div>
          <Button buttonColor="dark-grey" buttonText="1"></Button>
        </div>
        <div>
          <Button buttonColor="dark-grey" buttonText="2"></Button>
        </div>
        <div>
          <Button buttonColor="dark-grey" buttonText="3"></Button>
        </div>
        <div>
          <Button buttonColor="orange" buttonText="+"></Button>
        </div>
      </div>
      <div className="bottom-row">
        <div className="button zero-button">
          <Button buttonColor="dark-grey" buttonText="0"></Button>
        </div>
        <div>
          <Button buttonColor="dark-grey" buttonText=","></Button>
        </div>
        <div>
          <Button buttonColor="orange" buttonText="="></Button>
        </div>
      </div>
    </div>
  );
}
export default ButtonsBox;
