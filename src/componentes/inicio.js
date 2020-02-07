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
                        <p>
                            Uma pessoa focada, analítica, amante de novas tecnologias.
                            Sempre em busca de conhecimentos que possibilitem evoluir minhas áreas de conhecimento,
                            tentando sempre estar atento aos novos direcionamentos.
                            
                        </p>
                    
                    </div>
                    <div className='col-sm-4'>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Inicio;