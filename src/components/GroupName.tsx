import React from 'react';
import { useDispatch } from 'react-redux';

import { Group } from '../store/group/types';
import { selectGroup } from '../store/message/actions';

interface GroupNameProps {
  group: Group
}

const GroupName = (props: GroupNameProps) => {
  const { group } = props;

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(selectGroup(group.id));
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyPress={onClick}
      className="groupName"
    >
      {group.name}
    </div>
  );
};

export default GroupName;
