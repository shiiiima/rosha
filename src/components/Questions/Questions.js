import React from "react";
import Question from "./Question.js"
import "./Questions.css"
import imgheader from "../../Assets/images/ssss01 1.png"
import Form from "../Form/Form"
function Questions() {
    return (
        <>
                         <div className="img-holder">
                <img src={imgheader} className="img-roll"/>
                <h3 className="head-roll"> سوالات متداول</h3>
            </div>
            
            <div className="accaredon-question-holder">
            <div className="accaredon-question">
            <Question />
            </div>
</div>

            <Form />
            
        </>
        
    )
}
export default Questions;