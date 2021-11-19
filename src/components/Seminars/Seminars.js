import { Grid } from "@mui/material";
import React from "react";
import Seminar from "./Seminar";
import img1 from "../../Assets/images/unsplash_s9CC2SKySJM.png"
import headerimg from "../../Assets/images/unsplash_F8t2VGnI47I.png"
import img2 from "../../Assets/images/unsplash_YRMWVcdyhmI (1).png"
import SeminarCard from "./SeminarCard";
import imgportrate from "../../Assets/images/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded 1.png"
function Seminars() {
    const info = [
        {
            title: "وبینار از بازی تا اسباب بازی، راه تفکر کودکان",
            text: "آیا شما به عنوان یک پدر و مادر آگاه، راه ورود به دنیای تفکر فرزندتان را می دانید؟\
            از دنیای شناختیِ او و راه های رشد آن بوسیله اسباب بازی های مختلف را می \
            هنگام خرید اسباب بازی، به مولفه های استاندارد بودن آن ها توجه می کنید؟\
            در این سمینار به طور اختصاصی و کاملا علمی از زبان دکتر رضا پورحسین عضو هیات علمی دانشگاه تهران و متخصص روانشناسی کودک، پاسخ این پرسش ها را می آموزید.\
            ",
            date: "1400/8/19",
            goal: "ویژه والدین",
            price:"2,980,000",
            img:img1,
        },
        {
            title: "وبینار استعدادیابی هنری ",
            text: "در این وبینار با لزوم اهمیت استعدادیابی هنری کودک و نوجوان و همچنین چرایی و چگونگی مدیریت استعدادهای هنری آشنا میشوید.",
            date: "1400/3/9",
            goal: "کلیه والدین",
            price:"1,000,000",
            img:""
        },
        {
            title: "وبینار استعدادیابی کارآفرینی",
            text: "در این وبینار با لزوم اهمیت استعدادیابی کودک و نوجوان و همچنین چرایی و چگونگی ایجاد تفکر کارآفرینی برای کودکان و نوجوانان آشنا میشوید.",
            date: "1400/3/3",
            goal: "کلیه والدین",
            price:"1,000,000",
            img:""
        },
        

    ]
    const Cards = [
        {
            number: " 40+",
            title: "وبینار و دوره آنلاین",
            icon:""
        },
        {
            number: "45+",
            title: "مدرس ",
            icon:""
        },
        {
            number: " 7000+",
            title: "دقیقه  ",
            icon:""
        },
    ]
    return (
        <>
             <div className="img-holder">
                <img src={headerimg} className="img-roll"/>
                <h3 className="head-roll"> وبینار ها و سمینار ها</h3>
            </div>
            {info.map((item ,index) => {
                return (
                    <Grid container >
                                                <Grid item xs={8} md={3}>
                            <img src={item.img}/>
                        </Grid>
                        <Grid item xs={12} md={9}>
                        <Seminar item={item} />
                        </Grid>

                   </Grid>
                   
                    
                
                )
               
            })}
            <Grid container >

           
                {Cards.map((card, index) => {
                    return (
                        <Grid item xs={12} md={4}>
                            <SeminarCard card={card} />
                        </Grid>
                    )
                })}
            </Grid>
            <div className="seminar-about">
                <img src={img2} className="bg-img-seminar-about" />
                <Grid container className="seminar-about-holder">
                <Grid item xs={12} md={6} className="text-seminar-about">

<p >مرکز رویش و شکوفایی استعداد روشا در جهت آموزش و توانمندسازی خانواده ها و نوجوانان و کودکان،با برگزاری  سلسله وبینار و سمینار های ویژه، و با حضور اساتید برجسته و بنام حوزه های مختلف، سعی بر این دارد تا بخشی از دغدغه ی خانواده های عزیز را برطرف سازد.
</p>

    </Grid>
                    <Grid item xs={12} md={6} className="img-portrate-seminar-about">
                        <img src={imgportrate}  />
                        </Grid>
                       
               </Grid>
                
            </div>
        </>
    )
}
export default Seminars;