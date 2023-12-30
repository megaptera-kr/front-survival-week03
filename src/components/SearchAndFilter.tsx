import { FoodType } from '../types/FoodType';
import FoodTypeBtns from './FoodTypeBtns';
import SearchBar from './SearchBar';

type SearchAndFilterProps = {
  query: string;
  setQuery: (query: string) => void;
  handleFoodTypes: (typs: FoodType) => void;
  filterFoodTypes: string[];
};

function SearchAndFilter({
  query,
  setQuery,
  handleFoodTypes,
  filterFoodTypes,
}: SearchAndFilterProps) {
  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <FoodTypeBtns
        handleFoodTypes={handleFoodTypes}
        filterFoodTypes={filterFoodTypes}
      />
    </div>
  );
}
export default SearchAndFilter;
