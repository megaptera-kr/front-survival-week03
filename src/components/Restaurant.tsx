import { useState } from 'react';
import { Restaurants } from '../types/filterableProductTable';
import FilterableTable from './common/FilterableTable';
import SearchBar from './SearchBar';
import FilterCategoryButtonGroup from './FilterCategoryButtonGroup';
import RestaurantTable from './RestaurantTable';
import filterRestaurants from '../utils/filterRestaurants';

type FilterableRestaurantProps = {
  data: Restaurants[]
}

function Restaurant({ data }:FilterableRestaurantProps) {
  const [filterText, setFilterText] = useState('');

  const filteredRestaurants = filterText.length ? filterRestaurants(data, filterText) : data;

  return (
    <div className="restaurants">
      <FilterableTable>
        <FilterableTable.Toolbar toolbar={(
          <>
            <SearchBar
              filterText={filterText}
              onChangeFilterText={(value: string) => setFilterText(value)}
            />
            <FilterCategoryButtonGroup />
          </>
        )}
        />
        <FilterableTable.View view={<RestaurantTable restaurants={filteredRestaurants} />} />
      </FilterableTable>
    </div>
  );
}

export default Restaurant;
