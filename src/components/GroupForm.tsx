import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store';
import { Member } from '../store/group/types';
import {
  closeGroupForm,
  searchMember,
  seacrhStart,
  searchEnd,
  appendMember,
  removeMember,
  createGroup,
} from '../store/group/actions';

import TextField from './TextFiled';
import Button from './Button';

const WAIT_INTERVAL = 1000;

interface GroupMemberRowProps {
  member: Member
  isAppend: boolean
}

interface GroupMembersProps {
  userName: string
}

const GroupMemberRow = (props: GroupMemberRowProps) => {
  const { member, isAppend } = props;

  const dispatch = useDispatch();

  const onClick = () => {
    if (isAppend) {
      dispatch(appendMember(member));
      return;
    }
    dispatch(removeMember(member.id));
  };

  return (
    <div key={member.id} className="groupMembersRow">
      <div className="groupMembersRow__name">{member.name}</div>
      {isAppend ? (
        <button type="button" onClick={onClick} className="groupMembersRow__button">追加</button>
      ) : (
        <button type="button" onClick={onClick} className="groupMembersRow__button--delete">
          削除
        </button>
      )}
    </div>
  );
};

const GroupMemberPool = () => {
  const { groupMemberPool } = useSelector((state: RootState) => state.group);

  return (
    <>
      {groupMemberPool.map((member) => (
        <GroupMemberRow key={member.id} member={member} isAppend={false} />
      ))}
    </>
  );
};

const GroupMembers = (props: GroupMembersProps) => {
  const { userName } = props;

  const { members } = useSelector((state: RootState) => state.group);

  if (userName === '') {
    return null;
  }

  if (members.length === 0 && userName !== '') {
    return <div className="groupMembersNoMember">該当するメンバーがいません</div>;
  }

  return (
    <>
      {members.map((member) => <GroupMemberRow key={member.id} member={member} isAppend />)}
    </>
  );
};

const GroupForm = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');

  const { searchingMember, groupMemberPool } = useSelector((state: RootState) => state.group);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-undef
  const timer: { current: undefined | NodeJS.Timeout } = useRef();

  const onClickOverlayEvent = useCallback((event: MouseEvent) => {
    const element = event.target as HTMLElement;
    if (element.className === 'groupFormOverlay') {
      dispatch(closeGroupForm());
    }
  }, []);

  useEffect(() => {
    window.addEventListener('click', onClickOverlayEvent);
    return () => {
      window.removeEventListener('click', onClickOverlayEvent);
    };
  }, [onClickOverlayEvent]);

  useEffect(() => {
    dispatch(seacrhStart());

    if (timer.current) {
      clearTimeout(timer.current);
    }
    if (userName === '') {
      dispatch(searchEnd());
      return;
    }
    timer.current = setTimeout(() => {
      dispatch(searchMember(userName));
    }, WAIT_INTERVAL);
  }, [userName]);

  const onClick = () => {
    const userIds = groupMemberPool.map((member) => member.id);
    dispatch(createGroup(name, userIds));
  };

  return (
    <div className="groupFormOverlay">
      <div className="groupForm">
        <div className="groupFormHeader">
          <div className="groupFormHeader__title">グループを作成</div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => dispatch(closeGroupForm())}
            onKeyPress={() => dispatch(closeGroupForm())}
            className="groupFormHeader__closeButton"
          >
            <FontAwesomeIcon icon={['fas', 'times']} />
          </div>
        </div>

        <div className="groupFormRow">
          <div className="groupFormRow__label">グループ名</div>
          <TextField
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="グループ名を入力"
          />
        </div>

        <div className="groupFormRow">
          <div className="groupFormRow__label">グループメンバー</div>
          <div className="groupFormMemberPool">
            <GroupMemberPool />
          </div>
        </div>
        <div className="groupFormRow">
          <div className="groupFormRow__label">グループメンバーの追加</div>
          <TextField
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            placeholder="グループに追加したいユーザー名を入力"
          />
          <div className="groupFormMemberList">
            {searchingMember ? (
              <div className="groupFormSearching">
                <div className="groupFormSearching__text">検索中</div>
                <FontAwesomeIcon
                  icon={['fas', 'spinner']}
                  spin
                  className="groupFormSearching__icon"
                />
              </div>
            ) : (
              <GroupMembers userName={userName} />
            )}
          </div>
        </div>

        <div className="groupFormButton">
          <Button text="グループを作成する" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default GroupForm;
