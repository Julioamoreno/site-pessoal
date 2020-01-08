import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Cabecalho from './componentes/cabecalho';
import Inicio from './componentes/inicio';
import Servicos from './componentes/servicos';
import Rodape from './componentes/rodape';
import Portifolio from './componentes/portifolio';
import Curriculo from './componentes/curriculo';
import Contato from './componentes/contato';

class App extends Component {
  render() {
    return (
     
      <BrowserRouter>
        <div className="App">
          <Cabecalho />

          <Route path='/' exact component={Inicio} />
          <Route path='/servicos' component={Servicos} />
          <Route path='/portifolio' component={Portifolio} />
          <Route path='/curriculo' component={Curriculo} />
          <Route path='/contato' component={Contato} />

          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;