import { useState } from 'react';

import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

import Restaurant from '../types/Restaurant';

import selectCategoires from '../utils/selectCategories';
import filterRestaurants from '../utils/filterRestaurants';

type FilterableRestaurantTableProps = {
    restaurants: Restaurant[];
  }

export default function FilterableRestaurantTable({ restaurants }: FilterableRestaurantTableProps) {
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setfilterCategory] = useState('전체');

  const categories = selectCategoires(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });

  return (
    <div className="filterable-restaurant-table">
      <h1>오늘의 메뉴</h1>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        categories={categories}
        setfilterCategory={setfilterCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}
