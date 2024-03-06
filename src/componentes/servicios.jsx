import SliderServicios from './sliderservicios'
import SliderServiciosTablet from './sliderserviciostablet'
import SliderServiciosMobile from './sliderserviciosmobile'



const servicios = () => {



    return (
        <section id="servicios">
        <div className="desktop">


          <div className="servicios-title">Servicios</div>

          <div className="slider-desktop" width="90%" align="center">
          <SliderServicios />
          </div>

        </div>

        <div className="tablet">


          <div className="servicios-title">Servicios</div>

          <div className="slider-desktop" width="90%" align="center">
          <SliderServiciosTablet />
          </div>

        </div>

        <div className="movil">


          <div className="servicios-title-mobile" align="center">Servicios</div>

          <div className="slider-desktop" width="90%" align="center">
          <SliderServiciosMobile />
          </div>

        </div>
        </section>
)
}

export default servicios