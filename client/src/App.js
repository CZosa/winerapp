import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import '@babel/polyfill';

import HomePage from './components/Home/HomePage';
import Menu from './components/Menu/Menu';

const App = () => {
  return (
    <div className="container">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/menu" component={Menu} />
    </div>
  );
};

export default App;
