import React from "react";
import "./Roshateam.css";
function Roshateam({ item }) {
  return (
    <div className="worker-wrapper">
      <div className="worker-wrapper-img">
        <div className="blue-img"></div>
        <img src={item.img} />
      </div>
      <div className="worker-wrapper-text">
        <h3>{item.name}</h3>
        <div>{item.info}</div>
      </div>
    </div>
  );
}
export default Roshateam;
