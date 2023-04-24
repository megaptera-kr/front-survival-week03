import React from 'react';
import Category from './Category';

type SearchBarProps = {
  filterText: string;
  categories: string[];
  setFilterText: (value: string) => void;
  setFilterCategory: (value: string) => void;
};
export default function SearchBar({
  filterText,
  setFilterText,
  setFilterCategory,
  categories,
}: SearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };
  return (
    <div>
      <label htmlFor="search">검색</label>
      <input
        style={{ marginLeft: '1rem' }}
        id="search"
        placeholder="식당 이름"
        value={filterText}
        onChange={handleChange}
      />
      <Category categories={categories} setFilterCategory={setFilterCategory} />
    </div>
  );
}
