import React, { useState, useEffect } from "react";
import img from "../../Assets/images/unsplash_F8t2VGnI47I (1).png";
import axios from "axios";
import { Grid } from "@mui/material";
import CountUp from "react-countup";
import "./Service.css";
import image from "../../Assets/images/unsplash_g1Kr4Ozfoac.png";
import Button from "@mui/material/Button";
function Service() {
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
        <img src={img} className="img-roll" />
        <h3 className="head-roll"> خدمات ما</h3>
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
      <Grid container className="numbers-rosha-services">
        <Grid item xs={6} md={3} className="items-rosha-services">
          <CountUp end={talent_scout_count} duration={2} />
          <p>آزمون اجرا شده</p>
        </Grid>
        <Grid item xs={6} md={3} className="items-rosha-services">
          <CountUp end={council_count} duration={5} />
          <p>ساعت مشاوره تخصصی</p>
        </Grid>
        <Grid item xs={6} md={3} className="items-rosha-services">
          <CountUp end={council_count} duration={5} />
          <p>عضو آکادمی استعداد</p>
        </Grid>

        {/* <Grid item xs={6} md={3} className="items-about-us">
          <CountUp end={600} duration={10} />
          <p> نوع خدمت در زمینه استعدادپروری و شتابدهی استعداد</p>
        </Grid> */}
      </Grid>
      <Grid container className="items-rosha-services">
        <Grid item md={6} xs={12}>
          <div className="info-holder1">
            <h4> لورم ایپسوم</h4>
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
        <Grid item md={6} xs={12}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <div className="title">
                <i></i>
                <h4>لورم ایپسوم</h4>
              </div>
              <p>
                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="title">
                <i></i>
                <h4>لورم ایپسوم</h4>
              </div>
              <p>
                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="title">
                <i></i>
                <h4>لورم ایپسوم</h4>
              </div>
              <p>
                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="title">
                <i></i>
                <h4>لورم ایپسوم</h4>
              </div>
              <p>
                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={4} className="right-side-rosha-services">
          <div className="img-holder-services">
            <img src={image} />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="left-side-rosha-services">
          <div className="info-holder1">
            <h4> لورم ایپسوم</h4>
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
          <Button variant="contained" className="btn-send" type="submit">
            کلیک
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
export default Service;
