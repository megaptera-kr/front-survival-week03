import { useState } from 'react';
import { restaurants } from '../restaurants.json';
import selectCategories from './utils/selectCategories';
import filterRestaurants from './utils/filterRestaurants';
import SearchBar from './components/SearchBar';
import RestarurantTable from './components/RestaurantTable';

export default function App() {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const categories = selectCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });

  return (
    <div className="filterable-restaurant-table">
      <h1>오늘의 메뉴</h1>
      <div>
        <SearchBar
          categories={categories}
          filterText={filterText}
          setFilterText={setFilterText}
          setFilterCategory={setFilterCategory}
        />
        <RestarurantTable
          filteredRestaurants={filteredRestaurants}
        />
      </div>
    </div>
  );
}
