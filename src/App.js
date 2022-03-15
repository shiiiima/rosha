import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardWrapper from "./components/CardsWrapper/CardWrapper";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Slider/Slider";
import VideoWrapper from "./components/VideoWrapper/VideoWrapper";
import GroupSlider from "./components/GroupSlider/GroupSlider";
import PackageSlider from "./components/PackageSlider/PackageSlider";
import "../src/App.css";
import Galleryy from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import HomePage from "../src/components/HomePage";
import VerticalSlider from "./components/VerticalSlider/VerticalSlider";
import Rolls from "./components/rolls/Rolls";
import RegisterMail from "./components/RegisterMail/RegisterMail";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import Formonline from "./components/Form-Online/Formonline";
import Seminars from "./components/Seminars/Seminars";
import Questions from "./components/Questions/Questions";
import FormContact from "./components/Form/Form";
import Advisors from "./components/Advisors/Advisors";
import IranMap from "./components/Branches/Iran";
import Roshateams from "./components/Roshateam/Roshateams";
import CoWorkers from "./components/Co-Workers/Co-Workers";
import Reserve from "./components/reserveExam/ReserveExam";
import News from "./components/News/News";
import Service from "./components/Services/Service";
import Branches from "./components/Branches/Branches";
import Arzyabi from "./components/Arzyabi/Arzyabi";

import { createTheme } from "@mui/material/styles";
import Talent_scout from "./components/TalentScout/TalentScout";
import Login from "./components/Login/Login";
import { AuthProvider } from "./components/Context/AuthProvider";

const theme = createTheme({
  direction: "rtl",
});
function App() {
  return (
    <>
      <Router dir="rtl">
        <Navbar />
        <Switch>
          <Route path={"/"} exact component={HomePage} />

          <Route path={"/questions"} component={Questions} />

          <Route path={"/contact"} component={ContactUs} />
          <Route path={"/about-us"} component={AboutUs} />
          <Route path={"/gallery"} component={Galleryy} />
          <Route path={"/seminars"} component={Seminars} />
          <Route path={"/rolls"} component={Rolls} />
          <Route path={"/advisors"} component={Advisors} />
          <Route path={"/roshateam"} component={Roshateams} />
          <Route path={"/co-workers"} component={CoWorkers} />
          <Route path={"/reserve"} component={Reserve} />
          <Route path={"/news"} component={News} />
          <Route path={"/branches"} component={Branches} />
          <Route path={"/services"} component={Service} />
          <Route path={"/arzyabi"} component={Arzyabi} />
          <Route path={"/talent-scout"} component={Talent_scout} />
          <Route path={"/login"} component={Login} />
        </Switch>
      </Router>
      {/* <IranMap /> */}
      {/* <Rolls /> */}
      {/* <Seminars /> */}
      {/* <ContactUs /> */}
      {/* <AboutUs />
      // // <RegisterMail /> */}
      {/* // <FormContact /> */}
      {/* <Formonline /> */}
      {/* <Galleryy /> */}
      <Footer />
    </>
  );
}
export default App;
