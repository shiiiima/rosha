import React from "react";
import "./Seminar.css"
function SeminarCard({ card }) {
    const { number, title, icon } = card
    
    return (
        <div className="card">
            <i></i>
            <h4>{number}</h4>
            <p>{title}</p>
        </div>
        
    )
    
}
export default SeminarCard;