import React from "react";
import Sidebar from "../components/Slider/Slider";
import VerticalSlider from "../components/VerticalSlider/VerticalSlider";
import CardWrapper from "../components/CardsWrapper/CardWrapper";
import VideoWrapper from "../components/VideoWrapper/VideoWrapper";
import GroupSlider from "../components/VideoWrapper/VideoWrapper";
import PackageSlider from "../components/PackageSlider/PackageSlider";

function HomePage() {
  return (
    <>
      <Sidebar />
      <VerticalSlider />
      <CardWrapper />
      {/* <VideoWrapper/> */}
      <GroupSlider />
      <PackageSlider />
    </>
  );
}
export default HomePage;
