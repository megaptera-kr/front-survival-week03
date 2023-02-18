import { useRef } from 'react';

type InputFieldProps = {
  type: string
  label: string
  name: string
}

function InputField({ type, label, name }: InputFieldProps) {
  const id = useRef(`input-${name}`.replace(/ /g, '-').toLowerCase());

  return (
    <div>
      <label htmlFor={id.current}>{label}</label>
      <input type={type} id={id.current} />
    </div>
  );
}

export default InputField;
