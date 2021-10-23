import { Grid } from "@mui/material";
import React from "react";
import "./VideoWrapper.css"
function VideoWrapper (){
    return(
        <Grid container spacing={2} className="section3">
        <Grid className="video-wrapper" item xs={12} sm={12} md={6}>
            <h3 className="header-video">یک دقیقه با روشا</h3>
            <p className="text-video">مناسب برای خود فکر... جای آنکه به انتخاب های رایج در جامعه فکــــــــــــــــــر کند، به انتخاب درســـت در زندگی اش کمک می کند. در واقع می شـــود گفت او »به شــناســایی درســـت اســـتعدادها، به افراد در داشـــتن انتخاب های گیری آینده تحصـــــــــــــيلي و شغلي افراد خواهد بود. به همین دلیل مطالعه و بهبود اين ويژگيهاي ذاتي راهگشــــــــــاي موفقيت و جهت اســـــتعدادها و گونههاي رفتاري متفاوتي اســـــت كه شــــــناســــــايي، انسان يكي از پيچيده ترين مخلوقات عالم هستي، داراي قابليتها،<strong className=""><a href="">ادامه مطلب</a></strong></p>
            
        </Grid>
        <Grid className="video-holder" item xs={12} sm={12} md={6} >
           <div className="border-video">
           <video controls>
            <source src="../../../src/Assets/videos/video11.mp4" type="video/mp4"/>

            </video>
           </div>
        </Grid>
        </Grid>
    )
}
export default VideoWrapper;