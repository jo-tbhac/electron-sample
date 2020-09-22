import React from 'react';

type TextFieldProps = {
  type: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const TextField = (props: TextFieldProps) => {
  const {
    type,
    value,
    onChange,
    placeholder,
  } = props;

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="textField"
    />
  );
};

export default TextField;
