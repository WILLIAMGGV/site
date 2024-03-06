import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import imagen1 from '../Servicios/imagen1.png'
import imagen2 from '../Servicios/imagen2.png'
import imagen3 from '../Servicios/imagen3.png'
import imagen4 from '../Servicios/imagen4.png'

import imagen1p from '../Servicios/imagen1-p.png'
import imagen2p from '../Servicios/imagen2-p.png'
import imagen3p from '../Servicios/imagen3-p.png'
import imagen4p from '../Servicios/imagen4-p.png'


function SlideChangeHooks() {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);




  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
      
     
    },
    afterChange: current => {
        setActiveSlide2(current);
   
  
    }
    
  };

  



  return (
    <div className="slider-container">
      
        {
          activeSlide2===3?
          <div className="titulo-arriba">Lectura de Oráculos Angelical</div>
          :<div className="titulo-arriba"></div>
        } 
        {
          activeSlide2===0?
          <div className="titulo-arriba">Sesión de Biodescodificacion online</div>
          :<div className="titulo-arriba"></div>
        } 
        {
          activeSlide2===1?
          <div className="titulo-arriba">Registros Akashicos</div>
          :<div className="titulo-arriba"></div>
        } 
        {
          activeSlide2===2?
          <div className="titulo-arriba">Sesión flores de Bach</div>
          :<div className="titulo-arriba"></div>
        } 
      <Slider {...settings}>
        <div className="imagenp" width="100%">
            
        {
          activeSlide2===3?
          <img src={ imagen1 }/>
          :<img className="imagenpe" src={ imagen1p }/>
        } 
        </div>
        <div className="imagenp" width="100%" >
        {
          activeSlide2===0? 
          <img src={ imagen2 }/>
          :<img className="imagenpe" src={ imagen2p }/>
        }
        </div>
        <div className="imagenp" width="100%" >
        {
          activeSlide2===1? 
          <img src={ imagen3 }/>
          :<img className="imagenpe" src={ imagen3p }/>
        }
        </div>
        <div  className="imagenp" width="100%">
        {
          activeSlide2===2? 
          <img src={ imagen4 }/>
          :<img className="imagenpe" src={ imagen4p }/>
        }
        </div>
        
      </Slider>


      {
          activeSlide2===3?
          <div className="titulo-abajo">Es una herramienta de ayuda a tu proceso personal de canalización espiritual</div>
          :<div className="titulo-abajo"></div>
        } 
        {
          activeSlide2===0?
          <div className="titulo-abajo">Es una disciplina que entiende que cuerpo y mente están fuertemente relacionadas, es por ello que si superamos si superamos lo que nos sucede mentalmente podremos superar cuestiones físicas.</div>
          :<div className="titulo-abajo"></div>
        } 
        {
          activeSlide2===1?
          <div className="titulo-abajo">Descubrí tu pasado, presente y potencial futuro en un viaje fascinante hacia tu ser más profundo.</div>
          :<div className="titulo-abajo"></div>
        } 
        {
          activeSlide2===2?
          <div className="titulo-abajo">La terapia floral es una poderosa manera de conectarte con la naturaleza y restaurar la armonía en tu vida. Cada flor tiene su propia energía y propiedades únicas pueden ayudarte a superar desafíos, liberar tensiones y encontrar la calma interior.</div>
          :<div className="titulo-abajo"></div>
        } 
    </div>
  );
}

export default SlideChangeHooks;