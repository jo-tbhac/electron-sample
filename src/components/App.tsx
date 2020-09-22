import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';

const App = () => (
  <HashRouter>
    <Route exact path="/"><SignIn /></Route>
    <Route path="/signup"><SignUp /></Route>
  </HashRouter>
);

export default App;
