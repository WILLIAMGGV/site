import { useState } from 'react';
import './Cabecera.css';
import Logo from '../logo.png';
import Logo2 from '../logo2.png';

const Cabecera = () => {

    const [ menu , setMenu ] = useState( false )

    const toggleMenu = () => {
        setMenu( !menu )
    }

    return (
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
                <li className="Cabecera-li"><a href="#inicio" className="Cabecera-a">Inicio</a></li>
                <li className="Cabecera-li"><a href="#porque" className="Cabecera-a">Porque hacer terapia</a></li>
                <li className="Cabecera-li"><a href="#servicios" className="Cabecera-a">Servicios</a></li>
                <li className="Cabecera-li"><a href="#sobremi" className="Cabecera-a">Sobre Mi</a></li>
                <li className="Cabecera-li"><a href="#contactos" className="Cabecera-a">Contacto</a></li>
            </ul>
        </nav>

    </header>
)
}

export default Cabecera