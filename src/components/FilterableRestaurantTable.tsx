import { useState } from 'react';

import RestaurantTable from './RestaurantTable';
import Search from './Search';

import { Restaurant } from '../types/Restaurant';

import filterRestaurant from '../utils/filterRestaurant';
import selectCategories from '../utils/selectCategories';

type FilterableRestaurantTableProps = {
    restaurantsData: Restaurant[];
}

export default function FilterableRestaurantTable({
  restaurantsData,
}:FilterableRestaurantTableProps) {
  const categories = ['전체', ...selectCategories(restaurantsData)];

  const [filterText, setFilterText] = useState<string>('');
  const [filterButton, setFilterButton] = useState<string>('전체');

  const filteredRestaurantsData = filterRestaurant(restaurantsData, filterText, filterButton);

  return (
    <div>
      <Search
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterButton={setFilterButton}
      />
      <RestaurantTable restaurantsData={filteredRestaurantsData} />
    </div>
  );
}
