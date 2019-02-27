import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Accounts from './Account';
import Hotels from './Hotels';
import Shopping from './Shopping';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/accounts"> Accounts </Link></li>
          <li><Link to="/hotels"> Hotels </Link></li>
          <li><Link to="/shopping"> Shopping </Link></li>
        </ul>

          <Route path="/" exact component={Home} />
          <Route path="/accounts" component={Accounts} />
          <Route path="/hotels" component={Hotels} />
          <Route path="/shopping" component={Shopping} />
        
      </div>
    );
  }
}

export default App;
