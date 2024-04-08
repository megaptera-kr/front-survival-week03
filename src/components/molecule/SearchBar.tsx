import { ChangeEvent, useRef } from 'react';
import TextField from '../atom/TextField';

type SearchBar = {
  label:string;
  filterText:string;
  setFilterText:(value:string) => void
}

export default function SearchBar({
  label,
  filterText,
  setFilterText,
}: SearchBar) {
  const id = useRef<string>(`search-${label}`);

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  return (
    <div>
      <label htmlFor={id.current} style={{ padding: '0 16px 0 0' }}>
        {label}
      </label>
      <TextField
        id={id.current}
        placeholder="식당 이름"
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}
