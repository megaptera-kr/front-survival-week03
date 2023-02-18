import Table from './Table';
import SearchBar from './SearchBar';
import RestaurantCategory from './RestaurantCategory';
import RestaurantListView from './RestaurantListView';
import { Restaurants } from '../types/filterableProductTable';

const RestaurantCategories = ['식당 이름', '종류', '메뉴'];

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

      <Table>
        <Table.Header header={<RestaurantCategory categories={RestaurantCategories} />} />
        {
          products.map((restaurant) => (
            <Table.Row
              key={restaurant.id}
              row={<RestaurantListView restaurant={restaurant} />}
            />
          ))
        }
      </Table>

    </div>
  );
}

export default FilterableProductTable;
