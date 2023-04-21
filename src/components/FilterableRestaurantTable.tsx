import { useState } from 'react';

import restaurants from '../mock/restaurants';

import { FilterOptions } from '../types/types';

import RestaurantTable from './RestaurantTable';
import FilterBox from './FilterBox';

import filterRestaurants from '../utils/filterRestaurants';

function FilterableRestaurantTable() {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    name: '',
    category: '',
  });

  const filterResult = filterRestaurants(restaurants, filterOptions);

  return (
    <>
      <FilterBox setFilterOptions={setFilterOptions} />
      <RestaurantTable restaurants={filterResult} />
    </>
  );
}

export default FilterableRestaurantTable;
