import React from "react";
import img1 from "../../Assets/images/WhatsApp Image 2021-10-24 at 11.50.44 AM.jpeg";
import img2 from "../../Assets/images/WhatsApp Image 2021-10-24 at 11.50.45 AM.jpeg";
import img3 from "../../Assets/images/WhatsApp Image 2021-10-24 at 11.50.49 AM.jpeg";
import img4 from "../../Assets/images/WhatsApp Image 2021-10-24 at 11.50.54 AM.jpeg";
import img5 from "../../Assets/images/zwcp qyayub.jpg";
import img6 from "../../Assets/images/WhatsApp Image 2021-10-24 at 11.51.11 AM.jpeg";
import img7 from "../../Assets/images/WhatsApp Image 2021-10-24 at 11.51.05 AM.jpeg";
import img8 from "../../Assets/images/WhatsApp Image 2021-10-24 at 11.51.05 AM (1).jpeg";
import img9 from "../../Assets/images/WhatsApp Image 2021-10-24 at 11.51.01 AM.jpeg";

import "./Gallery.css";


function Gallery (){
    const data=[
        {
            id:1,
            image:img1
        },
        {
            id:2,
            image:img2
        },
        {
            id:3,
            image:img3
        },
        {
            id:4,
            image:img4
        },
        {
            id:5,
            image:img5
        },
        {
            id:6,
            image:img6
        },
        {
            id:7,
            image:img7
        },
        {
            id:8,
            image:img8
        },
        {
            id:9,
            image:img9
        },
    ]
    return(
        <>
        <div className="gallery">
            {data.map((item,index)=>{
                return(
                    <div className="pics" key={index}>
                        <img src={item.image} style={{width:"100%"}}/>
                    </div>

                )
            })}
        </div>
        </>
        
    )
}
export default Gallery;