import React, { useState } from "react";

function ToDoItem(props) {
  let [status, setStatus] = useState(false);
  function changeStatus() {
    setStatus(true);
  }

  return (
    <li
      onClick={changeStatus}
      style={{ textDecoration: status ? "line-through" : "none" }}
    >
      {" "}
      {props.text}{" "}
    </li>
  );
}

export default ToDoItem;
