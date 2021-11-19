import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Questions.css"

export default function Question() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> 
1.هدف اصلی مرکز روشا جیست؟ 
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          مرکز رویش و شکوفایی استعداد روشا با استفاده از جدید ترین روش های روز دنیا و با کلیه مجوز های لازم مستقر در مرکز نوآوری روانشناسی و علوم تربیتی دانشگاه تهران در تلاش است خدمتی نوین برای ارزیابی، استعدادیابی و توانمندسازی فرزندان ایران در سراسر کشور ارائه دهد.

          </Typography>
        </AccordionDetails>
      </Accordion>

            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> 

    
          2.فرآیند استعدادیابی حضوری برای فرزندم چقدر طول می کشد؟

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          با توجه به دسته بندی سنی که فرزند شما در آن قرار بگیرد ساعات متفاوت می باشد :
رده سنی 5 تا 11 سال تمام: حداکثر 3 ساعت در 2 روز
رده سنی 12 تا 15 سال تمام: حداکثر 4 ساعت در 2 روز
رده سنی 16 سال به بالا: حداکثر پنج ساعت در 2 روز
لازم به ذکر است از آنجاییکه برخی آزمون ها طولانی تر بوده و موجب خستگی می شود، لذا فرآیند سنجش در 2 روز تعریف شده است و زمان اعلام شده برای همان 2 روز می باشد.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> 

    
3. فرآیند استعدادیابی غیرحضوری برای فرزندم چقدر طول می کشد؟

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          این فرآیند با سوالات کاملا استاندارد و بین المللی طراحی شده است که شما به صورت آنلاین به آن پاسخ میدهید، قبل از هر سوال توضیحات و نحوه اجرای آن به شما اعلام شده است، لطفا جهت ارزیابی بهتر و بادقت بیشتر برای مشاوره به صورت حضوری اقدام فرمایید.


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> 
          4.چه زمانی و به چه شکل نتیجه استعدادیابی فرزندم را در یافت میکنم؟

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          پس از پایان فرآیند سنجش استعداد، با هماهنگی قبلی که با شما صورت خواهد گرفت، در یک جلسه حضوری و با حضور یک مشاور خبره، نتایج آزمون در حضور شما و فرزندتان تحلیل شده و راهکارهایی جهت توانمندسازی و ارتقاء توانایی های فرزندتان به شما ارائه می شود. پس از آن و در صورت علاقه می توانید از خدمات دیگر ما استفاده کنید.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> 
          5. چه مواردی را مورد سنجش قرار می دهید؟ (آزمونهای شما چه چیزی را می سنجند؟)

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          در مرکز روشا با استفاده از ابزارهای کاملا تخصصی و معتبر بین المللی، مواردی از جمله هوش، رغبت های شغلی و تحصیلی، ارزش های فردی، هوش هیجانی و تیپ های شخصیتی فرزندتان مورد ارزیابی قرار میگیرد. البته در این فرآیند حضور حداقل یکی از والدین الزامی است زیرا بخشی از مصاحبه و پرسشنامه ای مربوط به والدین نیز یکی از اجزای اصلی این فرآیند می باشد.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> 
          6. پس از دریافت نتیجه کلی و مشاوره حضوری از چه خدماتی در مرکز روشا می توانیم استفاده کنیم؟

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          شما می توانید به دوره های تکمیلی که در سرویس های متنوع روشا ارائه می شوند هدایت شده و مراجعه کنید. همچنین مجموعه آموزش های مهارتهای نرم هم برای خانواده و هم کودک و نوجوان ارائه می شود از جمله خلاقیت، کارآفرینی، فرزندپروری، حل مسئله، تفکر انتقادی، هوش مالی، تربیت جنسی و آموزش های کدنویسی و غیره.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> 
          7.آیا اختلال بیش فعالی را نیز تشخیص می دهید؟

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          بله با آزمون های استاندارد و ویژه ای که مختص به این کار هستند میزان بیش فعالی یا اختلال تمرکز و توجه تشخیص داده خواهد شد.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> 
          8.آیا خدمات درمانی نیز دارید؟


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          در صورت تشخیص هرگونه اختلال توسط مشاور، امکان ارجاع فرزند شما به مرکز مشاوره که زیر نظر مجموعه روشا فعالیت می کند و دارای مجوز سازمان روانشناسی است، فراهم خواهد شد و می توانید از خدمات آن استفاده کنید.


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> 
          9.چطور می توانم بطور آنلاین سوالاتم را بپرسم؟ 


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          با استفاده از لینک مشاوره آنلاین در واتس اپ میباشد میتوانید سوالات خود را در اینجا بپرسید


          </Typography>
        </AccordionDetails>
      </Accordion>


    </div>
  );
}
