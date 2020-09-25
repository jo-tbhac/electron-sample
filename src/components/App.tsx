import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';
import ProtectedPage from './ProtectedPage';
import Main from './Main';

const App = () => (
  <HashRouter>
    <Route path="/signin"><SignIn /></Route>
    <Route path="/signup"><SignUp /></Route>
    <Route exact path="/">
      <ProtectedPage>
        <Main />
      </ProtectedPage>
    </Route>
  </HashRouter>
);

export default App;
