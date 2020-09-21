import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import Cabecalho from './cabecalho';

test('deve ser possivel clicar na logo', () => {
	const { getByTestId } = render(
		<Router>
			<Cabecalho />
		</Router>
	);

	const buttonLogo = getByTestId('home-logo');
	fireEvent.click(
		buttonLogo,
		new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
		})
	);
});

test('deve ser possivel clicar no inicio', () => {
	const { getByTestId } = render(
		<Router>
			<Cabecalho />
		</Router>
	);

	const btnInicio = getByTestId('home-inicio');
	fireEvent.click(
		btnInicio,
		new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
		})
	);
});

test('deve ser possivel clicar no portfólio', () => {
	const { getByTestId } = render(
		<Router>
			<Cabecalho />
		</Router>
	);

	const btnLink = getByTestId('portfolio-link');
	fireEvent.click(
		btnLink,
		new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
		})
	);
});

test('deve ser possivel clicar no currículo', () => {
	const { getByTestId } = render(
		<Router>
			<Cabecalho />
		</Router>
	);

	const btnCurriculo = getByTestId('curriculo-link');
	fireEvent.click(
		btnCurriculo,
		new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
		})
	);
});

test('deve ser possivel clicar no contato', () => {
	const { getByTestId } = render(
		<Router>
			<Cabecalho />
		</Router>
	);

	const btnContato = getByTestId('contato-link');
	fireEvent.click(
		btnContato,
		new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
		})
	);
});
