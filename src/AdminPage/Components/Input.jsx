import React from "react";

function Input(props) {
  return (
    <div className="block w-[200px] pb-[10%]">
      <div>
        <lable>{props.title}</lable>
      </div>
      <div>
        <input type={props.type} placeholder={props.display}></input>
      </div>
    </div>
  );
}

export default Input;
