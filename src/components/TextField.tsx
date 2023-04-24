import React from 'react';

type TextFieldProps = {
  searchText: string;
  setSearchText: (value: string) => void;
};

export default function TextField({
  searchText,
  setSearchText,
}: TextFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchText(value);
  };
  return (
    <div>
      <label htmlFor="search-bar" style={{ paddingRight: '1rem' }}>
        검색
      </label>
      <input
        type="text"
        id="search-bar"
        placeholder="식당 이름"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
}
