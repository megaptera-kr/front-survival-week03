import { useState } from 'react';

import { restaurants } from '../../restaurants.json';

import SearchBar from './SearchBar';
import MenuTable from './MenuTable';

import filterRestaurants from '../utils/filterRestaurant';

export default function TodaysMenu() {
  const [filterText, setFilterText] = useState<string>('');

  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredRestaurant = filterRestaurants(filterText, restaurants)
    .filter((restaurant) => (
      !selectedCategory || restaurant.category === selectedCategory
    ));

  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <div>
        <SearchBar
          filterText={filterText}
          setFilterText={setFilterText}
          setSelectedCategory={setSelectedCategory}
        />
        <MenuTable filteredRestaurant={filteredRestaurant} />
      </div>
    </div>
  );
}
