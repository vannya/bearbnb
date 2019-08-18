import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route render={() => <div>Home</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
