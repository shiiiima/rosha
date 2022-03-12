import axios from "axios";
import React, { useEffect, useState } from "react";
import Advisor from "./Advisor";

function Advisors() {
  const [advisor, setAdvisor] = useState([]);
  function getInfo() {
    axios
      .get("http://localhost:8000/api/advisors")

      .then((res) => {
        setAdvisor(res.data.advisors.data);
      });
  }
  useEffect(() => {
    getInfo();
  }, []);
  console.log(advisor);
  return (
    <>
      {advisor.map((item, index) => {
        return <Advisor item={item} index={item.id} />;
      })}
    </>
  );
}
export default Advisors;
