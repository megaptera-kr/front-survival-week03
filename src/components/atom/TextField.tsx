import { ChangeEvent } from 'react';

type TextFieldProps = {
  id:string;
  placeholder:string;
  value:string
  onChange:(event:ChangeEvent<HTMLInputElement>) => void
}

export default function TextField({
  id,
  placeholder,
  value,
  onChange,
}: TextFieldProps) {
  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
