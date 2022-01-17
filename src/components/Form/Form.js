import { Grid } from "@mui/material";
import React from "react";

import Button from "@mui/material/Button";

import { Formik, Form } from "formik";
import * as yup from "yup";
import "./Form.css";
import axios from "axios";
import InputField from "../Basics/InputField";

const initialValues = {
  name: "",
  lastname: "",
  email: "",
  comment: "",
};

// const validate= (values) => {
//     let errors = {};
//     if (!values.name) {
//       errors.name = "Required";
//     }
//     if (!values.lastname) {
//       errors.lastname = "Required";
//     }
//     if (!values.email) {
//       errors.email = "Required";
//     }
//     else if (!/^[A-Z0-9._%+-]+@[A-Z0-0.-] +\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email="invalid email format"
//       }
//     if (!values.comment) {
//       errors.comment = "Required";
//     }
//     return errors;
// },
const validationSchema = yup.object({
  name: yup.string().required("Required"),
  lastname: yup.string().required("Required"),
  email: yup.string().email("invalid email format").required("Required"),
  comment: yup.string().required("Required"),
});

function FormContact() {
  //   const formik = useFormik({
  //     initialValues,
  //     onSubmit,
  //     validate,
  //   });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        actions.preventDefault();
        
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validateOnMount
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
              <InputField label="نام" name="name" />

              <InputField label="نام خانوادگی " name="lastname" />
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

              <InputField label="پیام " name="comment" />

              {/* {formik.touched.comment && formik.errors.comment ? (
                        <div>{formik.errors.comment}</div>
                      ) : null} */}
              <Button
                variant="contained"
                className="btn-send"
                type="submit"
                fullWidth
              >
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
