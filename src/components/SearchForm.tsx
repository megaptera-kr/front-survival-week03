type SearchFormProps = {
  filterText: string;
  setFilterText: (text: string)=> void
}

function SearchForm({ filterText, setFilterText }: SearchFormProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <form>
      <label htmlFor="search" style={{ marginRight: '10px' }}>
        검색
      </label>
      <input
        type="text"
        placeholder="식당 이름"
        id="search"
        value={filterText}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchForm;
