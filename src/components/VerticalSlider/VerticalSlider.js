import { Box, Container, Grid, Stack } from "@mui/material"
import React from "react"
import "./VerticalSlider.css"
function VerticalSlider() {
  return (
    <Box className="vertical-slider">
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 1, md: 4 }}
        >
          <div className="texts-holder">
            <h3 className="header-vertical">
              نحوه تشخیص و رفتار با کودکان بیش فعال
            </h3>
            <p className="text-vertical">
              خصوص به ویژه مشکلات روحی و روانی باعث ایجاد مشکلات بسیار زیادی در
              آینده فرزند خود خواهند شد. یکی از بزرگترین مسئولیت هایی که بر
              عهده انسان است تربیت فرزند و رسیدگی به احتیاجات جسمی و روحی کودک
              می باشد . والدین در صورت سهل انگاری در این
            </p>
          </div>
          <div className="date">
            <div className="date-text">
              <h3>
                10 <br />
                اسفند <br /> 1400
              </h3>
            </div>
          </div>
        </Stack>
        <Grid container>
          <Grid item xs={12} sm={12} md={10}></Grid>
          <Grid item xs={12} sm={12} md={2} className="date-holder"></Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export default VerticalSlider
