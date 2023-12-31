import { Dispatch, SetStateAction } from 'react';

interface Props {
    label: string;
    text: string;
    setText: Dispatch<SetStateAction<string>>;
}

function TextField({ label, text, setText }: Props) {
  const id = `textField-${label}`;
  return (
    <div style={{ gap: '10px' }}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        placeholder={`${label}...`}
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
    </div>
  );
}

export default TextField;
