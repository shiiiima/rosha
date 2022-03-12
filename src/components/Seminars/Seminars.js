import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Seminar from "./Seminar";
import img1 from "../../Assets/images/unsplash_s9CC2SKySJM.png";
import headerimg from "../../Assets/images/unsplash_F8t2VGnI47I.png";
import img2 from "../../Assets/images/unsplash_YRMWVcdyhmI (1).png";
import SeminarCard from "./SeminarCard";
import imgportrate from "../../Assets/images/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded 1.png";
import axios from "axios";
import { Box } from "@mui/system";
function Seminars() {
  const [council_count, setcouncil_count] = useState(0);
  const [items_count, setitems_count] = useState(0);
  const [talent_scout_count, settalent_scout_count] = useState(0);
  // const [info, setInfo] = useState();
  const [minutes, setMinutes] = useState();
  const [teachers, setTeachers] = useState();
  const [vebinars, setVebinars] = useState();
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
      price: "2,980,000",
      img: img1,
    },
    {
      title: "وبینار استعدادیابی هنری ",
      text: "در این وبینار با لزوم اهمیت استعدادیابی هنری کودک و نوجوان و همچنین چرایی و چگونگی مدیریت استعدادهای هنری آشنا میشوید.",
      date: "1400/3/9",
      goal: "کلیه والدین",
      price: "1,000,000",
      img: img1,
    },
    {
      title: "وبینار استعدادیابی کارآفرینی",
      text: "در این وبینار با لزوم اهمیت استعدادیابی کودک و نوجوان و همچنین چرایی و چگونگی ایجاد تفکر کارآفرینی برای کودکان و نوجوانان آشنا میشوید.",
      date: "1400/3/3",
      goal: "کلیه والدین",
      price: "1,000,000",
      img: img1,
    },
  ];
  const Cards = [
    {
      number: vebinars,
      title: "وبینار و دوره آنلاین",
      icon: "",
    },
    {
      number: teachers,
      title: "مدرس ",
      icon: "",
    },
    {
      number: minutes,
      title: "دقیقه  ",
      icon: "",
    },
  ];

  // function getInfo() {
  //   axios.get("http://localhost:8000/api/service-page/10").then((res) => {
  //     setInfo(res.data.items);

  //     setMinutes(res.data.minutes);
  //     setTeachers(res.data.items_count);
  //     setVebinars(res.data.video_count);
  //   });

  // useEffect(() => {
  //   getInfo();

  // }, []);

  return (
    <>
      <div className="img-holder">
        <img src={headerimg} className="img-roll" />
        <h3 className="head-roll"> وبینار و سمینار</h3>
      </div>

      {/* <div className="img-holder">
        <img src={headerimg} className="img-roll" />
        <h3 className="head-roll"> وبینار ها و سمینار ها</h3>
      </div> */}
      {/* {console.log("info :", info)} */}
      <Grid container className="cards-seminar">
        {info.map((item, index) => {
          return <Seminar item={item} id={index} />;
        })}
      </Grid>

      <Grid container>
        {Cards.map((card, index) => {
          return (
            <Grid item xs={12} md={4}>
              <SeminarCard card={card} />
              <div className="border-cardes"></div>
            </Grid>
          );
        })}
      </Grid>
      {/* <Grid container>
        <Grid item xs={12} md={4}>
          <SeminarCard item={minutes} title={} />
          <SeminarCard item={teachers} />
          <SeminarCard item={vebinars} />
        </Grid>
      </Grid> */}
      <div className="seminar-about">
        <img src={img2} className="bg-img-seminar-about" />
        <Grid container className="seminar-about-holder">
          <Grid item xs={12} md={6} className="text-seminar-about">
            <p>
              مرکز رویش و شکوفایی استعداد روشا در جهت آموزش و توانمندسازی
              خانواده ها و نوجوانان و کودکان،با برگزاری  سلسله وبینار و سمینار
              های ویژه، و با حضور اساتید برجسته و بنام حوزه های مختلف، سعی بر
              این دارد تا بخشی از دغدغه ی خانواده های عزیز را برطرف سازد.
            </p>
          </Grid>
          <Grid item xs={12} md={6} className="img-portrate-seminar-about">
            <img src={imgportrate} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
export default Seminars;
