import React from 'react';

import { MailIcon } from '@primer/octicons-react';
import IconLinkedin from '../utils/image/linkedin-Icone.png';
import IconWhatsapp from '../utils/image/whatsapp-Icone.png';
import IconGithub from '../utils/image/github-Icone.png';
import IconWorkana from '../utils/image/workana_logo.png';
import IllustrationContact from '../utils/image/undraw_contact_us_15o2.svg';

const Contato = (props) => {
	return (
		<>
			<div id='contato' className='container-fluid bg-grey contato'>
				<h2 className='text-center py-3'>CONTATO</h2>
				<div className='row'>
					<div className='col-lg-4 px-5 py-5'>
						<p>
							<MailIcon alt='imagem-email' size={20} />{' '}
							julioarmando321@gmail.com
						</p>

						<p>
							<img src={IconWhatsapp} alt='whatsapp' width='20' height='20' />{' '}
							21 97153-9360
						</p>

						<p>
							{' '}
							<a
								href='http://www.linkedin.com/in/julioamoreno'
								className='text-decoration-none'
							>
								{' '}
								<img
									src={IconLinkedin}
									alt='linkedin'
									width='20'
									height='20'
								/>{' '}
								linkedin.com/a/julioamoreno{' '}
							</a>{' '}
						</p>
						<p>
							{' '}
							<a
								href='http://www.github.com/julioamoreno'
								className='text-decoration-none'
							>
								{' '}
								<img
									src={IconGithub}
									alt='github'
									width='20'
									height='20'
								/>{' '}
								github.com/julioamoreno{' '}
							</a>{' '}
						</p>
						<p>
							{' '}
							<a
								href='https://www.workana.com/freelancer/b0413b41266a8892b86a096ee66e4592?ref=user_dropdown'
								className='text-decoration-none'
								title='Meu perfil como Freelancer'
							>
								{' '}
								<img src={IconWorkana} alt='workana' width='20' height='20' />
								workana.com/julioamoreno
							</a>{' '}
						</p>
					</div>
					<div
						className='d-none d-lg-block col-lg-6'
						style={{ textAlign: 'right' }}
					>
						<img
							width='400'
							height='300'
							src={IllustrationContact}
							alt='contact illustration'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contato;
