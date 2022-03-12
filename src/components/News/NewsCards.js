import { Grid } from "@mui/material";
import React from "react";
import "./News.css";
function NewsCard({ item }) {
  const { data, title, short_content } = item;
  console.log(item);

  return (
    <>
      <div className="img-holder">
        <img src={data} />
      </div>
      <div className="text-holder">
        <h3>{title}</h3>
        <p>{short_content}</p>
      </div>
    </>
  );
}
export default NewsCard;
