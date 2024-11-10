import { useState } from 'react';
import { restaurants } from '../restaurants.json';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';
import SearchBar from './components/SearchBar';
import filterRestaurants from './utils/filterRestaurants';
import Restaurant from './type/Restaurant';

export default function App() {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('한식,중식,일식');

  const filteredRestaurants = filterRestaurants(restaurants, {
    filterText, filterCategory,
  }).filter((restaurant) => filterCategory.includes(restaurant.category));
  return (
    <>
      <h1>오늘의 메뉴</h1>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <table>
        <FilterableRestaurantsTable restaurants={filteredRestaurants} />
      </table>
    </>
  );
}
