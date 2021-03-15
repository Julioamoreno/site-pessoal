import React from 'react';

import AppLeticiaMachado from '../utils/image/AppEquipeLeticiaMachado.mp4';

export default function LeticiaMachado() {
	return (
		<div className='container-fluid'>
			<div className='row titulo'>
				<div className='col my-auto'>
					<h2 className='text-center' data-testid='titulo-portfolio'>
						Equipe Leticia Machado
					</h2>
				</div>
			</div>
			<div className='row text-center'>
				<div className='col-sm-6'>
					<video
						src={AppLeticiaMachado}
						autoPlay
						loop
						className='border'
						style={{ height: '80vh' }}
					></video>
				</div>
				<div className='col-sm-6 mt-5' style={{ height: '80vh' }}>
					<p className='card-text align-middle'>
						Um sistema completo, onde foi necessário criar um app com versão
						para o paciente onde o mesmo poderia realizar agendamento de
						consultas, um app para o administrador onde era possível gerenciar
						todas os agendamentos (confirmar, cancelar), enviar uma mensagem ao
						usuário e também ter todos os dados como por exemplo as próximas
						consultas confirmadas. No Back end foi desenvolvida toda a lógica
						para o agendamento, onde foi necessário listar os dias disponíveis
						para agendar, através de algumas configurações que deveriam ser
						informadas pelo administrador, exemplo: horário de inicio e
						encerramento das consultas. Foi necessário também a criação de um
						painel administrativo que foi criado em react, e conta com todas as
						funcionalidades como envio de video aula e confirmação de uma
						consulta, mas também é onde o administrador informa os dados da
						configuração do agendamento.
					</p>
					<div className='row'>
						<div className='col-2'>
							<p className='border'>React</p>
						</div>
						<div className='col-3'>
							<p className='border'>React Native</p>
						</div>
						<div className='col-2'>
							<p className='border'>NodeJS</p>
						</div>
						<div className='col-2'>
							<p className='border'>Adonis</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
