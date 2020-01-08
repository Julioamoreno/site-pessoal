import React from 'react';
import { Link } from 'react-router-dom';

import githubIcon from '../utils/image/github-Icone.png';

const Cabecalho = props => {
    return ( 
        <>  
            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>                        
                        </button>
                        <Link className='navbar-brand' to='/'>Júlio</Link>
                    </div>
                    <div className='collapse navbar-collapse' id='myNavbar'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><Link to='/'>INICIO</Link></li>
                            <li><Link to='/servicos'>SERVIÇOS</Link></li>
                            <li><Link to='/portifolio'>PORTIFOLIO</Link></li>
                            <li><Link to='/curriculo'>CURRÍCULO</Link></li>
                            <li><Link to='/contato'>CONTATO</Link></li>
                            <li><a href='http://github.com/julioamoreno'><img src={githubIcon} alt='github' height='25' width='25'/></a> </li>
                        </ul>
                    </div>
                </div>
            </nav>
            

             </>
        )
}

export default Cabecalho;