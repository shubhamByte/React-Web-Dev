import React from "react";

function Detail(props) {
  return (
    <div className="bottom ">
      <p className="info">{props.phone}</p>
      <p className="info">{props.mail}</p>
    </div>
  );
}

export default Detail;
