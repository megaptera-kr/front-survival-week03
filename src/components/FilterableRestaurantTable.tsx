import { useState } from 'react';
import selectCategories from '../utils/selectCategories';
import filterRestaurants from '../utils/filterRestaurants';
import SearchBar from './SearchBar';
import RestarurantTable from './RestaurantTable';
import Restaurant from '../type/Restaurant';

type FilterableRestaurantTableProps = {
  restaurants: Restaurant[]
}

export default function FilterableRestaurantTable({
  restaurants,
}: FilterableRestaurantTableProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const categories = selectCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });

  return (
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
  );
}
