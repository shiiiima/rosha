import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import axios from "axios";
import headerimg from "../../Assets/images/unsplash_744oGeqpxPQ.png";
import "./ReserveExam.css";
import img1 from "../../Assets/images/unsplash_Yi9-QIObQ1o (1).png";
import { Button, Grid } from "@mui/material";
function Reserve() {
  const [age, setAge] = useState("");
  const [state, setState] = useState();
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // const getInfo = () => {
  //   axios.get("http://localhost:8000/api/talent-scout/presence").then((res) => {
  //     setState(res.data.agencies);
  //   });
  // };
  // useEffect(() => {
  //   getInfo();
  // }, []);
  console.log(state);
  return (
    <>
      <div className="img-holder">
        <img src={headerimg} className="img-roll" />
        <h3 className="head-roll"> رزرو ارزیابی حضوری</h3>
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
      <Grid container>
        <Grid item xs={12} md={8} className="right-rosha-talent">
          <div className="title-rosha-talent">
            <h4>رکز رویش و شکوفایی استعداد</h4>
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
        <Grid item xs={12} md={4} className="left-rosha-talent">
          <div className="img-holder-talent">
            <img src={img1} />
          </div>
        </Grid>
      </Grid>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          لطفا خدمت مورد نظر را انتخاب کنید{" "}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>
            مشاوره حضوری - مبلغ سرمایه‌گذاری: 215 هزار تومان
          </MenuItem>
          <MenuItem value={20}>
            مشاوره غیر حضوری - مبلغ سرمایه‌گذاری: 185 هزار تومان
          </MenuItem>
          <MenuItem value={30}>
            آزمونهای رایانه ای توجه و تمرکز IVA توسط متخصص (همراه با تفسیر) -
            مبلغ سرمایه‌گذاری: 289 هزار تومان
          </MenuItem>
          <MenuItem value={30}>
            آزمونهای رایانه ای توجه و تمرکز ریهاکام توسط متخصص (همراه با
            تفسیر)-مبلغ سرمایه‌گذاری: 289 هزار تومان
          </MenuItem>{" "}
          <MenuItem value={30}>
            آزمون حضوری ارزیابی هوش بینه توسط متخصص (همراه با تفسیر)- مبلغ
            سرمایه‌گذاری: 404 هزار تومان
          </MenuItem>{" "}
          <MenuItem value={30}>
            آزمون حضوری ارزیابی هوش وکسلر توسط متخصص (همراه با تفسیر)- مبلغ
            سرمایه‌گذاری: 404 هزار تومان
          </MenuItem>{" "}
          <MenuItem value={30}>
            بسته استعدادیابی ۵ تا ۱۱ سال توسط اساتید مجرب روان شناسی - مبلغ
            سرمایه‌گذاری: 656 هزار تومان
          </MenuItem>
          <MenuItem value={30}>
            بسته استعدادیابی ۱۲ تا ۱۵ سال توسط اساتید مجرب روان شناسی - مبلغ
            سرمایه‌گذاری: 724 هزار تومان
          </MenuItem>{" "}
          <MenuItem value={30}>
            بسته استعدادیابی ۱۶ سال به بالا توسط اساتید مجرب روان شناسی- مبلغ
            سرمایه‌گذاری: 861 هزار تومان
          </MenuItem>
        </Select>
      </FormControl>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {state.map((item, index) => {
            <MenuItem value={10}>hi</MenuItem>;
          })}
        </Select>
      </FormControl>
    </>
  );
}
export default Reserve;
