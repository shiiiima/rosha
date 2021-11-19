import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardWrapper from "./components/CardsWrapper/CardWrapper";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Slider/Slider";
import VideoWrapper from "./components/VideoWrapper/VideoWrapper";
import GroupSlider from "./components/GroupSlider/GroupSlider";
import PackageSlider from "./components/PackageSlider/PackageSlider";
import "../src/App.css";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import HomePage from "../src/components/HomePage";
import VerticalSlider from "./components/VerticalSlider/VerticalSlider";
import Rolls from "./components/rolls/Rolls";
import RegisterMail from "./components/RegisterMail/RegisterMail";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";

import Seminars from "./components/Seminars/Seminars";
import Questions from "./components/Questions/Questions";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route></Route>
        </Switch>
      </Router>
      {/* <HomePage/> */}
      {/* <Questions/> */}
<<<<<<< HEAD
<ContactUs/>
   <RegisterMail/>
=======
      {/* <Rolls /> */}
      <AboutUs />
      <RegisterMail />
>>>>>>> dad30d89c3037daf284ab09a961eb5a5bf7cb3e8
      {/* <Gallery/> */}
      <Footer />
    </>
  );
}
export default App;
