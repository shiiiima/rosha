import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import CountUp from "react-countup";
import image from "../../Assets/images/unsplash_KdeqA3aTnBY (1).png";
import img1 from "../../Assets/images/unsplash_-uHVRvDr7pg.png";
import img2 from "../../Assets/images/unsplash_Jk3u514GJes (1).png";
import { Grid } from "@mui/material";
import SliderAboutUs from "./SliderAboutUs";
import axios from "axios";
import SliderWhyRosha from "./SliderWhyRosha";
function AboutUs() {
  const [talent_scout_count, settalent_scout_count] = useState(0);

  const [council_count, setcouncil_count] = useState(0);
  const [items_count, setitems_count] = useState(0);
  function counts() {
    axios.get("http://localhost:8000/api/aboutus").then((res) => {
      settalent_scout_count(res.data.talent_scout_count);

      setcouncil_count(res.data.council_count);
      setitems_count(res.data.items_count);
      console.log(
        "talent_scout_count: ",
        talent_scout_count,
        "council_count ",
        council_count,
        "items_count",
        items_count
      );
    });
  }
  useEffect(() => {
    counts();
  }, []);
  return (
    <>
      <div className="img-holder">
        <img src={image} className="img-roll" />
        <h3 className="head-roll"> درباره ما</h3>
      </div>
      <div className="text-about-us">
        <p>
          مرکز رویش و شکوفایی استعداد روشا از سال 1394 با کسب مجوز های لازم در
          حوزه استعدادیابی و استعدادپروری کودک و نوجوان شروع به فعالیت های علمی
          و پژوهشی و ایجاد زیرساخت های لازم و انجام طرح های سراسری کرد، با توجه
          به توسعه فعالیت های این مجموعه از فروردین سال 1400 با رویکردی جدید و
          استقرار در مرکز نوآوری دانشکده روانشناسی و علوم تربیتی دانشگاه تهران،
          با حضور معاونت علمی و فناوری ریاست جمهوری جناب آقای دکتر ستاری، این
          فعالیت ها در حوزه های تخصصی ارزیابی و غربالگری، کشف استعداد، پرورش
          استعداد و شتابدهی و حمایت از استعدادهای کودکان و نوجوانان متناظر با
          اهداف مرکز نوآوری آغاز به کار نمود. مرکز استعدادیابی روشا با حمایت
          وزارت تعاون، کار و رفاه اجتماعی و بنیاد ملی توسعه فناوری های فرهنگی و
          با بکارگیری جدید ترین و معتبرترین روش ها و ابزارهای سنجش استعداد و
          همچنین با بهره گیری از دانش و تجارب اعضای محترم هیئت علمی دانشگاه ها،
          در جهت مهارت آموزی، مشاوره، استعدادیابی، استعدادپروری و توانمندسازی
          کودک و نوجوان، در تلاش است با رویکرد بومی خدماتی نوینی را به صورت
          حضوری و غیرحضوری به جامعه مخاطبین اعم از دانشجویان، خانواده ها و دیگر
          اقشار جامعه ارائه نموده و زمینه سازی رشد و بالندگی نسل های آینده کشور
          را فراهم آورد. همچنین از دیگر خدمات شتابدهنده روشا، شناسایی، شتابدهی،
          تجاری سازی ایده های حوزه روانشناسی و علوم تربیتی و کودک و نوجوان،
          مشاوره کسب و کار و همچنین حمایت از کسب و کارهای نوپای این حوزه است. در
          همین زمینه، این مجموعه با بهره گیری از تیمی حرفه ای و همچنین مشاوره
          اساتید و صاحب نظران حوزه کسب و کار فرصتی بی نظیر در جهت کسب تجربه و
          نگرش عمیق، توسعه و موفقیت نوآوران را فراهم آورده است..
        </p>
      </div>
      <Grid container className="numbers-about-us">
        <Grid item xs={6} md={3} className="items-about-us">
          <CountUp end={talent_scout_count} duration={2} />
          <p>آزمون اجرا شده</p>
        </Grid>
        <Grid item xs={6} md={3} className="items-about-us">
          <CountUp end={council_count} duration={5} />
          <p>ساعت مشاوره تخصصی</p>
        </Grid>
        <Grid item xs={6} md={3} className="items-about-us">
          <CountUp end={items_count} duration={5} />
          <p> عضو آکادمی استعداد</p>
        </Grid>
        {/* <Grid item xs={6} md={3} className="items-about-us">
          <CountUp end={600} duration={10} />
          <p> نوع خدمت در زمینه استعدادپروری و شتابدهی استعداد</p>
        </Grid> */}
      </Grid>
      <Grid container className="why-rosha">
        <Grid item>
          <div className="why-rosha-holder">
            <h4>چرا روشا؟</h4>
            <div className="line"></div>
          </div>
        </Grid>

        <Grid item className="video-why-rosha-wrapper">
          <div className="video-why-rosha">
            <img src={img1} />
            <p>رویش و شکوفایی استعداد روشا</p>
          </div>
          <div className="video-why-rosha">
            <img src={img1} />
            <p>رویش و شکوفایی استعداد روشا</p>
          </div>
          <div className="video-why-rosha">
            <img src={img1} />
            <p>رویش و شکوفایی استعداد روشا</p>
          </div>
        </Grid>
      </Grid>
      <div className="blue-line"></div>
      <Grid container className="about-us-info">
        <Grid item xs={12} md={5}>
          <div className="info-holder1">
            <h4>درباره ما</h4>
            <div className="line"></div>
            <p>
              {" "}
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
              ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،
              حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
              افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
              خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. */
            </p>
          </div>
          <SliderAboutUs />
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={img1} />
        </Grid>
      </Grid>
      <Grid container className="chesmandaz-about">
        <Grid item xs={12} md={5} className="">
          <img src={img2} />
        </Grid>
        <Grid item xs={12} md={5} className="info-holder">
          <h4> چشم انداز</h4>
          <div className="line"></div>
          <p>
            {" "}
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
            شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال
            و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد. */
          </p>
        </Grid>
      </Grid>
    </>
  );
}
export default AboutUs;
