import React from 'react';
import PageView from './components/PageView/PageView';
import InputContext from './context/InputContext'
import './App.css';

function App() {
  return (
    <InputContext>
      <div className="App">
        <PageView />
      </div>
    </InputContext>
  );
}

export default App;
