import React from "react";
import "./Card.css"
function Card ({item}){
   const {text,images}=item

    console.log(text);

    
    return(
        <div className="card">
        <img src={images}/>
        <h3>{text}</h3>
        
        </div>
    )
}
export default Card;