import { useState } from 'react';
import TextField from './TextField';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');
  return (
    <TextField
      id="search-input"
      label="검색"
      placeholder="식당 이름"
      searchText={searchText}
      setSearchText={setSearchText}
    />
  );
}
