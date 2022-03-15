import React, { useEffect } from "react";
import headerimg from "../../Assets/images/Rectangle 60.png";
import axios from "axios";
import brandimg from "../../Assets/images/Untitled-1 1.png";
import { Grid } from "@mui/material";
import FormContact from "../Form/Form";
import Button from "@mui/material/Button";
import img from "../../Assets/images/Untitled-2 1.png";
import "./Co-Workers.css";
function CoWorkers() {
  const data = [
    { img: brandimg },
    { img: brandimg },
    { img: brandimg },
    { img: brandimg },
    { img: brandimg },
    { img: brandimg },
    { img: brandimg },
    { img: brandimg },
  ];
  const Getinfo = () => {
    axios.get("http://localhost:8000/api/co-workers").then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    Getinfo();
  }, []);
  return (
    <>
      <div className="img-holder">
        <img src={headerimg} className="img-roll" />
        <h3 className="head-roll"> همکاران استراتزیک</h3>
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

      <Grid container className="brand-wrapper">
        <Grid item xs={10} className="brand-holder">
          <Grid item xs={12} className="title-co-workers">
            <div>
              <h3> مرکز رویشا</h3>
              <div className="line"></div>
            </div>
          </Grid>
          <Grid container>
            {data.map((item, index) => {
              return (
                <Grid item xs={6} md={3} className="brand-item-holder">
                  <div className="img-brand-holder">
                    <img src={brandimg} />
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={4} className="right-side-rosha-services">
          <div className="img-holder-services">
            <img src={img} />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="left-side-rosha-services">
          <div className="info-holder1">
            <h4>مرکز روشا</h4>
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
        </Grid>
      </Grid>
      <Grid container className="form-holder">
        <Grid item>
          <div className="info-holder">
            <h3>ارتباط با ما</h3>
            <div className="line"></div>
            <p>
              {" "}
              مرکز رویش و شکوفایی استعداد روشا از سال 1394 با کسب مجوز های لازم
              در حوزه استعدادیابی و استعدادپروری کودک و نوجوان شروع به فعالیت
              های علمی و پژوهشی و ایجاد زیرساخت های لازم و انجام طرح های سراسری
              م در حوزه استعدادیابی و استعدادپروری کودک و نوجوان شروع به فعالیت
              های علمی و پژوهشی و ایجاد زیرساخت های لازم و انجام طرح های سراسری
              کرد، با توجه به توسعه فعالیت های این مجموعه از فروردین سال 1400
              باکرد، با توجه به توسعه فعالیت های این مجموعه از فروردین سال 1400
              با
            </p>
          </div>
          <FormContact />
        </Grid>
      </Grid>
    </>
  );
}
export default CoWorkers;
