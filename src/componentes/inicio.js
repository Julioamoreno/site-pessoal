import React from 'react';

const Inicio = (props) => {
	return (
		<div className='container-fluid'>
			<div className='row' id='topo'>
				<div className='col text-center my-auto'>
					<h1>Júlio Armando</h1>
					<h2>Programador Web Júnior</h2>
				</div>
			</div>

			<div className='row' id='sobre'>
				<div className='col-sm-8 my-auto'>
					<h2>Sobre Júlio Armando</h2>
					<p>
						Sempre em busca de conhecimentos que possibilitem evoluir minhas
						áreas de conhecimento, tentando sempre estar atento aos novos
						direcionamentos do mercado. Atualmente trabalhando como freelancer,
						fullstack Javascript (React, Node.JS, Express e Adonis).
					</p>
				</div>
			</div>
		</div>
	);
};

export default Inicio;
