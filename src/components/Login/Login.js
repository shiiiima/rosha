// import React, { useState, useEffect, useRef, useContext } from "react";
// import { Formik, Form } from "formik";
// import * as yup from "yup";
// import { Button, Grid, TextField } from "@mui/material";
// import AuthContext from "../Context/AuthProvider";
// import axios from "axios";
// import HomePage from "../HomePage";

// function Login(valuesFormik) {
//   const { setAuth } = useContext(AuthContext);
//   const userRef = useRef();
//   const errRef = useRef();
//   const [user, setUser] = useState("");
//   const [pass, setPass] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);
//   //   const initialValues = {
//   //     username: "",
//   //     password: "",
//   //   };
//   //   const validationSchema = yup.object({
//   //     username: yup.string().required("require"),
//   //     password: yup.string().required("required"),
//   //   });

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   useEffect(() => {
//     setErrMsg("");
//   }, [user, pass]);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:8000/api/login",
//         JSON.stringify(user, pass),

//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${"6|JGEabOBjHSDgGVi54OuMvs3lU97iPdAgemH6791v"}`,
//           },
//         }
//       );
//       console.log(response);

//       const accessToken = response?.config?.accessToken;
//       const roles = response?.config?.roles;
//       setAuth({ user, pass, roles, accessToken });
//       setUser("");
//       setPass("");

//       setSuccess(true);
//     } catch (err) {
//       if (!err?.response) {
//         setErrMsg("no server response");
//       } else if (err.response?.status === 400) {
//         setErrMsg("missing user or pass");
//       } else if (err.response?.status === 403) {
//         setErrMsg("unauthorized");
//       } else {
//         setErrMsg("login failed");
//       }
//       errRef.current.focus();
//     }
//   };
//   return (
//     <>
//       {success ? (
//         <HomePage />
//       ) : (
//         // <Formik
//         //   initialValues={initialValues}
//         //   validationSchema={validationSchema}
//         //   onSubmit={handleSubmit}
//         // >
//         //   {(formik) => {
//         //     return (
//         <form onSubmit={handleSubmit}>
//           <Grid container>
//             <Grid item>
//               <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
//                 {errMsg}
//               </p>
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={12}>
//               {/* <TextField
//                       type="text"
//                       label="username"
//                       name="username"
//                       ref={userRef}
//                       onBlur={formik.handleBlur}
//                       onChange={formik.handleChange}
//                       value={formik.values.username}
//                       error={Boolean(
//                         formik.touched.username && formik.errors.username
//                       )}
//                       helperText={
//                         formik.touched.username && formik.errors.username
//                       }
//                     /> */}
//               <input
//                 type="text"
//                 id="user"
//                 ref={userRef}
//                 onChange={(e) => setUser(e.target.value)}
//                 value={user}
//                 required
//               />
//               <input
//                 type="password"
//                 id="password"
//                 onChange={(e) => setPass(e.target.value)}
//                 value={pass}
//                 required
//               />
//             </Grid>

//             <Grid item xs={12}>
//               {/* <TextField
//                       type="password"
//                       label="password"
//                       name="password"
//                       onBlur={formik.handleBlur}
//                       onChange={formik.handleChange}
//                       value={formik.values.password}
//                       error={Boolean(
//                         formik.touched.password && formik.errors.password
//                       )}
//                       helperText={
//                         formik.touched.password && formik.errors.password
//                       }
//                     /> */}
//             </Grid>
//             <Grid item xs={12}>
//               <Button type="submit" onClick={handleSubmit}>
//                 send
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//         //     );
//         //   }}
//         // </Formik>
//       )}
//     </>
//   );
// }
// export default Login;

///ok codes

// import { useAuth } from "../Context/AuthProvider";
// import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import { loginAPI } from "../../Service/api/index";

// export const ERROR_MESSAGES = {
//   "Cannot find user": "کاربری با این ایمیل یافت نشد!",
//   "Incorrect password": "گذرواژه اشتباه می‌باشد!",
// };

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const onEmailInputChange = (event) => setEmail(event.target.value);
//   const onPasswordInputChange = (event) => setPassword(event.target.value);
//   const { toggleAuth, user } = useAuth();
//   const history = useHistory();

//   useEffect(() => {
//     if (user.loggedIn) {
//       history.push("/login");
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleLogin = (event) => {
//     event.preventDefault();

//     loginAPI({
//       email,
//       password,
//     })
//       .then(() => {
//         toggleAuth();
//         // history.push("/login");
//         console.log("okkkkkk");
//       })
//       //   .catch((err) => setError(() => err.response.data));
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-4">
//           {error && (
//             <div className="alert alert-danger" role="alert">
//               {ERROR_MESSAGES[error] ?? error}
//             </div>
//           )}
//           <div className="">
//             <form className="card-body" onSubmit={handleLogin}>
//               <div className="mb-3">
//                 <label htmlFor="exampleInputEmail1" className="form-label">
//                   ایمیل
//                 </label>
//                 <input
//                   onChange={onEmailInputChange}
//                   value={email}
//                   type="email"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                 />
//                 {/*<div id="emailHelp" className="form-text text-danger">ایمیل معتبر نمی‌باشد!</div>*/}
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="exampleInputPassword1" className="form-label">
//                   گذرواژه
//                 </label>
//                 <input
//                   value={password}
//                   onChange={onPasswordInputChange}
//                   type="password"
//                   className="form-control"
//                   id="exampleInputPassword1"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="btn btn-primary"
//                 disabled={!email || !password}
//               >
//                 ورود
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import { useAuth } from "../Context/AuthProvider";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { loginAPI } from "../../Service/api";

export const ERROR_MESSAGES = {
  "Cannot find user": "کاربری با این ایمیل یافت نشد!",
  "Incorrect password": "گذرواژه اشتباه می‌باشد!",
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onEmailInputChange = (event) => setEmail(event.target.value);
  const onPasswordInputChange = (event) => setPassword(event.target.value);
  const { toggleAuth, user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (user.loggedIn) {
      history.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleLogin = (event) => {
    event.preventDefault();

    loginAPI({
      email,
      password,
    })
      .then((res) => {
        toggleAuth();
        history.push("/");
      })
      //   .catch((err) => setError(() => err.response.data));
      .catch(console.log("err"));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4">
          {error && (
            <div className="alert alert-danger" role="alert">
              {ERROR_MESSAGES[error] ?? error}
            </div>
          )}
          <div className="card">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  ایمیل
                </label>
                <input
                  onChange={onEmailInputChange}
                  value={email}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                {/*<div id="emailHelp" className="form-text text-danger">ایمیل معتبر نمی‌باشد!</div>*/}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  گذرواژه
                </label>
                <input
                  value={password}
                  onChange={onPasswordInputChange}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!email || !password}
              >
                ورود
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
