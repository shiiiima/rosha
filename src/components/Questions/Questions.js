import React from "react";
import Question from "./Question.js";
import "./Questions.css";
import imgheader from "../../Assets/images/ssss01 1.png";
import FormContact from "../Form/Form";
import { Grid } from "@mui/material";
function Questions() {
  return (
    <>
      <div className="img-holder">
        <img src={imgheader} className="img-roll" />
        <h3 className="head-roll"> سوالات متداول</h3>
      </div>

      <div className="accaredon-question-holder">
        <div className="accaredon-question">
          <Question />
        </div>
      </div>

      <Grid container className="form-holder">
        <Grid item>
          <div className="info-holder">
            <h3> سوال جدید</h3>
            <div className="line"></div>
            <p>
              {" "}
              مرکز رویش و شکوفایی استعداد روشا از سال 1394 با کسب مجوز های لازم
              در حوزه استعدادیابی و استعدادپروری کودک و نوجوان شروع به فعالیت
              های علمی و پژوهشی و ایجاد زیرساخت های لازم و انجام طرح های سراسری
              کرد، با توجه به توسعه فعالیت های این مجموعه از فروردین سال 1400 با
            </p>
          </div>
          <FormContact />
        </Grid>
      </Grid>
    </>
  );
}
export default Questions;
