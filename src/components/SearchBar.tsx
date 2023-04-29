import { ChangeEvent } from 'react';

type SearchBarProps = {
  filterText: string;
  setFilterText: (value:string) => void;
}

export default function SearchBar(
  {
    filterText,
    setFilterText,
  }:SearchBarProps,
) {
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterText(value);
  };

  return (
    <div>
      <label htmlFor="input-검색" style={{ paddingRight: '1rem' }}>검색</label>
      <input
        id="input-검색"
        type="text"
        placeholder="식당 이름"
        value={filterText}
        onChange={handleTextChange}
      />
    </div>
  );
}
