import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import TextField from './TextFiled';
import Button from './Button';
import { signUp } from '../store/user/actions';
import { RootState } from '../store';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const { isSignIn } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const onClick = () => {
    const params = {
      name,
      email,
      password,
      passwordConfirmation,
    };
    dispatch(signUp(params));
  };

  if (isSignIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signUpScreen">
      <div className="signUp">
        <TextField
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
        />
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
        <TextField
          type="password"
          value={passwordConfirmation}
          onChange={(event) => setPasswordConfirmation(event.target.value)}
          placeholder="Password confirmation"
        />
        <Button text="Sign up" onClick={onClick} />
        <Link to="/" className="signUp__link">move to sign in</Link>
      </div>
    </div>
  );
};

export default SignUp;
