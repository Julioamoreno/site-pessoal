import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

test('Deve ter o bloco app no componente', () => {
	const { getByTestId } = render(<App />);

	expect(getByTestId('bloco-app')).toBeInTheDocument();
});
