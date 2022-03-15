import React from "react";
import "./Roshateam.css";

function RoshaSubTeam({ item }) {
  return (
    <>
      <div className="">
        <img src={item.img} />
      </div>
      <div className="roshasubteam-info-holder">
        <h3>{item.name}</h3>
        <p>{item.info}</p>
      </div>
    </>
  );
}
export default RoshaSubTeam;
