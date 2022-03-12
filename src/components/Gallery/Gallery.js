import React, { useEffect, useState } from "react";
import "./Gallery.css";
import Gallery from "react-photo-gallery";
import axios from "axios";

function Galleryy() {
  const [images, setImages] = useState();
  function getGallery() {
    axios
      .get("http://localhost:8000/api/gallery/images")
      // .then((resp) => resp.json())
      .then((res) => {
        console.log(res.data.images.data);
        setImages(res);
      });
    // .catch((err) => {
    //   console.log("err");
    // });
  }
  useEffect(() => {
    getGallery();
  }, []);
  console.log(images);
  return <Gallery photos={images} />;
}
export default Galleryy;
