import { Restaurants } from '../types/Restaurants';
import RestaurantsTable from './RestaurantsTable';
import SearchAndCategoryBar from './SearchAndCategoryBar';

type FilterableRestaurantsTableProps = {
  restaurants: Restaurants[]
}

function FilterableRestaurantsTable({ restaurants }: FilterableRestaurantsTableProps) {
  return (
    <div>
      <SearchAndCategoryBar restaurants={restaurants} />
      <RestaurantsTable restaurants={restaurants} />
    </div>
  );
}

export default FilterableRestaurantsTable;
