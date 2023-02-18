import TextField from '../common/TextField';

type SearchBar = {
  filterText: string
  onChangeFilterText: (value: string) => void
}

function SearchBar({ filterText, onChangeFilterText }: SearchBar) {
  return (
    <div className="search-bar">
      <TextField
        filterText={filterText}
        label="검색"
        name="restaurant-search"
        placeholder="식당이름"
        onChange={onChangeFilterText}
      />
    </div>

  );
}

export default SearchBar;
