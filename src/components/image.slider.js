import React from "react";
import Slider from "react-slick";
import augventsLogo from "../event.jpeg"
import liveMusic from "../Live-Music.jpg"
import './styles/image.slider.scss'

const ImageSlider = (props) => {
  const settings = {
    infinite: true,
    speed: 3500,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="image-slider" >
      <Slider {...settings}>
        <div>
          <img src={augventsLogo}></img>
        </div>
        <div>
          <img src={liveMusic}></img>
        </div>
        <div>
          <img src={augventsLogo}></img>
        </div>
        <div>
          <img src={liveMusic}></img>
        </div>
        <div>
          <img src={augventsLogo}></img>
        </div>
        <div>
          <img src={liveMusic}></img>
        </div>
        <div>
          <img src={augventsLogo}></img>
        </div>
        <div>
          <img src={liveMusic}></img>
        </div>
        <div>
          <img src={augventsLogo}></img>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider