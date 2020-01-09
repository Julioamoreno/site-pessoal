import React from 'react';

const Curriculo = props => {
    return(
        <>
            <div className='container-fluid'>
                <div id='topo' className='text-center'>
                    <h2>Currículo</h2>
                    <h4>Resumo</h4>
                </div>
                <div className='grid'>
                    {/* bloco 1 - Educação */}
                    <div className='grid-item'>
                        <div className='panel panel-default text-left'>
                            <div className='panel-body'>
                                    <div className='col-sm-4 col-xs-12 glyphicon glyphicon-education'></div>
                                <div className='row '>
                                    <div className='title medium'>
                                    <h4>Educação</h4>
                                </div>
                
                                
                                </div>
                                <div className='edu'>
                                    <div className='hgroup mb-5'>
                                    
                                    <h3>Ensino Superior Completo</h3>
                                    <h4>Ciência da Computação</h4>
                                    <h6>JUL 2011 - DEZ 2018</h6>
                                    </div>
                                </div>
                                <div className='edu'>
                                    <div className='hgroup mb-5'>
                                    
                                    <h4>Técnico em Informática</h4>
                                    <h6>JAN 2008 - DEZ 2010</h6>
                                    </div>
                                </div>
                            </div>
                        </div>      
                    </div>
                    {/* bloco 2 - Experiencia      */}
                    <div className='grid-item'>
                        <div className='panel panel-default text-left'>
                        <div className='panel-body'>
                                    <div className='col-sm-4 col-xs-12 glyphicon glyphicon-briefcase'></div>
                                <div className='row '>
                                    <div className='title medium'>
                                    <h4>Experiência</h4>
                                    </div>
                
                                
                                </div>
                                <div className='edu'>
                                    <div className='hgroup mb-5'>
                                    
                                    <h3>MLS - Wireless</h3>
                                    <h4>Suporte Técnico</h4>
                                    <h6>FEV 2013 - SET 2014</h6>
                                    </div>
                                </div>
                            </div>
                        </div>      
                    </div>
                    {/* bloco 3- cursos        */}
                    <div className='grid-item'>
                        <div className='panel panel-default text-left'>
                            <div className='panel-body'>
                                    <div className='col-sm-4 col-xs-12 glyphicon glyphicon-pencil'></div>
                                <div className='row '>
                                    <div className='title medium'>
                                    <h4>Cursos</h4>
                                    </div>
                
                                
                                </div>
                                <div className='curso'>
                                    <div className='hgroup mb-5'>
                                    
                                        <h4>Curso Node.js Básico</h4>
                                        <h5>SCHOOL OF NET - 06 horas</h5>
                                        <h6>Conclusão: NOV 2019</h6>
                                        <h5><a href='https://www.schoolofnet.com/validar-certificado/?certificate=e328dfb5-fa1b-45a0-b38c-c3fa6650c4b0'>Link Certificado</a></h5>
                                    </div>
                                </div>
                                <div className='curso'>
                                    <div className='hgroup mb-5'>
                                    
                                        <h4>NODE COM EXPRESS.JS</h4>
                                        <h5>SCHOOL OF NET - 6 horas</h5>
                                        <h6>Conclusão: DEZ 2019</h6>
                                        <h5><a href='https://www.schoolofnet.com/validar-certificado/?certificate=1f134341-260c-4d29-8fea-b68f5063fe51'>Link Certificado</a></h5>
                                    </div>
                                </div>
                                <div className='curso'>
                                    <div className='hgroup mb-5'>
                                    
                                        <h4>Autenticação com Node.js e Passport</h4>
                                        <h5>SCHOOL OF NET - 6 horas</h5>
                                        <h6>Conclusão: DEZ 2019</h6>
                                        <h5><a href='https://www.schoolofnet.com/validar-certificado/?certificate=fe8ebb11-d7ec-48c7-9abb-07dbb532444b'>Link Certificado</a></h5>
                                    </div>
                                </div>
                                <div className='curso'>
                                    <div className='hgroup mb-5'>
                                    
                                        <h4>ECMAScript 6</h4>
                                        <h5>SCHOOL OF NET - 7 horas</h5>
                                        <h6>Conclusão: NOV 2019</h6>
                                        <h5><a href='https://www.schoolofnet.com/validar-certificado/?certificate=f39708d4-c413-480e-96d5-4103f0854ca0'>Link Certificado</a></h5>
                                    </div>
                                </div>
                                <div className='curso'>
                                    <div className='hgroup mb-5'>
                                    
                                        <h4>Iniciando Com MongoDB</h4>
                                        <h5>SCHOOL OF NET - 6 horas</h5>
                                        <h6>Conclusão: DEZ 2019</h6>
                                        <h5><a href='https://www.schoolofnet.com/validar-certificado/?certificate=ce2a9b37-721b-4661-b236-c77c98d4ed56'>Link Certificado</a></h5>
                                    </div>
                                </div>
                               
                            </div>      
                        </div>
                    </div>

                    {/* bloco 4 - skills     */}
                    <div className='grid-item'>
                        <div className='panel panel-default text-left'>
                            <div className='panel-body'>
                                <div className='col-sm-4 col-xs-12 glyphicon glyphicon-check'></div>
                                <div className='row '>
                                    <div className='title medium'>
                                        <h4>Skills</h4>
                                    </div>
                
                                
                                </div>
                                <div className='skills mt-40'>
                                    <ul>
                                        <li>
                                            <h4>HTML/CSS</h4>
                                            <div className='grau'>
                                                <span></span>
                                                <span></span>
                                                <span className='desabilitado'></span>
                                                <span className='desabilitado'></span>
                                                <span className='desabilitado'></span>
                                            </div>
                                        </li>
                                        <li>
                                            <h4>NODEJS</h4>
                                            <div className='grau'>
                                                <span></span>
                                                <span className='desabilitado'></span>
                                                <span className='desabilitado'></span>
                                                <span className='desabilitado'></span>
                                                <span className='desabilitado'></span>
                                            </div>
                                        </li>
                                        <li>
                                            <h4>EXPRESS</h4>
                                            <div className='grau'>
                                                <span></span>
                                                <span className='desabilitado'></span>
                                                <span className='desabilitado'></span>
                                                <span className='desabilitado'></span>
                                                <span className='desabilitado'></span>
                                            </div>
                                        </li>
                                        <li>
                                            <h4>REACT</h4>
                                            <div className='grau'>
                                                <span></span>
                                                <span className='desabilitado'></span>
                                                <span className='desabilitado'></span>
                                                <span className='desabilitado'></span>
                                                <span className='desabilitado'></span>
                                            </div>
                                        </li>
                                        <li>
                                            <h4>SQL</h4>
                                            <div className='grau'>
                                                <span></span>
                                                <span></span>
                                                <span className='desabilitado'></span>
                                                <span className='desabilitado'></span>
                                                <span className='desabilitado'></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>      
                        </div>
                    </div>
                    {/* Lingua */}
                    <div className='grid-item'>
                        <div className='panel panel-default text-left'>
                            <div className='panel-body'>
                                <div className='col-sm-4 col-xs-12 glyphicon glyphicon-stats'></div>
                                <div className='row '>
                                    <div className='title medium'>
                                        <h4>Lingua</h4>
                                    </div>
                
                                
                                </div>
                                <div className='skills mt-40'>
                                    <ul>
                                        <li>
                                            <h4>Inglês</h4>
                                            <div className='grau'>
                                                <span></span>
                                                <span></span>
                                                <span className='desabilitado'></span>
                                                <span className='desabilitado'></span>
                                                <span className='desabilitado'></span>
                                            </div>
                                        </li>
                                        <li>
                                            <h4>Espanhol</h4>
                                            <div className='grau'>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span className='desabilitado'></span>
                                                <span className='desabilitado'></span>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Curriculo;