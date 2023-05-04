import '../App.css';

import React from 'react';

type TextFieldProps = {
    label: string;
    placeholder: string;
    searchText: string;
    setSearchText: (value: string) => void;
}

export default function TextField({
  label, placeholder, searchText, setSearchText,
}: TextFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchText(value);
  };

  const id = `input-${label}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="inputSearchcs"
      >
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
}
