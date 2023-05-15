type SearchType = {
  placeholder: string,
  filterText: string,
  setFilterText: (value: string) => void
}

export default function Search({ filterText, setFilterText, placeholder }: SearchType) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterText(value);
  };
  return (
    <div>
      <label htmlFor="search">검색</label>
      <input
        id="search"
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}
