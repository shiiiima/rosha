import React from "react";
import Grid from '@mui/material/Grid';
import "./Rolls.css"
import imageroll from "../../Assets/images/rolls.png"
import image from "../../Assets/images/PikPng 1.png"
function Rolls (){


    return(
        <div>
    
            <div className="img-holder">
                <img src={imageroll} className="img-roll"/>
                <h3 className="head-roll">قوانین و مقررات</h3>
            </div>
            <div className="title-rolls">
                <h3>قوانین و مقررات</h3>
             <ul className="lists-roll">
                 <li className="list-roll"> والدین باید در صورت لزوم نهایت همکاری با مربیان و مشاورین مرکز داشته باشند.</li>
                 <li className="list-roll"> مرکز روشا از هر ایده و پیشنهادی در راستای بهبود فرایندها استقبال می کند.
</li>
<li className="list-roll"> هر نواندیش و خانواده موظف است لوازم مورد نیاز خود را که از قبل به اطلاع میرسد ، هر جلسه همراه داشته باشد.
</li>
<li className="list-roll"> لطفا پس از ثبت نام نهایی و ارسال دعوتنامه ، تاریخ و ساعت دقیق برگزاری جلسه مشاوره خود را بخاطر بسپارید.
</li>
<li className="list-roll">
 بعد از اتمام فرآیند عضویت، کلیه اطلاعات شخصی و یا خدماتی که به شما ارائه شده است با رعایت اصول امانتداری ذخیره خواهد شد.

</li>

             </ul>
                      
                      
           
                

            </div>
            <Grid className="title-rolls2" container  >
     <Grid item xs={12} md={8}>
     <h3>قوانین و مقررات</h3>
                <ul className="lists-roll2">
                    <li className="list-roll2">
                     لازم به ذکر است که حتما 15 دقیقه قبل از شروع جلسه مشاوره در مرکز حضور داشته باشید.

                    </li>
                    <li className="list-roll2">
                     نواندیشان و والدین از آوردن ميهمان به مرکز جداً خودداري نمايند.

                        </li>
                        <li className="list-roll2">
                         حتما اطلاعات تماس خود را برای اطلاع رسانی های بعدی، به درستی در سامانه قرار دهید.

                        </li>
                        <li className="list-roll2">
                         لازم است بچه ها حتما قبل از کلاس ها و یا مشاوره استراحت کافی داشته باشند و صبحانه یا عصرانه میل کرده باشند.

                        </li>
                </ul>
     </Grid>
     <Grid item xs={12} md={4} className="img-rolls">
         <img src={image}/>
     </Grid>
    </Grid>
    <div className="title-rolls">
                <h3>قوانین و مقررات</h3>
             <ul className="lists-roll">
                 <li className="list-roll"> اطلاعات را هنگام ثبت در سایت، به درستی ثبت و ذخیره نمایید. این امر برای صدور گواهی نهایی حضور در دوره ها، الزامیست.
</li>
                 <li className="list-roll">  پس از ثبت‌نام تحت هیچ شرایطی شهریه پرداختی (حتی قبل از شروع کلاسها) مسترد و یا رزرو ترم بعدی نگه داشته نخواهد شد.

</li>
<li className="list-roll">  کلیه پرداخت ها فقط از طریق درگاه اینترنتی سامانه بوده و مرکز روشا به هیچ پرداخت دیگری ترتیب اثر نخواهد داد.

</li>
<li className="list-roll"> مسئولیت غیبت در کلاس ها و یا جلسه مشاوره به عهده نواندیشان و والدین بوده و مرکز موظف به برگزاری جلسه جبرانی و یا توضیح مجدد مطالب عنوان شده نمی باشد.

</li>
<li className="list-roll">
  در صورتی که فرزند شما به دلیل موجهی امکان حضور در دوره و یا مشاوره را نداشته باشد، می تواند با تایید مدیریت و موافقت ایشان، در دوره های بعدی حضور پیدا کند.


</li>

             </ul>
                      
                      
           
                

            </div>
          
            <Grid className="title-rolls3" container>
          
                <Grid item xs={12} md={6} className="list-roll3">
                    <p className=""> تمام کسانی که در کشور در حوزه مشاوره ، ارزیابی و یا توانمندسازی کودک و نوجوان فعالیت مینمایند می توانند در طرح روشا بعنوان همکار در سامانه تماس با ما پیام ارسال کنند، تا فرایند بررسی انجام گردد.
</p>
<div className="icon-holder">

</div>
                </Grid>
                <Grid item xs={12} md={6} className="list-roll3">
                <div className="icon-holder">

</div>
                    <p className="">  کلیه موسسات فرهنگی دیجیتال که دارای محصولات دیجیتال حوزه کودک و نوجوان هستند می توانند یک نسخه از اثر خود را به دبیرخانه ارسال نمایند تا پس از بررسی در فروشگاه دیجیتال روشا قرار گیرد و یا به کاربران معرفی گردد.

</p>

                </Grid>
                <Grid item xs={12} md={6} className="list-roll3">
                    <p className="">   کلیه انتشارات و شرکت هایی که دارای کتاب و یا منابع آموزشی و علمی حوزه کودکان و نوجوانان هستند می توانند یک نسخه از اثر خود را به دبیرخانه روشا ارسال نمایند تا پس از بررسی در فروشگاه دیجیتال روشا قرار گیرد.

</p>
<div className="icon-holder">

</div>
                </Grid>
                <Grid item xs={12} md={6} className="list-roll3">
                <div className="icon-holder">

</div>
                    <p className="">   در صورت بروز هرگونه مسئله اخلاقی از سوی مراجعه کنندگان در طول هریک از خدمات روشا (مشاوره، مشاوره کوچینگ و غیره)، ضمن پیگیری های قضایی به دلیل ضبط مکالمات، کلیه خدمات و سرویس ها از سمت مجموعه روشا قطع شده و هیچ مبلغی مسترد نخواهد شد.

</p>

                </Grid>

            </Grid>
            




        </div>
    )

}
export default Rolls;