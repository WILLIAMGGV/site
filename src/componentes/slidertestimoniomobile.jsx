import React from "react";
import Slider from "react-slick";
import testi1p from '../test1p.png'
import testi2p from '../test2p.png'
import testi3p from '../test3p.png'

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      <div className="imagenp" width="100%">
      <img src={ testi1p }/>
          </div>
          <div className="imagenp" width="100%">
      <img src={ testi2p }/>
          </div>
          <div className="imagenp" width="100%">
      <img src={ testi3p }/>
          </div>
        
      </Slider>
    </div>
  );
}

export default Responsive;