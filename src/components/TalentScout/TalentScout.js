import { Grid } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import image from "../../Assets/images/unsplash_KdeqA3aTnBY (1).png";
function Talent_scout() {
  const [talentInfo, setTalentInfo] = useState("");
  function Getinfo() {
    axios.get("http://localhost:8000/api/service-page/10").then((res) => {
      console.log(res);
    });
  }
  useEffect(() => {
    Getinfo();
  }, []);
  return (
    <>
      <div className="img-holder">
        <img src={image} className="img-roll" />
        <h3 className="head-roll"> مشاوره های حضوری </h3>
      </div>
      <div>
        <h3> مشاوره های من</h3>
        <div className="line"></div>
      </div>
      <Grid container className="talent-scout-wrapper"></Grid>
    </>
  );
}
export default Talent_scout;
