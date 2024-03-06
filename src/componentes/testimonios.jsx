import SliderTestimonio from './slidertestimonio'
import SliderTestimonioTablet from './slidertestimoniotablet'
import SliderTestimonioMobile from './slidertestimoniomobile'


const testimonios = () => {



    return (
        <div className="div-testimonio-principal">
          <br></br>
          <br></br>
          <br></br>
        
      <div className="div-testimonio">

        <div className="desktop">


          <div className="servicios-title">Testimonio</div>

          <div className="slider-desktop" width="90%" align="center">
          <SliderTestimonio />
          </div>

        </div>

        <div className="tablet">


          <div className="servicios-title">Testimonio</div>
          <br></br>
          <br></br>

          <div className="slider-desktop" width="90%" align="center">
          <SliderTestimonioTablet />
          </div>

        </div>

        <div className="movil">


          <div className="servicios-title-mobile" align="center">Testimonio</div>
          <br></br>
        <br></br>
        <br></br>
          <div className="slider-desktop" width="90%" align="center">
          <SliderTestimonioMobile />
          </div>

        </div>
        
      </div>

    
</div>


)
}

export default testimonios