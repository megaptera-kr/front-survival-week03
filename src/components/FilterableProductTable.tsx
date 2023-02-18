import SearchBar from './SearchBar';
import { Restaurants } from '../types/filterableProductTable';
import Toolbar from './common/Toolbar';
import FilterCategoryButtonGroup from './FilterCategoryButtonGroup';
import RestaurantTable from './RestaurantTable';

type FilterableProductProps = {
  products: Restaurants[]
}

function FilterableProductTable({ products }:FilterableProductProps) {
  return (
    <div className="filterable-product-table">
      <SearchBar />
      <Toolbar toolbar={<FilterCategoryButtonGroup />} />
      <RestaurantTable restaurants={products} />
    </div>
  );
}

export default FilterableProductTable;
