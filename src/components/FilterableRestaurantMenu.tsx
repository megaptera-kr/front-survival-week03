import { useState } from 'react';
import type Restaurant from '../types/Restaurant';
import RestaurantTable from './RestaurantTable';
import FilterContainer from './FilterContainer';
import filterRestaurants from '../utils/filterRestaurants';
import selectCategories from '../utils/selectCategories';

type FilterableRestaurantMenuProps = {
  restaurants : Restaurant[];
}

export default function FilterableRestaurantMenu(
  { restaurants }: FilterableRestaurantMenuProps,
) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('');

  const categories = selectCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, {
    filterCategory, filterText,
  });

  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <FilterContainer
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}
