import { useState } from 'react';
import Restaurant from '../types/Restaurant';
import filterRestaurants from '../utils/filterRestaurants';
import selectCategory from '../utils/selectCategory';

import RestaurantTable from './RestaurantTable';
import SearchBar from './SearchBar';

type FilterableRestaurantTableProps = {
  restaurantsData : Restaurant[]
}

export default function FilterableRestaurantTable({
  restaurantsData,
}: FilterableRestaurantTableProps) {
  const [category, setCategory] = useState<string>('전체');
  const [filterText, setFilterText] = useState<string>('');
  const filteredRestaurantsData = filterRestaurants(restaurantsData, { category, filterText });
  const selectCategories = ['전체', ...selectCategory(restaurantsData)];

  return (
    <>
      <SearchBar
        setCategory={setCategory}
        filterText={filterText}
        setFilterText={setFilterText}
        selectCategories={selectCategories}
      />
      <RestaurantTable restaurantsData={filteredRestaurantsData} />
    </>
  );
}
