import React from 'react';
import { Switch, Route } from 'react-router-dom';
import s from './App.module.css';

import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import Search from './components/Search/Search';

const App = () => {
  return (
    <div className={s.block}>
      <Switch>
        <Route path='/signup' render={() => <Registration />} />
        <Route path='/search' render={() => <Search />} />
        <Route path='/user' render={() => <Home />} />
        <Route exact path='/' render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
