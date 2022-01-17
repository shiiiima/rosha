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
import FormContact from "./components/Form/Form";
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
      {/* <Questions/>  */}
      {/* <Rolls /> */}
      {/* <Seminars /> */}
      <ContactUs />
      {/* <AboutUs />
      // <RegisterMail /> */}
      {/* // <FormContact /> */}
      {/* <Gallery/> */}
      <Footer />
    </>
  );
}
export default App;
