import React from 'react';
import { Link } from 'react-router-dom';

const Cabecalho = (props) => {
	return (
		<>
			<nav className="navbar navbar-expand">
				<div className="navbar-header pr-md-5">
					<Link className="navbar-brand" to="/">
						Júlio
					</Link>
				</div>
				<div className="collapse navbar-collapse" id="mynavbar">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item px-md-2 d-none d-sm-block">
							<Link to="/" className="text-decoration-none">
								INICIO
							</Link>
						</li>
						<li className="nav-item px-1 px-sm-2">
							<Link to="/portfolio" className="text-decoration-none">
								PORTFÓLIO
							</Link>
						</li>
						<li className="nav-item px-1 px-sm-2">
							<Link to="/curriculo" className="text-decoration-none">
								CURRÍCULO
							</Link>
						</li>
						<li className="nav-item px-1 px-sm-2">
							<Link to="/contato" className="text-decoration-none">
								CONTATO
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Cabecalho;
