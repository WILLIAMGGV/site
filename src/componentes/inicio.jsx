import pagina1 from './pagina1.png'
import logoh from './logo-horizontal.png'
import pagina1mobile from './pagina1-mobile.png'
import logohmobile from './logohmobile.png'

const inicio = () => {



    return (
        <section id="inicio">
        <div className="desktop">

          <div className="principal-fondo"><img src={pagina1} width="100%"/>
          <div className="principal-contenido">
            <div className="logo-h"><img src={logoh} width="70%"/></div>
            <div className="texto-principal">Nunca es Tarde para ser Libre</div>
            <div className="boton-p"><button className="boton-principal">Contactame</button></div>
          </div>

        </div>
        </div>

        <div className="tablet">

        <div className="principal-fondo"><img src={pagina1} width="100%"/>
        <div className="principal-contenido">
          <div className="logo-h"><img src={logoh} width="70%"/></div>
          <div className="texto-principal2">Nunca es tarde para ser libre</div>
          <div className="boton-p2"><button className="boton-principal">Contactame</button></div>
        </div>

        </div>
        </div>

        <div className="movil">

        
        <div className="principal-contenido-mobile">
          <div className="logo-h-mobile" align="center"><img src={logohmobile} width="60%"/></div>
          <div className="texto-principal-mobile" align="center">Nunca es tarde para ser libre</div>
          <div className="boton-p-mobile" align="center"><button className="boton-principal">Contactame</button></div>
        </div>

        <div className="principal-fondo-mobile"><img src={pagina1mobile} width="100%"/>
        
        </div>

        </div>

        </section>
)
}

export default inicio