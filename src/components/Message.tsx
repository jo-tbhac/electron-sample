import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../store';
import { fetchMessages } from '../store/message/actions';
import MessageRow from './MessageRow';
import MessageToolbox from './MessageToolbox';

const Message = () => {
  const { message, group } = useSelector((state: RootState) => state);

  const { messages, targetGroupId } = message;
  const { groups } = group;

  const dispatch = useDispatch();

  useEffect(() => {
    if (message.targetGroupId === 0) {
      return;
    }
    dispatch(fetchMessages(targetGroupId));
  }, [targetGroupId]);

  const targetGroup = groups.find((_group) => _group.id === targetGroupId);

  if (!targetGroup) {
    return null;
  }

  return (
    <div className="messageContainer">
      <div className="messageHeader">
        <div className="messageHeader__title">{targetGroup.name}</div>
      </div>
      <div className="message">
        {messages.map((_message) => <MessageRow key={_message.id} message={_message} />)}
      </div>
      <div className="messageFooter">
        <MessageToolbox />
      </div>
    </div>
  );
};

export default Message;
