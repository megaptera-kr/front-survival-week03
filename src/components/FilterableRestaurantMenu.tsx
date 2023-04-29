import { useState } from 'react';
import type Restaurant from '../types/Restaurant';
import RestaurantTable from './RestaurantTable';
import FilterContainer from './FilterContainer';

type FilterableRestaurantMenuProps = {
  restaurants : Restaurant[];
}

export default function FilterableRestaurantMenu(
  { restaurants }: FilterableRestaurantMenuProps,
) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('');

  const categories = restaurants
    .reduce((arr:string[], restaurant:Restaurant) => (
      arr.includes(restaurant.category)
        ? arr
        : [...arr, restaurant.category]
    ), []);

  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <FilterContainer
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable restaurants={restaurants} />
    </div>
  );
}
