import React from "react";
import "./Arzyabi.css";
function ArzyabiCard({ card }) {
  const { text, title, icon } = card;

  return (
    <div className="card">
      <i></i>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}
export default ArzyabiCard;
