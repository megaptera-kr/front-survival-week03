import { useState } from 'react';

import SearchBar from './searchBar';
import Categories from './categories';
import RestaurantTable from './restaurantTable';

import data from '../../restaurants.json';
import type { Restaurant } from '../types/Restaurant';
import filterRestaurants from '../utils/filterRestaurants';

export default function FilterableRestaurantTable() {
  const { restaurants } = data;
  const [filterText, setFilterText] = useState<string>('');
  const [category, setCategory] = useState('전체');
  const categories = restaurants.reduce((acc: string[], cur: Restaurant) => (
    acc?.includes(cur.category) ? acc : [...acc, cur.category]), ['전체']);
  const filterProducts = filterRestaurants(restaurants, { filterText, category });

  return (
    <div>
      <SearchBar label="검색" placeholder="식당 이름" filterText={filterText} setFilterText={setFilterText} />
      <Categories categories={categories} setCategory={setCategory} />
      <RestaurantTable products={filterProducts} />
    </div>

  );
}
