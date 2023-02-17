import { useState } from 'react';

import SearchField from './SearchField';
import RestaurantsTable from './RestaurantsTable';

import filterRestaurants from '../utils/filterRestaurants';

import Restaurant from '../types/Restaurant';

type FilterableRestaurantsTableProps = {
    restaurants: Restaurant[];
}

export default function FilterableRestaurantsTable({
  restaurants,
}: FilterableRestaurantsTableProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const filteredRestaurants = filterRestaurants(
    restaurants,
    { filterText, filterCategory },
  );

  return (
    <>
      <SearchField
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
        restaurants={restaurants}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
    </>
  );
}
