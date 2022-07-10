import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [greet, setGreet] = useState("");

  function change(event) {
    setName(event.target.value);
  }
  function greeting() {
    setGreet(name);
  }

  return (
    <div className="container">
      <h1>Hello {greet} </h1>
      <input
        onChange={change}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={greeting}>Submit</button>
    </div>
  );
}

export default App;
