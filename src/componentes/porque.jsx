import pagina2 from './pagina2.png'
import pagina2mobile from './pagina2-mobile.png'




const porque = () => {



    return (
        <section id="porque">
        <div className="desktop">

          <div className="pagina2-fondo"><img src={pagina2} width="100%"/>
          <div className="principal-contenido2">
            
            <div className="texto-principal2">Por que hacer terapia</div>
            <div className="parrafo-principal2">Te va a servir para liberarte de creencias limitántes, juntos podemos trabajar para sanar la relación con tus padres, heridas de la niñez, te guio y te enseño a limpiar memorias del árbol genealógico.</div>
          
          </div>

        </div>

        
        </div>


        <div className="tablet">

          <div className="pagina2-fondo"><img src={pagina2} width="100%"/>
          <div className="principal-contenido2-tablet">
            
            <div className="texto-principal2-tablet">Por que hacer terapia</div>
            <div className="parrafo-principal2-tablet">Te va a servir para liberarte de creencias limitántes, juntos podemos trabajar para sanar la relación con tus padres, heridas de la niñez, te guio y te enseño a limpiar memorias del árbol genealógico.</div>
          
          </div>

        </div>

        
        </div>



        <div className="movil">

          
          <div className="principal-contenido2-movil" align="center">
            
            <div className="texto-principal2-movil" align="center">Por que hacer terapia</div>
            <div className="parrafo-principal2-movil" align="center">Te va a servir para liberarte de creencias limitántes, juntos podemos trabajar para sanar la relación con tus padres, heridas de la niñez, te guio y te enseño a limpiar memorias del árbol genealógico.</div>
          
          </div>

            <div className="pagina2-fondo-movil"><img src={pagina2mobile} width="100%"/>
          

        </div>

        
        </div>
        </section>
)
}

export default porque