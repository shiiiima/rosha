import { Grid } from "@mui/material";
import React from "react"
import "./VerticalSlider.css"
function VerticalSlider (){
    return(
        <Grid container className="vertical-slider">
           
            <Grid item xs={12} sm={12} md={4} className="date-holder">
                <div className="date">
                    <div className="date-text"><h3>10 <br/>اسفند <br/> 1400</h3></div>

                </div>
                </Grid>
                <Grid item xs={12} sm={12} md={8} >
               <div className="texts-holder">
               <h3 className="header-vertical">نحوه تشخیص و رفتار با کودکان بیش فعال</h3>
                <p className="text-vertical">
                خصوص به ویژه مشکلات روحی و روانی باعث ایجاد مشکلات بسیار زیادی در آینده فرزند خود خواهند شد. یکی از بزرگترین مسئولیت هایی که بر عهده انسان است تربیت فرزند و رسیدگی به احتیاجات جسمی و روحی کودک می باشد . والدین در صورت سهل انگاری در این
                </p>
               </div>
            </Grid>
        </Grid>

    )
}
export default VerticalSlider;