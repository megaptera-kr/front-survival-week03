import { useState } from 'react';

import { Restaurants } from '../types/Restaurants';
import SearchAndCategoryBar from './SearchAndCategoryBar';
import RestaurantsTable from './RestaurantsTable';
import selectCategories from '../utils/selectCategories';
import filterRestaurant from '../utils/filterRestaurant';

type FilterableRestaurantsTableProps = {
  restaurants: Restaurants[]
}

function FilterableRestaurantsTable({ restaurants }: FilterableRestaurantsTableProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const categories = selectCategories(restaurants);
  const filteredRestaurants = filterRestaurant(restaurants, { filterText, selectedCategory });

  return (
    <div>
      <SearchAndCategoryBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
    </div>
  );
}

export default FilterableRestaurantsTable;
