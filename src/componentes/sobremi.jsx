import pagina3 from './pagina3.png'
import yo from './yo.png'
import pagina3mobile from './pagina3-mobile.png'
import yop from './yop.png'

const sobremi = () => {



    return (
        <section id="sobremi">
        <div className="desktop">
        
          <div className="principal-fondo"><img src={pagina3} width="100%"/>
          <div className="principal-contenido">
          <div className="servicios-title2">Sobre Mi</div>
          <div className="saludo" align="center">¡Hola!</div>
            <div className="texto-principal3">Mi nombre es Tere y soy una luchadora incansable de mi libertad, soy Terapeuta Holistica y entiendo cuales son tus necesidades porque yo ya las tuve.</div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <table width="100%">
                <tr>
                    <td width="50%"><div><img src={yo} width="100%" height="100%"/></div></td>
                    <td width="50%"><div className="servicios-title22">Que Hago</div>
                    <div className="texto-principal33">Ayudo a personas que quieren ahondar en sus problemas para que logren un alivio interno a través de mis terapias.</div></td>
                </tr>
            </table>
          </div>
          </div>

        </div>
        </div>

        <div className="tablet">

        <div className="principal-fondo"><img src={pagina3} width="100%"/>
    
        <div className="principal-contenido">
        <div className="servicios-title2">Sobre Mi</div>
        <div className="saludo2">¡Hola!</div>
        <div className="texto-principal4">Mi nombre es Tere y soy una luchadora incansable de mi libertad, soy Terapeuta Holistica y entiendo cuales son tus necesidades porque yo ya las tuve.</div>
        <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <table width="100%">
                <tr>
                    <td width="50%"><div><img src={yo} width="100%" height="100%"/></div></td>
                    <td width="50%"><div className="servicios-title22">Que Hago</div>
                    <div className="texto-principal4">Ayudo a personas que quieren ahondar en sus problemas para que logren un alivio interno a través de mis terapias.</div></td>
                </tr>
            </table>
          </div>
        </div>

        </div>
        </div>

        <div className="movil">

        
       
        <br></br>
        <br></br>
        <div className="principal-fondo-mo" align="center"><img src={pagina3mobile} width="100%"/>

        <div className="principal-contenido-mo" align="center"><table width="100%" align='center'>
                <tr>
                    <td ><div className="saludo2" align="center">¡Hola!</div></td>
                    
                </tr>
                <tr>
                    <td><div className="texto-principal4" align="center">Mi nombre es Tere y soy una luchadora incansable de mi libertad, soy Terapeuta Holistica y entiendo cuales son tus necesidades porque yo ya las tuve.</div></td>
                    
                </tr>
            </table></div>
        
        
        </div>

        <div>
        <table width="100%" align='center'>
                <tr>
                    <td width="50%"><div><img src={yop} width="100%"/></div></td>
                    <td ><div className="servicios-title22">Que Hago</div>
                    <div className="texto-principal4">Ayudo a personas que quieren ahondar en sus problemas para que logren un alivio interno a través de mis terapias.</div></td>
                </tr>
               
            </table>

        </div>
        </div>

        </section>
)
}

export default sobremi