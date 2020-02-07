import React from 'react';
import { Link } from 'react-router-dom';

const Cabecalho = props => {
    return ( 
        <>  
            <nav className='barra'>
                <div className='container'>
                    <div className='barra-header'>
                        <Link className='barra-brand' to='/'>Júlio</Link>
                    </div>
                    <div className='collapse barra-collapse' id='mybarra'>
                        <ul className='nav barra-nav barra-right'>
                            <li><Link className='li-inicio' to='/'>INICIO</Link></li>
                            <li><Link to='/portifolio' className='disabled'>PORTIFOLIO</Link></li>
                            <li><Link to='/curriculo'>CURRÍCULO</Link></li>
                            <li><Link to='/contato'>CONTATO</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            

             </>
        )
}

export default Cabecalho;