import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './Components/Inicio';
import Sobre from './Components/Sobre';
import Projetos from './Components/Projetos';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/projetos" component={Projetos} />
      </Switch>
    </Router>
  );
}

export default App;
