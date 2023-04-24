import { useState } from 'react';

import SearchBar from './SearchBar';
import RestaurantMenuList from './RestaurantMenuList';

import filterRestaurant from '../utils/filterRestaurant';

import data from '../../restaurants.json';

export default function TodayMenu() {
  const { restaurants } = data;

  const [searchText, setSearchText] = useState<string>('');
  const [selectCategory, setSelectCategory] = useState<string>('전체');

  const filteredRestaurants = filterRestaurant(restaurants, {
    searchText,
    selectCategory,
  });

  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <SearchBar
        restaurants={restaurants}
        searchText={searchText}
        setSearchText={setSearchText}
        setSelectCategory={setSelectCategory}
      />
      <RestaurantMenuList restaurants={filteredRestaurants} />
    </div>
  );
}
