import React from "react";
import Avatar from "./Avatar";
import Detail from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p> {props.num} </p>
        <h2 className="name">{props.name}</h2>
        <Avatar src={props.src} />
      </div>

      <Detail phone={props.phone} mail={props.mail} />
    </div>
  );
}

export default Card;
