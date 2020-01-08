import React from 'react';

const Resumo = props => {
    return(
        <>
            <div className='container'>
                <div className='row justify-content-around'>
                    <div className='col-sm-4 border'>
                        <div className='border border-success rounded'>
                            
                            <h2>Educação</h2>
                            <span className='glyphicon glyphicon-education'></span>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <h2>Experiência</h2>
                    </div>
                    <div className='col-sm-4'>
                        <h2>Skills</h2>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Resumo;