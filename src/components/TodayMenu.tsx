import { useState } from 'react';

import MenuFilter from './MenuFilter';
import RestaurantsTable from './RestaurantsTable';

import filterRestaurants from '../utils/filterRestaurants';

import data from '../../restaurants.json';

export default function TodayMenu() {
  const { restaurants } = data;

  const [searchText, setSearchText] = useState<string>('');
  const [selectCategory, setSelectCategory] = useState<string>('전체');

  const filteredRestaurants = filterRestaurants(restaurants, { searchText, selectCategory });

  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <MenuFilter
        restaurants={restaurants}
        searchText={searchText}
        setSearchText={setSearchText}
        setSelectCategory={setSelectCategory}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
    </div>
  );
}
