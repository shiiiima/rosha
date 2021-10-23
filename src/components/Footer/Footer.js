import React from "react";
function Footer(){

return(
    <Grid container className="footer-holder" spacing={2} >
    <Grid className="footer-wrapper" item xs={12} sm={12} md={6}>
        <h3 className="header-footer"> درباره مرکز توسعه کسب و کار روشا</h3>
        <p className="text-footer">صاحب نظران ارائه نماید . ایده ها، مشاوره و توسعه کسـب و کارها و همچنین استعدادیابی و استعدادپروری کودکان و نوجوانان، با تکیه بر دانش روز و تجارب اساتید و کســــــــــب و کار و رویش و شکوفایی استعداد، با نگاه بومی و رویکردی جامع در تلاش است خدماتی موثر و نقش آفرین در حوزه های شتابدهی مرکز توسعه کسب و کار روشا متناظر با اهداف مرکز نوآوری دانشکده روانشناسی و علوم تربیتی دانشگاه تهران در دو حوزه تخصصی مشـاوره</p>
        
    </Grid>
    <Grid className="footer-logos-holder" item xs={12} sm={12} md={6} >
       <div className="footer-holder">
        <img src=""/>
        <img src=""/>
        </div>
        <div className="social-holder">
            <a href=""><img src=""/></a>
            <a href=""><img src=""/></a>
            <a href=""><img src=""/></a>
        </div>
    </Grid>
    </Grid>

)
}
export default Footer;