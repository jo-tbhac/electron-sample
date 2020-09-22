import React from 'react';

type ButtonProps = {
  text: string
  onClick: () => void
}

const Button = (props: ButtonProps) => {
  const { text, onClick } = props;

  return (
    <button type="button" onClick={onClick} className="button">
      {text}
    </button>
  );
};

export default Button;
