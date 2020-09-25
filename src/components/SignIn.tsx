import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import TextField from './TextFiled';
import Button from './Button';
import { signIn } from '../store/user/actions';
import { RootState } from '../store';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isSignIn } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(signIn({ email, password }));
  };

  if (isSignIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signInScreen">
      <div className="signIn">
        <TextField
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
        <TextField
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />
        <Button text="Sign in" onClick={onClick} />
        <Link to="/signup" className="signIn__link">create account</Link>
      </div>
    </div>
  );
};

export default SignIn;
