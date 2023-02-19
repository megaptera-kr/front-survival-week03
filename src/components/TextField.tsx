import React, { useRef } from 'react';

type TextFieldProps = {
  label: string;
  placeholder: string;
  filterText: string;
  setFilterText: (value: string) => void;
}

export default function TextField({
  label, placeholder, filterText, setFilterText,
}: TextFieldProps) {
  const id = useRef(`input-${label}`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div className="text-field">
      <label
        htmlFor={id.current}
        style={{ paddingRight: '1rem' }}
      >
        {label}
      </label>
      <input
        id={id.current}
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}
