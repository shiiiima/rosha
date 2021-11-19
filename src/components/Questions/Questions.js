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
            <div className="new-question">
            <div  className="info-holder1">
                    <h4>سوال جدید </h4>
                <div className="line"></div>
                <p> نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. */

                </p>
                </div>
            
                
            </div>
            <Form />
            
        </>
        
    )
}
export default Questions;