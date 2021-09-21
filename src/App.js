import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles.js';
import StyledApp from './App.style.js';

import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import Search from './components/Search/Search';
import User from './components/User/User';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <StyledApp>
        <Switch>
          <Route path='/signup' render={() => <Registration />} />
          <Route path='/search' render={() => <Search />} />
          <Route path='/user/:userId?' render={() => <User />} />
          <Route exact path='/' render={() => <Home />} />
        </Switch>
      </StyledApp>
    </React.Fragment>
  );
}

export default App;
