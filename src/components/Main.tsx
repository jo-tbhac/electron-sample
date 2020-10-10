import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store';
import Sidebar from './Sidebar';
import Message from './Message';
import GroupForm from './GroupForm';

const Main = () => {
  const { formVisible } = useSelector((state: RootState) => state.group);

  return (
    <div className="mainContainer">
      <Sidebar />
      <Message />
      {formVisible && <GroupForm />}
    </div>
  );
};

export default Main;
