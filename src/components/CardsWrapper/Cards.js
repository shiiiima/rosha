import React from "react";
import Card from "./Card";
import "./Card.css"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import imgazmoon from "../../Assets/images/آزمون.ico"
import imgqarbal from "../../Assets/images/غربالگری (1).ico"
import imgestedad from "../../Assets/images/استعدادیابی.ico"
import imgmoshavere from "../../Assets/images/مشاوره.ico"
function Cards(){
    const cardsInfo=[
     {
         key:1,
         images:imgazmoon,
         text:"آزمون"
     },
     {
        key:2,
        images:imgqarbal,
        text:"غربال گری"
    },
    {
        key:3,
        images:imgestedad,
        text:"استعداد یابی"
    },
    {
        key:4,
        images:imgmoshavere,
        text:"مشاوره"
    }
 
    ]
    return(
        <Box className="cards-wrapper "  justify="center" sx={{ flexGrow: 1 }}>
            
            <Grid className="cards" container   justify="flex-end"
alignItems="center" spacing={3}>
                {cardsInfo.map((items,index)=>{
                    return(
                        <Grid item xs={12} sm={6} md={3} key={index}>
                           <Card key={index} item={items}/>
                      </Grid>

                  
                    )
                })}
            </Grid>
        </Box>
    )

}
export default Cards;


