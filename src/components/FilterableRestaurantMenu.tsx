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
    ), ['전체']);

  let filteredRestaurants = filterCategory && filterCategory !== '전체'
    ? restaurants.filter((restaurant) => restaurant.category === filterCategory) : restaurants;
  filteredRestaurants = !filterText
    ? filteredRestaurants
    : filteredRestaurants.filter(
      (restaurant) => restaurant.name.trim().toLowerCase().includes(
        filterText.trim().toLowerCase(),
      ),
    );

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
