import { ChangeEvent } from 'react';

type SearchBarProps = {
  label?: string;
  placeholder: string;
  setFilterQuery: (query: string) => void;
};

export default function SearchBar({
  label,
  placeholder,
  setFilterQuery,
}: SearchBarProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterQuery(value);
  };

  return (
    <>
      <label htmlFor="search-text" style={{ paddingRight: '1rem' }}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id="search-text"
        onChange={handleChange}
      />
    </>
  );
}
