import { Button, Grid } from "@mui/material";
import React from "react"
import Seminars from "./Seminars";
import "./Seminar.css"
function Seminar({item}) {
    console.log(item)
    const { title, text, date,goal,price,img }=item
   

    return (
        <>
            <Grid container className="seminars" >
                <Grid item xs={3} className="img-seminar-holder">
                <img src={img}/>
                </Grid>
                <Grid item xs={9}>
                <div container className="seminar-info-holder">
            <h4>{title}</h4>
            <p>{text}</p>
     
                <Grid container className="btn-info-holder">
                <Grid item xs={12} md={8}  className="seminar-info">
                    <p>تاریخ برگزاری:{date}</p>
                    <p>مخاطبین:{goal}</p>
                    <p>قیمت(ریال):{price}</p>
                    </Grid>
                   <Grid item xs={4}>
                   <Button className="btn-seminar" varianet="contained">کلیک کنید</Button>
                       </Grid>
                      
                  
               </Grid>
       
           </div>
                </Grid>
            </Grid>
           
        </>
    )
}
export default Seminar