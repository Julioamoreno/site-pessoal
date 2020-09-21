import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Contato from './contato.js';

test('Deve ser possível ver subtitulo contato', () => {
	render(
		<Router>
			<Contato />
		</Router>
	);

	expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
		'CONTATO'
	);
});

test('Deve ser possível ver imagem email', () => {
	const { container } = render(
		<Router>
			<Contato />
		</Router>
	);

	expect(
		container.querySelector('[class="octicon"]')
	).toBeInTheDocument();
});

test('Deve ser possível ver email contato', () => {
	render(
		<Router>
			<Contato />
		</Router>
	);

	expect(
		screen.getByText(/julioarmando321@gmail.com/i)
	).toBeInTheDocument();
});

test('Deve ser possível ver imagem whatsapp', () => {
	render(
		<Router>
			<Contato />
		</Router>
	);

	expect(screen.getByAltText(/whatsapp/i)).toBeInTheDocument();
});
test('Deve ser possível ver telefone contato', () => {
	render(
		<Router>
			<Contato />
		</Router>
	);

	expect(screen.getByText(/21 97153-9360/i)).toBeInTheDocument();
});

test('Deve ser possível ver a imagem do linkedin', () => {
	render(
		<Router>
			<Contato />
		</Router>
	);

	expect(screen.getByAltText(/linkedin/i)).toBeInTheDocument();
});

test('Deve ser possível ver linkedin contato', () => {
	render(
		<Router>
			<Contato />
		</Router>
	);

	expect(
		screen.getByText(/linkedin.com\/a\/julioamoreno/i)
	).toBeInTheDocument();
});

test('Deve ser possível ver a imagem do github', () => {
	render(
		<Router>
			<Contato />
		</Router>
	);

	expect(screen.getByAltText(/github/i)).toBeInTheDocument();
});

test('Deve ser possível ver github contato', () => {
	render(
		<Router>
			<Contato />
		</Router>
	);

	expect(
		screen.getByText(/github.com\/julioamoreno/i)
	).toBeInTheDocument();
});
