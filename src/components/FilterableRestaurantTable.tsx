import { useState } from 'react';
import RestaurantTable from './RestaurantTable';
import SearchBar from './SearchBar';

import dummy from '../../restaurants.json';

import type { Restaurant } from '../types/restaurants';
import filterRestaurants from '../utils/filterRestaurants';

const { restaurants }: {restaurants: Restaurant[]} = dummy;

function FilterableRestaurantTable() {
  const [query, setQuery] = useState('');
  const [foodType, setFoodType] = useState('전체');

  const filteredRestaurents = filterRestaurants(restaurants, {
    query, foodType,
  });

  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <SearchBar {...{
        query, setQuery, foodType, setFoodType,
      }}
      />
      <RestaurantTable restaurants={filteredRestaurents} />
    </div>
  );
}

export default FilterableRestaurantTable;
