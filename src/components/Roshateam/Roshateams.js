import axios from "axios";
import React, { useEffect, useState } from "react";
import Roshateam from "./Roshateam";
import RoshaSubTeam from "./RoshaSubTeam";
import img1 from "../../Assets/images/000 1.png";
import headerimg from "../../Assets/images/Untitled-1 16.png";
import { Grid } from "@mui/material";
import imgfooter from "../../Assets/images/unsplash_YRMWVcdyhmI (2).png";
import imgfooter2 from "../../Assets/images/closeup-senior-lecturer-with-arms-crossed 1.png";
function Roshateams() {
  const [roshateam, setRoshateam] = useState([]);
  function getInfo() {
    axios
      .get("http://localhost:8000/api/rosha-team")

      .then((res) => {
        setRoshateam(res.data.members.data);
      });
  }
  useEffect(() => {
    getInfo();
  }, []);

  const data = [
    {
      id: 1,
      name: "علی",
      info: "مرکز رویش و شکوفایی استعداد روشا از سال 1394 با کسب مجوز های لازم در",
      img: img1,
    },
    {
      id: 2,
      name: "علی",
      info: "مرکز رویش و شکوفایی استعداد روشا از سال 1394 با کسب مجوز های لازم در",
      img: img1,
    },
    {
      id: 3,
      name: "علی",
      info: "مرکز رویش و شکوفایی استعداد روشا از سال 1394 با کسب مجوز های لازم در",
      img: img1,
    },
    {
      id: 4,
      name: "علی",
      info: "مرکز رویش و شکوفایی استعداد روشا از سال 1394 با کسب مجوز های لازم در",
      img: img1,
    },
    {
      id: 5,
      name: "علی",
      info: "مرکز رویش و شکوفایی استعداد روشا از سال 1394 با کسب مجوز های لازم در",
      img: img1,
    },
    {
      id: 6,
      name: "علی",
      info: "مرکز رویش و شکوفایی استعداد روشا از سال 1394 با کسب مجوز های لازم در",
      img: img1,
    },
    {
      id: 7,
      name: "علی",
      info: "مرکز رویش و شکوفایی استعداد روشا از سال 1394 با کسب مجوز های لازم در",
      img: img1,
    },
  ];
  console.log(roshateam);
  return (
    <>
      <div className="img-holder">
        <img src={headerimg} className="img-roll" />
        <h3 className="head-roll"> مشاوران و اساتید ما</h3>
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

      <Grid container className="roshateam-holder">
        <Grid item xs={12} className="title-roshasubteam">
          <div>
            <h3> مرکز رویشا</h3>
            <div className="line"></div>
          </div>
        </Grid>
        {data.map((item, index) => {
          return (
            <Grid item xs={12} className="roshateam">
              <Roshateam item={item} index={item.id} />;
            </Grid>
          );
        })}
      </Grid>
      <Grid container className="roshasubteam-holder">
        <Grid item xs={12} className="title-roshasubteam">
          <div>
            <h3> رمرکز رویا</h3>
            <div className="line"></div>
          </div>
        </Grid>

        {data.map((item, index) => {
          return (
            <>
              <Grid item xs={12} md={3} className="roshasubteam-item-holder">
                <RoshaSubTeam item={item} index={item.id} />;
              </Grid>
            </>
          );
        })}
      </Grid>
      <div className="seminar-about">
        <img src={imgfooter} className="bg-img-seminar-about" />
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
            <img src={imgfooter2} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
export default Roshateams;
