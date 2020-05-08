import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Authentication from './components/Authentication/Authentication'
import InputContext from './context/InputContext'
import './App.css';

function App() {
  return (
    <Router>
      <InputContext>
        <div className="App">
          <Route exact path="/" component={Authentication} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </InputContext>
    </Router>
  );
}

export default App;
