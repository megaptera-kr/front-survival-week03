import { useState } from 'react';
import { Category } from '../../types/Category';
import { Restaurant } from '../../types/Restaurant';
import CategoryFilter from '../molecule/CategoryFilter';
import RestaurantTable from '../molecule/RestaurantTable';
import SearchBar from '../molecule/SearchBar';

type FilterableRestaurantTableProps = {
  restaurants: Restaurant[]
}

export default function FilterableRestaurantTable({ restaurants }:
  FilterableRestaurantTableProps) {
  const [currentCategory, setCurrentCategory] = useState<Category>('전체');
  const [filterText, setFilterText] = useState<string>('');
  return (
    <>
      <SearchBar
        label="검색"
        filterText={filterText}
        setFilterText={setFilterText}
      />

      <CategoryFilter
        restaurants={restaurants}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />

      <RestaurantTable
        currentCategory={currentCategory}
        filterText={filterText}
        restaurants={restaurants}
      />
    </>
  );
}
