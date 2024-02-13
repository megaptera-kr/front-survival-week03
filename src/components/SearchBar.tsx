import React, { useRef } from 'react';

type SearchBarProps = {
  label: string
  filterText: string;
  setFilterText: (value: string) => void;
}

function SearchBar({ label, filterText, setFilterText }: SearchBarProps) {
  const id = useRef(`input-${label}`.replace(/ /g, '-').toLowerCase());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div>
      <label
        htmlFor={id.current}
        style={{ paddingRight: '1rem' }}
      >
        {label}
      </label>
      <input
        type="text"
        id={id.current}
        placeholder="식당 이름"
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
