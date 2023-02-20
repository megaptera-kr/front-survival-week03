import { useState } from 'react';
import Restaurant from '../types/Restaurant';
import filterRestaurants from '../util/filterRestaurants';
import RestaurantTable from './RestaurantTable';
import SearchBar from './SearchBar';

type FilterableRestaurantTableProps = {
  restaurants: Restaurant[];
}

export default function FilterableRestaurantTable({ restaurants }:
  FilterableRestaurantTableProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterButton, setFilterButton] = useState<string>('');

  const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterButton });

  return (
    <div className="filterable-restaurant-container">
      <SearchBar
        restaurants={restaurants}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterButton={setFilterButton}
      />
      <RestaurantTable
        restaurants={filteredRestaurants}
      />
    </div>
  );
}
