import { useState } from 'react';

import SearchBar from './SearchBar';
import FilterCategory from './FilterCategory';
import RestaurantsTable from './RestaurantsTable';

import { Restaurants } from '../types/Restaurant';

import filterData from '../utils/filterData';

export default function FilterableRestaurantsTable({
  restaurants,
}: Restaurants) {
  const [searchText, setSearchText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');

  const filteredData = filterData(restaurants, { searchText, filterCategory });

  return (
    <>
      <h1>오늘의 메뉴</h1>
      <SearchBar label="검색" setSearchText={setSearchText} />
      <FilterCategory restaurants={restaurants} setFilterCategory={setFilterCategory} />
      <RestaurantsTable restaurants={filteredData} />
    </>
  );
}
