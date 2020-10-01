import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../store';
import { fetchGroups } from '../store/group/actions';

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
        <div className="sidebarHeader__icon">
          <FontAwesomeIcon icon={['fas', 'plus']} />
        </div>
      </div>

      <div className="sidebarMain">
        {groups.map((group) => (
          <div key={group.id} className="sidebarMain__group">{group.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
