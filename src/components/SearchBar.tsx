import { ChangeEvent } from 'react';

type SearchBarProps = {
    placeholder: string
  }

export default function SearchBar({ placeholder }: SearchBarProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
  };

  return (
    <div>
      <label htmlFor="search-bar">검색</label>
      <input
        id="search-bar"
        type="text"
        placeholder={placeholder}
        value=""
        onChange={handleChange}
      />
    </div>
  );
}
