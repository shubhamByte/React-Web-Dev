import React, { useState } from "react";

function App() {
  let [time, update] = useState(new Date().toLocaleTimeString());

  function timeNow() {
    update(new Date().toLocaleTimeString());
  }
  setInterval(timeNow, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={timeNow}>Get Time</button>
    </div>
  );
}

export default App;
