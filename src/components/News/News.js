import axios from "axios";
import React, { useState } from "react";
import NewsCard from "./NewsCards";
import { Grid } from "@mui/material";
function News() {
  const [news, setNews] = useState([]);
  axios.get("http://localhost:8000/api/news").then((res) => {
    setNews(res.data.news.data);
  });
  return (
    <>
      <Grid container>
        {news.map((item, index) => {
          return;
          <Grid item xs={12} md={4}>
            <NewsCard item={item} />;
          </Grid>;
        })}
      </Grid>
    </>
  );
}
export default News;
