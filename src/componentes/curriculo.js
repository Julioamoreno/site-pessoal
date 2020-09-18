import React from 'react';

import {
	MortarBoardIcon,
	OrganizationIcon,
	PencilIcon,
	ChecklistIcon,
	GlobeIcon,
} from '@primer/octicons-react';

const Curriculo = props => {
	return (
		<div className="container-fluid">
			<div className="row coluna-sobre">
				<div className="col-md-4 objetivos">
					<h2>Objetivos</h2>
					<h5>Desenvolvedor Web Júnior</h5>
					<p>
						A procura de uma oportunidade para desenvolver minha
						carreira.
					</p>
				</div>
				<div className="col-md-4 tecnologias">
					<h2>Tecnologias</h2>
					<div className="bloco-tecnologias">
						<div className="tecnologia">
							<ul>
								<li>
									<h5>Front End</h5>
									<ul>
										<li>
											<p>
												<b>React</b>
											</p>
										</li>
									</ul>
								</li>
								<li>
									<h5>Back End</h5>
									<ul>
										<li>
											<p>
												<strong>NODE JS</strong>
											</p>
											<p>framework Express </p>
										</li>
									</ul>
								</li>
								<li>
									<h5>Banco de Dados</h5>

									<ul>
										<li>
											<p>
												<b>SQL</b>
											</p>
											<p>ORM: Sequelize</p>
											<p>
												<b>Mongo</b>
											</p>
											<p>ODM: Mongoose</p>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-4 descricao">
					<h2>Quem sou eu ?</h2>
					<p>
						Apaixonado por técnologia, amante de programação, sempre
						buscando aprender algo novo.
					</p>
				</div>
			</div>

			{/* RESUMO */}

			<div className="row my-5 mx-4">
				<div className="col">
					<h4>Resumo</h4>
				</div>
			</div>
			<div className="row grid align-items-middle">
				<div className="col-sm-6 col-lg-4 pl-lg-5 pr-lg-5 mb-3">
					<div className="card card-default text-left">
						<div className="card-body mx-2">
							<div className="col-sm-4 col-xs-12"></div>
							<div className="row ">
								<div className="title col">
									<MortarBoardIcon size={'medium'} />
									<h4>Educação</h4>
								</div>
							</div>
							<div className="row edu dot">
								<div className="hgroup">
									<h3>Ensino Superior Completo</h3>
									<h4>Ciência da Computação</h4>
									<h6>JUL 2011 - DEZ 2018</h6>
								</div>
							</div>
							<div className="row edu dot">
								<div className="hgroup mb-2">
									<h4>Técnico em Informática</h4>
									<h6>JAN 2008 - DEZ 2010</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* bloco 2 - Experiencia      */}
				<div className="col-sm-6 col-lg-4 px-lg-5 mb-3">
					<div className="card card-default text-left">
						<div className="card-body mx-2">
							<div className="col-sm-4 col-xs-12 "></div>
							<div className="row mx-2">
								<div className="title col">
									<OrganizationIcon size={'medium'} />
									<h4>Experiência</h4>
								</div>
							</div>
							<div className="edu dot">
								<div className="hgroup">
									<h3>MLS - Wireless</h3>
									<h4>Suporte Técnico</h4>
									<h6>FEV 2013 - SET 2014</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* bloco 3- cursos        */}
				<div className="col-sm-6 col-lg-4 px-lg-5 mb-3">
					<div className="card card-default text-left">
						<div className="card-body mx-2">
							<div className="col-sm-4 col-xs-12 "></div>
							<div className="row ">
								<div className="title col">
									<PencilIcon size={'medium'} />
									<h4>Cursos</h4>
								</div>
							</div>
							<div className="curso dot">
								<div className="hgroup mb-2">
									<h4>Cloud Computing e Serverless</h4>
									<h5>Digital Innovation One</h5>
									<h6>Conclusão: JUL 2020</h6>
									<h5>
										<a href="https://certificates.digitalinnovation.one/43FFD38E">
											Link Certificado
										</a>
									</h5>
								</div>
							</div>
							<div className="curso dot">
								<div className="hgroup mb-2">
									<h4>Bootcamp desenvolvedor FullStack</h4>
									<h5>
										Instituto de Gestão e Tecnologia da
										Informação-IGTI 148Horas
									</h5>
									<h6>Conclusão: SET 2020</h6>
									<h5>
										<a href="https://media-exp1.licdn.com/dms/image/C562DAQG6_JUtQNvCug/profile-treasury-document-cover-images_800/0?e=1600552800&v=beta&t=HfswHRbFuMhP3GfXrKnBLraOp12hlpeto3qjvrFvxCQ">
											Link Certificado
										</a>
									</h5>
								</div>
							</div>
							<div className="curso dot">
								<div className="hgroup mb-2">
									<h4>Autenticação com Node.js e Passport</h4>
									<h5>SCHOOL OF NET - 6 horas</h5>
									<h6>Conclusão: DEZ 2019</h6>
									<h5>
										<a href="https://www.schoolofnet.com/validar-certificado/?certificate=fe8ebb11-d7ec-48c7-9abb-07dbb532444b">
											Link Certificado
										</a>
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* bloco 4 - skills     */}
				<div className="col-sm-6 col-lg-6 col-xl-4 mb-3">
					<div className="card card-default text-left">
						<div className="card-body mx-2">
							<div className="col-sm-4 col-xs-12"></div>
							<div className="row ">
								<div className="title col">
									<ChecklistIcon size={'medium'} />
									<h4>Skills</h4>
								</div>
							</div>
							<div className="skills ml-4">
								<ul>
									<li>
										<h4>NODEJS</h4>
										<div className="grau">
											<span></span>
											<span></span>
											<span className="desabilitado"></span>
											<span className="desabilitado"></span>
											<span className="desabilitado"></span>
										</div>
									</li>
									<li>
										<h4>EXPRESS</h4>
										<div className="grau">
											<span></span>
											<span></span>
											<span className="desabilitado"></span>
											<span className="desabilitado"></span>
											<span className="desabilitado"></span>
										</div>
									</li>
									<li>
										<h4>REACT</h4>
										<div className="grau">
											<span></span>
											<span className="desabilitado"></span>
											<span className="desabilitado"></span>
											<span className="desabilitado"></span>
											<span className="desabilitado"></span>
										</div>
									</li>
									<li>
										<h4>SQL</h4>
										<div className="grau">
											<span></span>
											<span></span>
											<span className="desabilitado"></span>
											<span className="desabilitado"></span>
											<span className="desabilitado"></span>
										</div>
									</li>
									<li>
										<h4>MONGODB</h4>
										<div className="grau">
											<span></span>
											<span className="desabilitado"></span>
											<span className="desabilitado"></span>
											<span className="desabilitado"></span>
											<span className="desabilitado"></span>
										</div>
									</li>
									<li>
										<h4>Jest</h4>
										<div className="grau">
											<span></span>
											<span className="desabilitado"></span>
											<span className="desabilitado"></span>
											<span className="desabilitado"></span>
											<span className="desabilitado"></span>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* Lingua */}
				<div className="col-sm-6 col-lg-6 col-xl-4 px-lg-5 mb-5">
					<div className="card card-default text-left">
						<div className="card-body mx-2">
							<div className="col-sm-4 col-xs-12"></div>
							<div className="row ">
								<div className="title col">
									<GlobeIcon size={'medium'} />
									<h4>Lingua</h4>
								</div>
							</div>
							<div className="skills ml-4">
								<ul>
									<li>
										<h4>Inglês</h4>
										<div className="grau">
											<span></span>
											<span></span>
											<span className="desabilitado"></span>
											<span className="desabilitado"></span>
											<span className="desabilitado"></span>
										</div>
									</li>
									<li>
										<h4>Espanhol</h4>
										<div className="grau">
											<span></span>
											<span></span>
											<span></span>
											<span className="desabilitado"></span>
											<span className="desabilitado"></span>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Curriculo;
