import React from "react";
import { Grid } from "@mui/material";
const GoogleMapComponents = () => {
  return (
    // <iframe
    //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1001.2472659784956!2d59.591083533069074!3d36.27365867745285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6c91d4853aadad%3A0x20b5686fcdfad4b5!2z2YfYqtmEINir2KfZhdmGINmF2LTZh9iv!5e0!3m2!1sen!2sus!4v1643201646465!5m2!1sen!2sus"
    //   width="600"
    //   height="450"
    //   allowfullscreen=""
    //   loading="lazy"
    // ></iframe>
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.033638913015!2d51.37288165543435!3d35.72756374238894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x92a24f4f6bd4bdd4!2sFaculty%20of%20Psychology%20and%20Educational%20Sciences!5e0!3m2!1sen!2s!4v1643807925128!5m2!1sen!2s"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <div className="info-wrapper">
            <h4>لورم ایپسوم متن ساختگی با تولید سادگی</h4>
            <div className="info">
              <i></i>
              <p>تلفن:۱۲۳۴۵۶۷۸۹</p>
            </div>
            <div className="info">
              <i></i>
              <p>آدرس:گیشا مرکز رشد</p>
            </div>
            <div className="info">
              <i></i>
              <p>آدرس پست الکترونیکی: rosha@gmail.com</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.072400359185!2d51.35360111605098!3d35.70429009045508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00a8bc1a7e63%3A0x61a5a909b878501!2sSharif%20University%20of%20Technology!5e0!3m2!1sen!2s!4v1643808686930!5m2!1sen!2s"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <div className="info-wrapper">
            <h4>لورم ایپسوم متن ساختگی با تولید سادگی</h4>
            <div className="info">
              <i></i>
              <p>تلفن:۱۲۳۴۵۶۷۸۹</p>
            </div>
            <div className="info">
              <i></i>
              <p>آدرس:گیشا مرکز رشد</p>
            </div>
            <div className="info">
              <i></i>
              <p>آدرس پست الکترونیکی: rosha@gmail.com</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default GoogleMapComponents;
