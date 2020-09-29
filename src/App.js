import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/css/estilo.css';

import Cabecalho from './componentes/cabecalho';
import Inicio from './componentes/inicio';
import Portfolio from './componentes/portfolio';
import Curriculo from './componentes/curriculo';
import Contato from './componentes/contato';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App" data-testid="bloco-app">
					<Cabecalho />
					<Switch>
						<Route path="/" exact component={Inicio} />
						<Route path="/portfolio" component={Portfolio} />
						<Route path="/curriculo" component={Curriculo} />
						<Route path="/contato" component={Contato} />
						<Route path="*" component={Inicio} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
