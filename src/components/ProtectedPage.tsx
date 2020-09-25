import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { RootState } from '../store';

type ProtectedPageProps = {
  children: ReactElement
}

const ProtectedPage = (props: ProtectedPageProps) => {
  const { children } = props;

  const { isSignIn } = useSelector((state: RootState) => state.user);

  if (!isSignIn) {
    return <Redirect to="/signin" />;
  }

  return children;
};

export default ProtectedPage;
