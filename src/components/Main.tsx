import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store';
import Sidebar from './Sidebar';
import GroupForm from './GroupForm';

const Main = () => {
  const { formVisible } = useSelector((state: RootState) => state.group);

  return (
    <div className="mainContainer">
      <Sidebar />
      <div className="main" />
      {formVisible && <GroupForm />}
    </div>
  );
};

export default Main;
