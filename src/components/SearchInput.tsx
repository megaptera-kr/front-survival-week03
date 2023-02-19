import { ChangeEvent, useState } from 'react';

type PropTypes = {
    onChange: (value: string) => void;
}

export default function SearchInput({ onChange }: PropTypes) {
  const [search, setSearch] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
    onChange(value);
  };
  return (
    <div>
      <span>검색</span>
      <input type="text" value={search} onChange={handleChange} />
    </div>
  );
}
