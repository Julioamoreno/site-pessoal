import React from 'react';

const Rodape = props => {
    return(
        <footer className='container-fluid text-center'>
            <a href='#topo' title='Ir para o topo'>
                <span className='glyphicon glyphicon-chevron-up'></span>
            </a>
            <p>Site criado por Júlio Armando</p>
            <p>Bootstrap Theme Made By <a href='https://www.w3schools.com' title='w3schools'>www.w3schools.com</a></p>
        </footer>
    )
}

export default Rodape;