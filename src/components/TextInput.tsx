import * as React from 'react';

export interface TextInputProps {
    label: string;
    placeholder: string;
    filterText: string;
    setFilterText: (text: string) => void;
}

export function TextInput({
  label, placeholder, filterText, setFilterText,
}: TextInputProps) {
  const id = `text-input-${label}`;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div>
      <label
        htmlFor={id}
        style={{
          paddingRight: '1rem',
        }}
      >
        {label}
      </label>
      <input
        id="search-text-input"
        placeholder={placeholder || '입력하세요'}
        type="text"
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}
