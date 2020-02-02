import React, { Component } from "react";
import Slider from "react-slick";
import augventsLogo from "../event.jpeg"
import './styles/image.slider.scss'

export default class ImageSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 1000,
      autoplaySpeed: 4000,
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
          <img src={augventsLogo}></img>
          </div>
          <div>
          <img src={augventsLogo}></img>
          </div>
          <div>
          <img src={augventsLogo}></img>
          </div>
          <div>
          <img src={augventsLogo}></img>
          </div>
          <div>
          <img src={augventsLogo}></img>
          </div>
          <div>
          <img src={augventsLogo}></img>
          </div>
          <div>
          <img src={augventsLogo}></img>
          </div>
          <div>
          <img src={augventsLogo}></img>
          </div>
        </Slider>
      </div>
    );
  }
}