import React from "react";
import image from "../../Assets/images/تماس با ما 1.png";
import Form from "../Form/Form";
import GoogleMapComponent from "./Google.js";

import "./ContactUs.css";
function ContactUs(props) {
  return (
    <div className="">
      <div className="img-holder">
        <img src={image} className="img-roll" />
        <h3 className="head-roll">ارتباط با ما</h3>
      </div>
      <div className="info-holder1">
        <h4>لورم ایپسوم متن ساختگی </h4>
        <div className="line"></div>
        <p>
          {" "}
          نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
          تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
          باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
          جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
          طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
          ایجاد کرد. */
        </p>
      </div>
      <div className="info-holder1">
        <h4>تماس با ما</h4>
        <div className="line"></div>
        <p> برای رزرو مشاوره و سوالات خود، با ما تماس بگیرید </p>
      </div>

      <GoogleMapComponent />
      {/* <Form /> */}
    </div>
  );
}
export default ContactUs;
