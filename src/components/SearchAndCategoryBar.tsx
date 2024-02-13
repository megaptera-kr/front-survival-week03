import SearchBar from './SearchBar';
import CategoryBtn from './CategoryBtn';

type SearchAndCategoryBarProps = {
  categories: string[]
  filterText: string;
  setFilterText: (value: string) => void;
  setSelectedCategory: (value: string) => void;
}

function SearchAndCategoryBar({
  categories, filterText, setFilterText, setSelectedCategory,
}: SearchAndCategoryBarProps) {
  return (
    <div>
      <SearchBar
        label="검색"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ul style={{ display: 'flex', padding: '0px', listStyleType: 'none' }}>
        {categories
          ? (categories.map((category) => (
            <CategoryBtn
              key={category}
              category={category}
              setSelectedCategory={setSelectedCategory}
            />
          )))
          : (<div>Loading...</div>)}
      </ul>
    </div>
  );
}

export default SearchAndCategoryBar;
