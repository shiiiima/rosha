import { Grid, TextField } from "@mui/material";
import React, { Component, useEffect } from "react";

import Button from "@mui/material/Button";

import { Formik, Form } from "formik";
import * as yup from "yup";
import "./Form.css";
import axios from "axios";
import InputField from "../Basics/InputField";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  note: "",
};

const validationSchema = yup.object({
  first_name: yup.string().required("Required"),
  last_name: yup.string().required("Required"),
  email: yup.string().email("invalid email format").required("Required"),
  note: yup.string().required("Required"),
});

function FormContact() {
  function PostData(valuesFormik) {
    axios
      .post(
        "http://localhost:8000/api/contact",
        valuesFormik,
        "{{ csrf_token() }}"
      )
      .then((res) => {
        console.log("success", res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  useEffect(() => {
    PostData();
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        PostData(values);
      }}
    >
      {/* <div className="form-holder">
        <div className="info-header2">
          <h4>فرم تماس</h4>
          <div className="line1"></div>
          <p>برای این که با شما تماس بگیریم لطفا فرم زیر را پر کنید</p>
        </div>


      </div> */}
      {(formik) => {
        return (
          <Form onSubmit={formik.handleSubmit}>
            <Grid container className="form-contorol-holder">
              {/* <TextField
                label="نام"
                name={"first_name"}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.first_name}
                error={Boolean(
                  formik.touched.first_name && formik.errors.first_name
                )}
                helperText={
                  formik.touched.first_name && formik.errors.first_name
                }
              />
              <TextField
                label="نام خانوادگی "
                name={"last_name"}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.first_name}
                error={Boolean(
                  formik.touched.last_name && formik.errors.last_name
                )}
                helperText={formik.touched.last_name && formik.errors.last_name}
              />
              <TextField
                label="ایمیل"
                name={"email"}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.first_name}
                error={Boolean(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                label="شماره همراه "
                name={"phone"}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.first_name}
                error={Boolean(formik.touched.phone && formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
              <TextField
                label="پیام"
                name={"note"}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.first_name}
                error={Boolean(formik.touched.note && formik.errors.note)}
                helperText={formik.touched.note && formik.errors.note}
              /> */}
              <InputField label="نام  " name="first_name" />
              <InputField label="نام خانوادگی " name="last_name" />
              {/* <TextField
                  id="filled-basic"
                  label=" نام خانوادگی"
                  variant="filled"
                  className="input-form"
                  name=""
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  helperText={formik.touched.lastname && formik.errors.lastname}
                  error={
                    formik.touched.lastname && Boolean(formik.errors.lastname)
                  }
                  // {...Formik.getFieldProps("lastname")}
                /> */}
              {/* <ErrorMessage name="lastname" component={TextError} /> */}
              {/* {formik.touched.lastname && formik.errors.lastname ? (
                      <div>{formik.errors.lastname}</div>
                    ) : null} */}

              <InputField label="ایمیل " name="email" />
              <InputField label="شماره همراه " name="phone" />
              <InputField label="پیام " name="note" />

              {/* {formik.touched.comment && formik.errors.comment ? (
                        <div>{formik.errors.comment}</div>
                      ) : null} */}
              <Button variant="contained" className="btn-send" type="submit">
                ارسال
              </Button>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormContact;
