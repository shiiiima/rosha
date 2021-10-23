
import React  from "react";
import {BrowserRouter as Router, Route , Switch } from "react-router-dom";
import CardWrapper from "./components/CardsWrapper/CardWrapper";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Slider/Slider";
import VideoWrapper from "./components/VideoWrapper/VideoWrapper"
import GroupSlider from "./components/GroupSlider/GroupSlider"
import PackageSlider from "./components/PackageSlider/PackageSlider"
import "../src/App.css"


function App (){
  return(
<>
      <Router>
      <Navbar/>
      <Switch>
        <Route></Route>
      </Switch>
      </Router>
      <Sidebar/>
      <CardWrapper/>
      <VideoWrapper/>
      <GroupSlider/>
      <PackageSlider/>




</>
  )
 

}
export default App;