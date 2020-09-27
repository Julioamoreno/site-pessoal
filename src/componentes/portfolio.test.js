import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Portfolio from './portfolio.js';

test('Deve ser possivel ver o titulo da pagina, portfolio', () => {
	const { getByTestId } = render(
		<Router>
			<Portfolio />
		</Router>
	);

	expect(getByTestId('titulo-portfolio')).toBeInTheDocument();
});

test('Deve ser possivel ver o titulo do primeiro projeto', () => {
	const { getByTestId } = render(
		<Router>
			<Portfolio />
		</Router>
	);

	expect(getByTestId('titulo-projeto1')).toBeInTheDocument();
});

test('Deve ser possivel ver a imagem do primeiro projeto', () => {
	render(
		<Router>
			<Portfolio />
		</Router>
	);

	expect(
		screen.getByAltText(/Gif desmonstração site como gastei/i)
	).toBeInTheDocument();
});

test('Deve ser possivel ver a descricao do primeiro projeto', () => {
	const { getByTestId } = render(
		<Router>
			<Portfolio />
		</Router>
	);

	expect(getByTestId('descricao-projeto1')).toBeInTheDocument();
});

//projeto 2
test('Deve ser possivel ver o titulo do segundo projeto', () => {
	const { getByTestId } = render(
		<Router>
			<Portfolio />
		</Router>
	);

	expect(getByTestId('titulo-projeto2')).toBeInTheDocument();
});

test('Deve ser possivel ver a imagem do segundo projeto', () => {
	render(
		<Router>
			<Portfolio />
		</Router>
	);

	expect(
		screen.getByAltText(/Gif desmonstração salario liquido/i)
	).toBeInTheDocument();
});

test('Deve ser possivel ver a descriçao do segundo projeto', () => {
	const { getByTestId } = render(
		<Router>
			<Portfolio />
		</Router>
	);

	expect(getByTestId('descricao-projeto2')).toBeInTheDocument();
});

//Projeto 3
test('Deve ser possivel ver o titulo do terceiro projeto', () => {
	const { getByTestId } = render(
		<Router>
			<Portfolio />
		</Router>
	);

	expect(getByTestId('titulo-projeto3')).toBeInTheDocument();
});

test('Deve ser possivel ver a imagem do terceiro projeto', () => {
	render(
		<Router>
			<Portfolio />
		</Router>
	);

	expect(
		screen.getByAltText(/Gif desmonstração salario liquido/i)
	).toBeInTheDocument();
});

test('Deve ser possivel ver a descriçao do terceiro projeto', () => {
	const { getByTestId } = render(
		<Router>
			<Portfolio />
		</Router>
	);

	expect(getByTestId('descricao-projeto3')).toBeInTheDocument();
});

//Projeto 4
test('Deve ser possivel ver o titulo do quarto projeto', () => {
	const { getByTestId } = render(
		<Router>
			<Portfolio />
		</Router>
	);

	expect(getByTestId('titulo-projeto4')).toBeInTheDocument();
});

test('Deve ser possivel ver a imagem do quarto projeto', () => {
	render(
		<Router>
			<Portfolio />
		</Router>
	);

	expect(
		screen.getByAltText(/print da tela omnistack 10/i)
	).toBeInTheDocument();
});

test('Deve ser possivel ver a descriçao do quarto projeto', () => {
	const { getByTestId } = render(
		<Router>
			<Portfolio />
		</Router>
	);

	expect(getByTestId('descricao-projeto4')).toBeInTheDocument();
});

//Projeto 5
test('Deve ser possivel ver o titulo do quinto projeto', () => {
	const { getByTestId } = render(
		<Router>
			<Portfolio />
		</Router>
	);

	expect(getByTestId('titulo-projeto5')).toBeInTheDocument();
});

test('Deve ser possivel ver a imagem do quinto projeto', () => {
	render(
		<Router>
			<Portfolio />
		</Router>
	);

	expect(
		screen.getByAltText(/print da tela omnistack 11/i)
	).toBeInTheDocument();
});

test('Deve ser possivel ver a descriçao do quinto projeto', () => {
	const { getByTestId } = render(
		<Router>
			<Portfolio />
		</Router>
	);

	expect(getByTestId('descricao-projeto5')).toBeInTheDocument();
});
