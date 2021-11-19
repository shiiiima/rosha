import React from "react";
import Grid from '@mui/material/Grid';
import "./footer.css"
import instgram from "../../Assets/images/instagram_logo_icon_173070.png"
import telegram from "../../Assets/images/1946547.png"
import video from "../../Assets/images/img_489998.png"

import img8 from "../../Assets/images/WhatsApp Image 2021-10-24 at 11.51.05 AM (1).jpeg";
import img9 from "../../Assets/images/WhatsApp Image 2021-10-24 at 11.51.01 AM.jpeg";

function Footer(){

return(
    <Grid container className="footer-holder" spacing={2} >
   
    <Grid className="footer-logos-holder" item xs={12} sm={12} md={6} >
       {/* <div className="footer-logos">
       <a referrerpolicy="origin" target="_blank" rel="noopener" href="https://trustseal.enamad.ir/?id=214787&amp;Code=wurFrWjixpUFsopis8yj"> <img height="" width="" loading="lazy"  referrerpolicy="origin" src="https://Trustseal.eNamad.ir/logo.aspx?id=214787&amp;Code=wurFrWjixpUFsopis8yj" alt="" style="cursor:pointer" id="wurFrWjixpUFsopis8yj"/></a>
        <img src=""/>
        </div> */}
        <div className="social-holder">
            <a className="img-logo-footer" href=""><img src={video}/></a>
            <a className="img-logo-footer" href=""><img src={instgram}/></a>
            <a className="img-logo-footer" href=""><img src={telegram}/></a>
        </div>
    </Grid>
    <Grid className="footer-wrapper" item xs={12} sm={12} md={6}>
        <h3 className="header-footer"> درباره مرکز توسعه کسب و کار روشا</h3>
        <p className="text-footer">صاحب نظران ارائه نماید . ایده ها، مشاوره و توسعه کسـب و کارها و همچنین استعدادیابی و استعدادپروری کودکان و نوجوانان، با تکیه بر دانش روز و تجارب اساتید و کســــــــــب و کار و رویش و شکوفایی استعداد، با نگاه بومی و رویکردی جامع در تلاش است خدماتی موثر و نقش آفرین در حوزه های شتابدهی مرکز توسعه کسب و کار روشا متناظر با اهداف مرکز نوآوری دانشکده روانشناسی و علوم تربیتی دانشگاه تهران در دو حوزه تخصصی مشـاوره</p>
        
    </Grid>
    </Grid>

)
}
export default Footer;