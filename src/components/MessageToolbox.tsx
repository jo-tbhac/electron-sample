import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MessageToolbox = () => {
  const [text, setText] = useState('');

  return (
    <div className="messageToolbox">
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="messageToolbox__input"
      />
      <div className="toolbox">
        <div
          role="button"
          tabIndex={0}
          onClick={() => {}}
          onKeyPress={() => {}}
          className="toolbox__submit"
        >
          <FontAwesomeIcon icon={['fas', 'paper-plane']} />
        </div>
      </div>
    </div>
  );
};

export default MessageToolbox;
