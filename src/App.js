
import Logo from './logo.png';
import Logo2 from './logo2.png';
import Inicio from './componentes/inicio'
import Porque from './componentes/porque'
import Servicios from './componentes/servicios'
import Testimonios from './componentes/testimonios'
import Sobremi from './componentes/sobremi'
import Footer from './componentes/footer'

import ContactUS from './componentes/enviaremail'


import { useState } from 'react';

import './App.css';


const App = () => {

  const [ seccioninicio , setSeccionInicio ] = useState(true)
  const [ seccionsobremi , setSeccionSobreMi ] = useState(false)
  const [ seccioncontacto , setSeccionContacto ] = useState(false)
  const [ seccionporque , setSeccionPorque ] = useState(false)
  const [ seccionservicios , setSeccionServicios ] = useState(false)

  const [ menu , setMenu ] = useState( false )

    const toggleMenu = () => {
        setMenu( !menu )
    }

  return (
    <div className="App">

      
    <header className="Cabecera">
        
        <div className="desktop">
      <img src={Logo} className="App-logo" alt="logo" />
        </div>
        <div className="tablet">
        <img src={Logo2} className="App-logo2" alt="logo" />
        </div>
        <div className="movil">
        <img src={Logo2} className="App-logo2" alt="logo" />
        </div>

        <button 
            onClick={ toggleMenu }
         className="Cabecera-button">
       
        <svg class="Cabecera-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>

        <nav className={ `Cabecera-nav ${ menu ? 'isActive' : '' }` }>
            <ul className="Cabecera-ul">
                <li className="Cabecera-li"><a href="#inicio" 
                onClick={()=>{
                  setSeccionInicio(true);
                  setSeccionSobreMi(false);
                  setSeccionContacto(false);
                  setSeccionServicios(false);
                  setSeccionPorque(false);
                }}
                className="Cabecera-a">Inicio</a></li>
                <li className="Cabecera-li"><a href="#porque" 
                onClick={()=>{
                  setSeccionInicio(false);
                  setSeccionSobreMi(false);
                  setSeccionContacto(false);
                  setSeccionServicios(false);
                  setSeccionPorque(true);
                }}
                className="Cabecera-a">Porque hacer terapia</a></li>
                <li className="Cabecera-li"><a href="#servicios" 
                onClick={()=>{
                  setSeccionInicio(false);
                  setSeccionSobreMi(false);
                  setSeccionContacto(false);
                  setSeccionServicios(true);
                  setSeccionPorque(false);
                }}
                className="Cabecera-a">Servicios</a></li>
                <li className="Cabecera-li"><a href="#sobremi" 
                onClick={()=>{
                  setSeccionInicio(false);
                  setSeccionSobreMi(true);
                  setSeccionContacto(false);
                  setSeccionServicios(false);
                  setSeccionPorque(false);
                }}
                className="Cabecera-a">Sobre Mi</a></li>
                <li className="Cabecera-li"><a href="#contactos" 
                onClick={()=>{
                  setSeccionInicio(false);
                  setSeccionSobreMi(false);
                  setSeccionContacto(true);
                  setSeccionServicios(false);
                  setSeccionPorque(false);
                }}
                className="Cabecera-a">Contacto</a></li>
            </ul>
        </nav>

    </header>
     {
          seccioninicio? 
          <div>
            <Inicio />
            <Porque />
            <Servicios />
            <Testimonios />
            <Footer />
          </div>:<input type='hidden' id="inicio1" value='0'></input>
      }
      {
          seccionsobremi? 
          <div>
            <Sobremi />
            <Footer />
          </div>:<input type='hidden' id="inicio1" value='0'></input>
      }
      {
          seccioncontacto? 
          <div>
           
           <ContactUS />
            <Footer />
          </div>:<input type='hidden' id="inicio1" value='0'></input>
      }
      {
          seccionservicios? 
          <div>
            <Servicios />
            <Footer />
          </div>:<input type='hidden' id="inicio1" value='0'></input>
      }
      {
          seccionporque? 
          <div>
            <Porque />
            <Footer />
          </div>:<input type='hidden' id="inicio1" value='0'></input>
      }


    </div>
  )
}

export default App
