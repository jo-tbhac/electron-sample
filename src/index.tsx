import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import App from './components/App';
import store from './store';
import './index.scss';

library.add(fab, fas, far);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('contents'),
);
