import React from 'react';
import { Switch, Route } from 'react-router-dom';
import s from './App.module.css';

import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';

const App = () => {
  return (
    <div className={s.block}>
      <Switch>
        <Route exact path='/signup' render={() => <Registration />} />
        <Route exact path='/search' render={() => <Home />} />
        <Route exact path='/user' render={() => <Home />} />
        <Route exact path='/' render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
