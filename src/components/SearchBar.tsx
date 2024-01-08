type SearchBarProps = {
  query: string;
  setQuery: (query: string) => void;
};
function SearchBar({ query, setQuery }: SearchBarProps) {
  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  };

  return (
    <>
      <label htmlFor="search-id">검색</label>
      <input
        id="search-id"
        type="text"
        placeholder="식당 이름"
        value={query}
        onChange={handleChangeQuery}
      />
    </>
  );
}
export default SearchBar;
