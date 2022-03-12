import React from "react";

function Advisor({ item }) {
  return (
    <div className="worker-wrapper">
      <div className="worker-wrapper-img">
        <div className="blue-img"></div>
        <img src={item.img} />
      </div>
      <div className="worker-wrapper-text">
        <h3>{item.name}</h3>
        <p>{item.info}</p>
      </div>
    </div>
  );
}
export default Advisor;
