import React from 'react';

import IconLinkedin from '../utils/image/linkedin-Icone.png';
import IconWhatsapp from '../utils/image/whatsapp-Icone.png';
import IconGithub from '../utils/image/github-Icone.png';

const Contato = props => {
    return(
        <>
            <div id='contato' className='container-fluid bg-grey contato'>
                <h2 className='text-center'>CONTATO</h2>
                <div className='row'>
                    <div className='col-sm-12'>
                        <p><span className='glyphicon glyphicon-envelope'> </span>  julioarmando321@gmail.com</p>
                        <div className='row'>
                            <div className='col-sm-5'>
                                <p><span className='glyphicon glyphicon-phone'> </span>  21 97153-9360</p>
                            </div>
                            <div className='col-sm-5'>
                                <p><img src={IconWhatsapp} alt='whatsapp' width='20' height='20'/> 21 99350-1692 </p>
                            </div>
                        </div>
                        <p> <a href='http://www.linkedin.com/in/julioamoreno' className="text-decoration-none"> <img src={IconLinkedin} alt='linkedin' width='20' height='20'/> linkedin.com/a/julioamoreno </a>  </p>
                        <p> <a href='http://www.github.com/julioamoreno' className="text-decoration-none"> <img src={IconGithub} alt='github' width='20' height='20'/>   github.com/julioamoreno </a>  </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contato;