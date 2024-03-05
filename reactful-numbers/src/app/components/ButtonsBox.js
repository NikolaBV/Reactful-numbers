import React from "react";
import Button from "./Button";

function ButtonsBox({ setInputValue, clearInput, invertSign, percentage }) {
  return (
    <div className="buttons-box">
      <div className="grid-container">
        <div>
          <Button
            buttonColor="grey"
            buttonText="AC"
            onClick={() => clearInput()}
          ></Button>
        </div>
        <div>
          <Button
            buttonColor="grey"
            buttonText="+/-"
            onClick={() => invertSign()}
          ></Button>
        </div>
        <div>
          <Button
            buttonColor="grey"
            buttonText="%"
            onClick={() => percentage()}
          ></Button>
        </div>
        <div>
          <Button buttonColor="orange" buttonText="/"></Button>
        </div>
        <div>
          <Button
            buttonColor="dark-grey"
            buttonText="7"
            onClick={() => setInputValue("7")}
          ></Button>
        </div>
        <div>
          <Button
            buttonColor="dark-grey"
            buttonText="8"
            onClick={() => setInputValue("8")}
          ></Button>
        </div>
        <div>
          <Button
            buttonColor="dark-grey"
            buttonText="9"
            onClick={() => setInputValue("9")}
          ></Button>
        </div>
        <div>
          <Button buttonColor="orange" buttonText="%"></Button>
        </div>
        <div>
          <Button
            buttonColor="dark-grey"
            buttonText="4"
            onClick={() => setInputValue("4")}
          ></Button>
        </div>
        <div>
          <Button
            buttonColor="dark-grey"
            buttonText="5"
            onClick={() => setInputValue("5")}
          ></Button>
        </div>
        <div>
          <Button
            buttonColor="dark-grey"
            buttonText="6"
            onClick={() => setInputValue("6")}
          ></Button>
        </div>
        <div>
          <Button
            buttonColor="orange"
            buttonText="-"
            onClick={() => setInputValue("-")}
          ></Button>
        </div>
        <div>
          <Button
            buttonColor="dark-grey"
            buttonText="1"
            onClick={() => setInputValue("1")}
          ></Button>
        </div>
        <div>
          <Button
            buttonColor="dark-grey"
            buttonText="2"
            onClick={() => setInputValue("2")}
          ></Button>
        </div>
        <div>
          <Button
            buttonColor="dark-grey"
            buttonText="3"
            onClick={() => setInputValue("3")}
          ></Button>
        </div>
        <div>
          <Button
            buttonColor="orange"
            buttonText="+"
            onClick={() => setInputValue("+")}
          ></Button>
        </div>
      </div>
      <div className="bottom-row">
        <div className="button zero-button">
          <Button
            buttonColor="dark-grey"
            buttonText="0"
            onClick={() => setInputValue("0")}
          ></Button>
        </div>
        <div>
          <Button
            buttonColor="dark-grey"
            buttonText=","
            onClick={() => setInputValue(",")}
          ></Button>
        </div>
        <div>
          <Button buttonColor="orange" buttonText="="></Button>
        </div>
      </div>
    </div>
  );
}
export default ButtonsBox;
