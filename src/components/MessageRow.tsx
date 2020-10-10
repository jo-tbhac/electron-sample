import React from 'react';

import { Message } from '../store/message/types';
import { formatDate } from '../utils/utils';

interface MessageRowProps {
  message: Message
}

const MessageRow = (props: MessageRowProps) => {
  const { message } = props;

  const createdAt = formatDate(message.createdAt);

  return (
    <div className="messageRow">
      <div className="messageRowHeader">
        <div className="messageRowHeader__user">{message.user.name}</div>
        <div className="messageRowHeader__date">{createdAt}</div>
      </div>
      <div className="messageRow__body">
        {message.body}
      </div>
    </div>
  );
};

export default MessageRow;
