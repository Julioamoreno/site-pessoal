import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Curriculo from './curriculo.js';

test('Deve ser possível ver o titulo objetivos', () => {
	const { getByTestId } = render(
		<Router>
			<Curriculo />
		</Router>
	);
	const objetivoTitulo = getByTestId('objetivo-titulo');
	expect(objetivoTitulo).toBeInTheDocument();
});

test('Deve ser possível ver o subtitulo dos objetivos', () => {
	const { getByTestId } = render(
		<Router>
			<Curriculo />
		</Router>
	);
	const objetivoSubtitulo = getByTestId('objetivo-subtitulo');
	expect(objetivoSubtitulo).toBeInTheDocument();
});

test('Deve ser possível ver o paragrafo de objetivos', () => {
	const { getByTestId } = render(
		<Router>
			<Curriculo />
		</Router>
	);
	const objetivoConteudo = getByTestId('objetivo-conteudo');
	expect(objetivoConteudo).toBeInTheDocument();
});

test('Deve ser possível ver o bloco de tecnologias', () => {
	const { container } = render(
		<Router>
			<Curriculo />
		</Router>
	);
	expect(
		container.querySelector('[class="tecnologia"]')
	).toBeInTheDocument();
});

test('Deve ser possível ver o bloco de descriçao', () => {
	const { getByTestId } = render(
		<Router>
			<Curriculo />
		</Router>
	);

	const quemSouEu = getByTestId('quem-sou-eu');
	expect(quemSouEu).toBeInTheDocument();
});

test('Deve ser possível ver o bloco resumo', () => {
	const { getByTestId } = render(
		<Router>
			<Curriculo />
		</Router>
	);

	const idResumoTitulo = getByTestId('resumo-titulo');
	expect(idResumoTitulo).toBeInTheDocument();
});

test('Deve ser possível ver o campo ensino superior', () => {
	const { getByTestId } = render(
		<Router>
			<Curriculo />
		</Router>
	);

	const idEducacaoConteudo = getByTestId('educacao-conteudo');
	expect(idEducacaoConteudo).toBeInTheDocument();
});

test('Deve ser possível ver o titulo experiencia', () => {
	const { getByTestId } = render(
		<Router>
			<Curriculo />
		</Router>
	);

	const idTituloExperiencia = getByTestId('experiencia-titulo');
	expect(idTituloExperiencia).toBeInTheDocument();
});

test('Deve ser possível ver o campo de experiencia', () => {
	const { getByTestId } = render(
		<Router>
			<Curriculo />
		</Router>
	);

	const idConteudoExperiencia1 = getByTestId('experiencia-conteudo1');
	expect(idConteudoExperiencia1).toBeInTheDocument();
});

test('Deve ser possível ver o titulo cursos', () => {
	const { getByTestId } = render(
		<Router>
			<Curriculo />
		</Router>
	);

	const idTituloCurso = getByTestId('curso-titulo');
	expect(idTituloCurso).toBeInTheDocument();
});

test('Deve ser possível ver o primeiro curso', () => {
	const { getByTestId } = render(
		<Router>
			<Curriculo />
		</Router>
	);

	const idConteudoCurso1 = getByTestId('curso-conteudo1');
	expect(idConteudoCurso1).toBeInTheDocument();
});

test('Deve ser possível ver o segundo curso', () => {
	const { getByTestId } = render(
		<Router>
			<Curriculo />
		</Router>
	);

	const idConteudoCurso2 = getByTestId('curso-conteudo2');
	expect(idConteudoCurso2).toBeInTheDocument();
});

test('Deve ser possível ver o terceiro curso', () => {
	const { getByTestId } = render(
		<Router>
			<Curriculo />
		</Router>
	);

	const idConteudoCurso3 = getByTestId('curso-conteudo3');
	expect(idConteudoCurso3).toBeInTheDocument();
});

test('Deve ser possível ver o bloco de skill', () => {
	const { getByTestId } = render(
		<Router>
			<Curriculo />
		</Router>
	);

	const idSkillTitulo = getByTestId('skill-titulo');
	expect(idSkillTitulo).toBeInTheDocument();
});
