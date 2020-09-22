import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TextField from './TextFiled';
import Button from './Button';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

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
        <Button text="Sign up" onClick={() => {}} />
        <Link to="/" className="signUp__link">move to sign in</Link>
      </div>
    </div>
  );
};

export default SignUp;
