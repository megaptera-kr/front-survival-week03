import FilterField from './FilterField';
import SearchBar from './SearchField';

type FilterableSearchBarProps = {
  categories: string[];
  searchRestaurantText: string;
  filterCategoryText: string;
  setSearchRestaurantText(value: string): void
  setFilterCategoryText(value: string): void
}

export default function FilterableSearchBar({
  categories,
  searchRestaurantText,
  filterCategoryText,
  setSearchRestaurantText,
  setFilterCategoryText,
}: FilterableSearchBarProps) {
  return (
    <div className="filterable-search-bar">
      <SearchBar
        searchRestaurantText={searchRestaurantText}
        setSearchRestaurantText={setSearchRestaurantText}
      />
      <FilterField
        categories={categories}
        filterCategoryText={filterCategoryText}
        setFilterCategoryText={setFilterCategoryText}
      />
    </div>
  );
}
