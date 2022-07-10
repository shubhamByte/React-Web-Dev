import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.handleFunc} type="text" value={props.text} />
      <button onClick={props.addFunc}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
