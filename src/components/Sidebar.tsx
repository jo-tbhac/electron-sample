import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../store';
import { fetchGroups, openGroupForm } from '../store/group/actions';
import GroupName from './GroupName';

const Sidebar = () => {
  const { groups } = useSelector((state: RootState) => state.group);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGroups());
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <div className="sidebarHeader__title">Groups</div>
        <div
          role="button"
          tabIndex={0}
          onClick={() => dispatch(openGroupForm())}
          onKeyPress={() => dispatch(openGroupForm())}
          className="sidebarHeader__icon"
        >
          <FontAwesomeIcon icon={['fas', 'plus']} />
        </div>
      </div>

      <div className="sidebarMain">
        {groups.map((group) => <GroupName key={group.id} group={group} />)}
      </div>
    </div>
  );
};

export default Sidebar;
