import { useRef } from 'react';

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  id, label, placeholder, value, onChange,
}: InputProps) {
  const inputId = useRef(`input-${id}`);
  return (
    <div style={{ display: 'flex', alignItems: 'center', columnGap: '8px' }}>
      <label htmlFor={inputId.current}>{label}</label>
      <input
        id={inputId.current}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
