import { useState } from 'react';
import Restaurants from '../type/restaurantstype';
import SearchBar from './SearchBar';
import StoreTable from './StoreTable';

type FilterableStoreTableProps = {
  restaurants: Restaurants[]
}

export default function FilterableStoreTable({ restaurants }: FilterableStoreTableProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [category, setCategory] = useState<string>('전체');
  const filteredRestaurants = restaurants.filter((store) => (
    (store.category === category || category === '전체')
  )).filter((store) => (store.name.includes(filterText.trim())));
  return (
    <>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        category={category}
        setCategory={setCategory}
      />
      <StoreTable restaurants={filteredRestaurants} />
    </>

  );
}
