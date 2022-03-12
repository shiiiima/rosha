import React from "react";
import "./Roshateam.css";

function RoshaSubTeam({ item }) {
  return (
    <div className="">
      <div className="">
        <img src={item.img} />
      </div>
      <div className="">
        <h3>{item.name}</h3>
        <div>{item.info}</div>
      </div>
    </div>
  );
}
export default RoshaSubTeam;
