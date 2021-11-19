import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./RegisterMail.css";
function RegisterMail() {
  return (
    <div className="register-holder">
      <div className="register">
        <div className="register-box">
          <Button variant="contained" className="btn-register">
            ثبت
          </Button>

          <TextField
            id="filled-basic"
            label="ایمیل"
            variant="filled"
            className="input-register"
          />
        </div>

        <div className="info-register">
          <h4>
            ایمیل خبرنامه<i className="fa fa-mail"></i>
          </h4>
          <p>ارسال اخبار و مقالات</p>
        </div>
      </div>
    </div>
  );
}
export default RegisterMail;
