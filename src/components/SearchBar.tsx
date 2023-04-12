import { type } from 'process';
import React from 'react';

type SearchBarProps = {
  onFilterTextChange: (text: string) => void;
}

export default function SearchBar({ onFilterTextChange }:SearchBarProps) {
  return (
    <div style={{ padding: '5px', marginBottom: '10px' }}>
      <label htmlFor="search" style={{ paddingRight: '10px' }}>검색</label>
      <input
        id="search"
        type="text"
        placeholder="식당이름"
        onChange={(text) => onFilterTextChange(text.target.value.trim())}
      />
    </div>
  );
}
