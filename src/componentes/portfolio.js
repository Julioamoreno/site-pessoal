import React from 'react';

import IMGMailMarketing from '../utils/image/Login-cortado.png';
import IMGSemanaOmni11 from '../utils/image/Semana-Omni_stack11-cortado.png';
import IMGSemanaOmni10 from '../utils/image/Semana-Omni_stack10-cortado.png';

const Portfolio = (props) => {
	return (
		<div className="bg-light">
			<div className="container-fluid">
				<div className="row titulo">
					<div className="col my-auto">
						<h2 className="text-center">Projetos Pessoais</h2>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-6 col-lg-4">
						<div className="card border-secondary mb-4 box-shadow">
							<div className="card-header px-0">
								<h3>Mail Marketing</h3>
							</div>
							<img
								className="card-img-top img-thumbnail"
								alt="print tela mail marketing"
								src={IMGMailMarketing}
							/>
							<div className="card-body proj-desc py-2 py-sm-0 py-md-2">
								<p className="card-text">
									Projeto de disparos de email, através da API mailgun, com uso
									das tecnologias: React, MongoDB, NodeJS, Express.
								</p>
							</div>
							<div className="card-footer proj-links px-4">
								<a
									href="https://github.com/Julioamoreno/mailmarketing-frontend"
									className="card-link"
									target="_blank"
									rel="noopener noreferrer"
								>
									Github
								</a>
								<a
									href="https://digitalmarketingmm.herokuapp.com/"
									className="card-link"
									target="_blank"
									rel="noopener noreferrer"
								>
									Site
								</a>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-lg-4">
						<div className="card border-secondary mb-4 box-shadow">
							<div className="card-header px-0">
								<h3>Semana OmniStack10</h3>
							</div>
							<img
								className="card-img-top img-thumbnail"
								alt="print da tela omnistack 10"
								src={IMGSemanaOmni10}
							/>
							<div className="card-body proj-desc py-2 py-sm-0 py-md-2">
								<p className="card-text">
									Projeto do curso Omnistack10 feito pela RocketSeat, que
									consiste em criar uma aplicação para pessoas encontrarem
									desenvolvedores Uso das tecnologias: React, NodeJS, Express,
									Sqlite e Knex.JS
								</p>
							</div>
							<div className="card-footer proj-links px-4">
								<a
									href="https://github.com/Julioamoreno/SemanaOmnistack11"
									className="card-link"
									target="_blank"
									rel="noopener noreferrer"
								>
									Github
								</a>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-lg-4">
						<div className="card border-secondary mb-4 box-shadow">
							<div className="card-header px-0">
								<h3>Semana OmniStack11</h3>
							</div>
							<img
								className="card-img-top img-thumbnail"
								alt="print da tela omnistack 11"
								src={IMGSemanaOmni11}
							/>
							<div className="card-body proj-desc py-2 py-sm-0 py-md-2">
								<p className="card-text">
									Uso das tecnologias: React,NodeJS, Express, Sqlite e Knex.JS
								</p>
							</div>
							<div className="card-footer proj-links px-4">
								<a
									href="https://github.com/Julioamoreno/SemanaOmnistack11"
									className="card-link"
									target="_blank"
									rel="noopener noreferrer"
								>
									Github
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;