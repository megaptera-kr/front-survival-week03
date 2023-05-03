import { useState } from 'react';
import RestaurantsTable from './RestaurantsTable';
import SearchBar from './SearchBar';

import { Restaurant } from '../types';
import filterRestaurants from '../utils/filterRestaurants';

type Props = {
  restaurants: Restaurant[];
}

export default function FilterableRestaurantsTable({ restaurants }:Props) {
  const [filterText, setFilterText] = useState<string>('');
  const [selectCategory, setSelectCategory] = useState<string>('전체');

  const filteredRestaurants = filterRestaurants(restaurants, { filterText, selectCategory });

  return (
    <>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        setSelectCategory={setSelectCategory}
      />
      <RestaurantsTable
        restaurants={filteredRestaurants}
      />
    </>
  );
}
