import React from 'react';

import { MailIcon } from '@primer/octicons-react';
import IconLinkedin from '../utils/image/linkedin-Icone.png';
import IconWhatsapp from '../utils/image/whatsapp-Icone.png';
import IconGithub from '../utils/image/github-Icone.png';

const Contato = (props) => {
	return (
		<>
			<div id="contato" className="container-fluid bg-grey contato">
				<h2 className="text-center py-3">CONTATO</h2>
				<div className="row">
					<div className="col-sm-12 px-5 py-5">
						<p>
							<MailIcon size={20} /> {' '}
							julioarmando321@gmail.com
						</p>

						<p>
							<img src={IconWhatsapp} alt="whatsapp" width="20" height="20" />{' '}
							21 97153-9360
						</p>

						<p>
							{' '}
							<a
								href="http://www.linkedin.com/in/julioamoreno"
								className="text-decoration-none"
							>
								{' '}
								<img
									src={IconLinkedin}
									alt="linkedin"
									width="20"
									height="20"
								/>{' '}
								linkedin.com/a/julioamoreno{' '}
							</a>{' '}
						</p>
						<p>
							{' '}
							<a
								href="http://www.github.com/julioamoreno"
								className="text-decoration-none"
							>
								{' '}
								<img
									src={IconGithub}
									alt="github"
									width="20"
									height="20"
								/>{' '}
								github.com/julioamoreno{' '}
							</a>{' '}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contato;
