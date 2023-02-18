import SearchBar from './SearchBar';
import { Restaurants } from '../types/filterableProductTable';
import RestaurantTable from './RestaurantTable';

type FilterableProductProps = {
  products: Restaurants[]
}

function FilterableProductTable({ products }:FilterableProductProps) {
  return (
    <div className="filterable-product-table">

      <SearchBar />
      <div className="filter-action-button">
        <button type="button">전체</button>
        <button type="button">중식</button>
        <button type="button">한식</button>
        <button type="button">일식</button>
      </div>
      <RestaurantTable restaurants={products} />

    </div>
  );
}

export default FilterableProductTable;
