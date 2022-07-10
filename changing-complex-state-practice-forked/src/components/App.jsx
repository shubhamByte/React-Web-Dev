import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateName(event) {
    let inputForm = event.target.name;
    let data = event.target.value;

    setContact((prevValue) => {
      if (inputForm === "fName") {
        return { ...prevValue, fName: data };
      } else if (inputForm === "lName") {
        return { ...prevValue, lName: data };
      } else if (inputForm === "email") {
        return { ...prevValue, email: data };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={updateName}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={updateName}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={updateName}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
