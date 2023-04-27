import { useState } from 'react';

import Restaurant from '../types/restaurant';

import FilterableSearchBar from './FilterableSearchBar';
import RestaurantsTable from './RestaurantsTable';

import filterRestaurant from '../utils/filterRestaurants';

type FilterableRestaurantsTablesProps = {
  categories: string[];
  restaurants: Restaurant[];
}

export default function FilterableRestaurantsTables({
  categories, restaurants,
}: FilterableRestaurantsTablesProps) {
  const [searchRestaurantText, setSearchRestaurantText] = useState<string>('');
  const [filterCategoryText, setFilterCategoryText] = useState<string>('전체');

  const filterRestaurants = filterRestaurant(
    restaurants,
    { searchRestaurantText, filterCategoryText },
  );

  return (
    <>
      <FilterableSearchBar
        categories={categories}
        searchRestaurantText={searchRestaurantText}
        filterCategoryText={filterCategoryText}
        setSearchRestaurantText={setSearchRestaurantText}
        setFilterCategoryText={setFilterCategoryText}
      />
      <RestaurantsTable restaurants={filterRestaurants} />
    </>
  );
}
