import React from "react"
import Cards from "./Cards"
import "./Card.css"
import { Container } from "@mui/material"
function CardWrapper() {
  return (
    <>
      <Container>
        <div className="info-text-wrapper">
          <h2 className="info-header">
            روشا، جایی برای رشد و شکوفایی استعدادهای فرزندان شما
          </h2>
          <p className="info-text">
            دپارتمان مشاوره، خدمات مشاوره در حوزه های متوعی از جمله کودک و
            نوجوان، شغلی و تحصیلی و خانواده در اختیار شما قرار داده شده است.
            نوزادان ارائه شده است. در دپارتمان استعدادیابی، پنج پکیج ویژه در
            حوزه استعدادیابی با هدف سنجش استعدادهای کودک و نوجوان با رویکرد
            ارزیابی چندوجهی و ارائه نیمرخ زندگی و در در دپارتمان ازمون، بیش از
            ٥٠ پرسشنامه تخصصی رد زمینه های خودشناسی، شغلی و حرفه ای و خانواده و
            ازدواج قرار داده شده است. در دپارتمان غربالگری، ٣٦ آزمون در حوزه
            ارزیابی و غربالگری
          </p>
        </div>
      </Container>
      <Cards />
    </>
  )
}
export default CardWrapper
