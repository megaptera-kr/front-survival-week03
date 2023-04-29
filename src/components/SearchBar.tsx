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
      {/* 눕혀야함 */}
      <label htmlFor="restaurant-name">검색 </label>
      <input
        type="text"
        placeholder="식당 이름"
        name="resturant-name"
        value={filterText}
        onChange={handleTextChange}
      />
    </div>
  );
}
