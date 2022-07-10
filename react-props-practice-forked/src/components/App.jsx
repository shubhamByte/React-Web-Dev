import React from "react";
import contacts from "../contacts";
import Card from "./card";

function create_card(contact) {
  return (
    <Card
      key={contact.id}
      num={contact.id}
      src={contact.imgURL}
      phone={contact.phone}
      mail={contact.email}
      name={contact.name}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(create_card)};
    </div>
  );
}

export default App;
