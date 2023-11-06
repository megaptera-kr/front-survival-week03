import React, { useState } from 'react';

type searchBarProps = {
  label: string;
  placeholder: string;
  filterText: string;
  setFilterText: (value:string) => void;
}

export default function SearchBar({
  label, placeholder, filterText, setFilterText,
}: searchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div className="search-bar">
      <label htmlFor="search-input">{label}</label>
      <input type="text" placeholder={placeholder} value={filterText} onChange={handleChange} id="search-input" />
    </div>
  );
}
