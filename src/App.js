import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useTheme from './hook/useTheme';
import { LightTheme, DarkTheme } from './config/theme.js';

import GlobalStyles from './styles/GlobalStyles.js';
import StyledApp from './App.style.js';

import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import Search from './components/Search/Search';
import User from './components/User/User';

const App = () => {
  const [themeType, toggleTheme] = useTheme();
  const theme = themeType === 'light' ? LightTheme : DarkTheme;

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledApp>
          <Switch>
            <Route path='/signup' render={() => <Registration />} />
            <Route path='/search' render={() => <Search />} />
            <Route path='/user/:userId?' render={() => <User />} />
            <Route exact path='/' render={() =>
              <Home checked={themeType === 'dark'}
                toggleTheme={toggleTheme} />} />
          </Switch>
        </StyledApp>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
