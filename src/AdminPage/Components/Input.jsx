import React from "react";

function Input(props) {
  return (
    <div className="block w-[200px] pb-[10%] ">
      <div>
        <p>{props.title}</p>
      </div>
      <div>
        <input
          className="rounded-lg"
          type={props.type}
          name={props.name}
          placeholder={props.display}
        ></input>
      </div>
    </div>
  );
}

export default Input;
