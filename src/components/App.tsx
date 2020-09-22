import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import SignIn from './SignIn';

const App = () => (
  <HashRouter>
    <Route><SignIn /></Route>
  </HashRouter>
);

export default App;
