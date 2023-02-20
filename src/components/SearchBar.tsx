import { ChangeEvent } from 'react';

type SearchBarProps = {
    placeholder: string
    filterText: string;
    setFilterText: (text: string) => void;
  }

export default function SearchBar({
  placeholder, filterText, setFilterText,
}: SearchBarProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div>
      <label htmlFor="search-bar">검색</label>
      <input
        id="search-bar"
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}
