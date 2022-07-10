import React, { useState } from "react";
import ToDoItem from "./toDoItem";

function App() {
  const [item, setItem] = useState("");
  const [myList, setMyList] = useState([]);

  function handleChange(event) {
    let text = event.target.value;
    setItem(text);
  }

  function submitItem() {
    setMyList((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={submitItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {myList.map((entry) => (
            <ToDoItem text={entry} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
