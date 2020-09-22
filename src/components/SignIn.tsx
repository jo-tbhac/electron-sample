import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TextField from './TextFiled';
import Button from './Button';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <Button text="Sign in" onClick={() => {}} />
        <Link to="/signup" className="signIn__link">create account</Link>
      </div>
    </div>
  );
};

export default SignIn;
