import { useState } from 'react';
import data from '../../restaurants.json';
import RestaurantTable from './RestaurantTable';
import { Category } from '../types/Restaurants';
import filterRestaurant from '../utils/filterRestaurant';
import SearchBar from './SearchBar';

function FilterableTable() {
  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<Category>('전체');

  const filterData = filterRestaurant(data.restaurants, { category, query });

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} setCategory={setCategory} />
      <RestaurantTable restaurants={filterData} />
    </div>
  );
}

export default FilterableTable;
