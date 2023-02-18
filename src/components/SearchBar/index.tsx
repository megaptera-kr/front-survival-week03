import InputField from '../InputField';

function SearchBar() {
  return (
    <div className="search-bar">
      <InputField type="text" label="검색" name="restaurant-search" />
    </div>

  );
}

export default SearchBar;
