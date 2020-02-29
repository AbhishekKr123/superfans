import React, { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import { Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
