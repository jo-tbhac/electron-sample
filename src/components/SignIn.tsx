import React, { useState } from 'react';

import TextField from './TextFiled';

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
        <button type="button" className="signIn__button">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SignIn;
