import React, { useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SignIn from './SignIn';
import SignUp from './SignUp';
import ProtectedPage from './ProtectedPage';
import Main from './Main';
import Loading from './Loading';
import { RootState } from '../store';
import { userAuthentication } from '../store/user/actions';

const App = () => {
  const { loading } = useSelector((state: RootState) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAuthentication());
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
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
};

export default App;
