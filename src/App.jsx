import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './Components/Inicio.jsx';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';

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
