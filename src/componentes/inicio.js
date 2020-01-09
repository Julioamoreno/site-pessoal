import React from 'react';

const Inicio = props => {
    return(
        <>
        
            <div id='topo' className='jumbotron text-center'>
                <h1>Júlio Armando</h1> 
                <p>Programador Web Júnior</p> 
            </div>

            {/* Container (Sobre Inicial) */}
            <div id='about' className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <h2>Sobre Júlio Armando</h2><br />
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                    </div>
                    <div className='col-sm-4'>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Inicio;