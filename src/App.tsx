import { useState } from 'react';

import RestaurantTable from './components/RestaurantTable';
import SearchBar from './components/SearchBar';

import filterRestaurants from './utils/filterRestaurant';
import selectCategories from './utils/selectCategories';

import { restaurants } from '../restaurants.json';

export default function App() {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const filterRestaurant = filterRestaurants(restaurants, {
    filterText,
    filterCategory,
  });

  const categories = selectCategories(restaurants);
  return (
    <>
      <h1>오늘의 메뉴</h1>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
        categories={categories}
      />
      <RestaurantTable restaurants={filterRestaurant} />
    </>
  );
}
