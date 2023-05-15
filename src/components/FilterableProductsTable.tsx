import { useState } from 'react';

import SearchBar from './SearchBar';
import Table from './Table';

import RestaurantsType from '../types/RestaurantsType';

import filterRestaurants from '../utils/filterRestaurants';
import selectCategories from '../utils/selectCategories';

type FilterableProductsTableType ={
  restaurants: RestaurantsType[]
}

export default function FilterableProductsTable({ restaurants }: FilterableProductsTableType) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategories, setFilterCategories] = useState<string>('전체');

  const categories = selectCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategories });

  return (
    <div className="filterable-products-table">

      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        categories={categories}
        setFilterCategories={setFilterCategories}
      />

      <Table restaurants={filteredRestaurants} />

    </div>
  );
}
