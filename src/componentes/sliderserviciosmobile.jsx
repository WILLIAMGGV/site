import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import imagen1 from '../Servicios/img1.png'
import imagen2 from '../Servicios/img2.png'
import imagen3 from '../Servicios/img3.png'
import imagen4 from '../Servicios/img4.png'



function SlideChangeHooks() {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);




  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
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
          activeSlide2===0?
          <div className="titulo-arriba-mobile">Lectura de Oráculos Angelical</div>
          :<div className="titulo-arriba-mobile"></div>
        } 
        {
          activeSlide2===1?
          <div className="titulo-arriba-mobile">Sesión de Biodescodificacion online</div>
          :<div className="titulo-arriba-mobile"></div>
        } 
        {
          activeSlide2===2?
          <div className="titulo-arriba-mobile">Registros Akashicos</div>
          :<div className="titulo-arriba-mobile"></div>
        } 
        {
          activeSlide2===3?
          <div className="titulo-arriba-mobile">Sesión flores de Bach</div>
          :<div className="titulo-arriba-mobile"></div>
        } 
      <Slider {...settings}>
        <div className="imagenp" width="100%">
            
       
          <img src={ imagen1 }/>
       
        </div>
        <div className="imagenp" width="100%" >
    
          <img src={ imagen2 }/>
    
        </div>
        <div className="imagenp" width="100%" >
 
          <img src={ imagen3 }/>

        </div>
        <div  className="imagenp" width="100%">

          <img src={ imagen4 }/>

        </div>
        
      </Slider>


      {
          activeSlide2===0?
          <div className="titulo-abajo-mobile">Es una herramienta de ayuda a tu proceso personal de canalización espiritual</div>
          :<div className="titulo-abajo-mobile"></div>
        } 
        {
          activeSlide2===1?
          <div className="titulo-abajo-mobile">Es una disciplina que entiende que cuerpo y mente están fuertemente relacionadas, es por ello que si superamos si superamos lo que nos sucede mentalmente podremos superar cuestiones físicas.</div>
          :<div className="titulo-abajo-mobile"></div>
        } 
        {
          activeSlide2===2?
          <div className="titulo-abajo-mobile">Descubrí tu pasado, presente y potencial futuro en un viaje fascinante hacia tu ser más profundo.</div>
          :<div className="titulo-abajo-mobile"></div>
        } 
        {
          activeSlide2===3?
          <div className="titulo-abajo-mobile">La terapia floral es una poderosa manera de conectarte con la naturaleza y restaurar la armonía en tu vida. Cada flor tiene su propia energía y propiedades únicas pueden ayudarte a superar desafíos, liberar tensiones y encontrar la calma interior.</div>
          :<div className="titulo-abajo-mobile"></div>
        } 
    </div>
  );
}

export default SlideChangeHooks;