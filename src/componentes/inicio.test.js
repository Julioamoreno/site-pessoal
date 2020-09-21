import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Inicio from './inicio';

test('Deve ser possivel ler o titulo julio armando', () => {
	render(
		<Router>
			<Inicio />
		</Router>
	);
	const title = screen.getAllByRole('heading');
	expect(title[0]).toHaveTextContent('Júlio Armando');
});

test('Deve ser possivel ler o subtitulo', () => {
	render(
		<Router>
			<Inicio />
		</Router>
	);
	const title = screen.getAllByRole('heading');
	expect(title[1]).toHaveTextContent('Programador Web Júnior');
});

test('Deve ser possivel ler o campo sobre', () => {
	render(
		<Router>
			<Inicio />
		</Router>
	);
	const title = screen.getAllByRole('heading');
	expect(title[2]).toHaveTextContent('Sobre Júlio Armando');
});

test('Deve ser possivel ler o texto sobre', () => {
	render(
		<Router>
			<Inicio />
		</Router>
	);

	expect(screen.getByText(/Uma pessoa focada/i)).toBeInTheDocument();
});
