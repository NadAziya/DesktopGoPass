import React from "react";
import ReactDOM from "react-dom";

const ButtonMain = (props) => {
  return (
    <button className={props.className} type="submit" onClick={props.onClick}>
      {props.children}
      <span> {props.buttonTitle} </span>
    </button>
  );
};
export default ButtonMain;
