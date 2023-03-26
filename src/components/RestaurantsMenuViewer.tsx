import * as React from 'react';
import { useState } from 'react';

import {SearchBar} from './SearchBar';
import {RestaurantTable} from './RestaurantTable';

import Restaurant from '../types/Restaurant';
import filterRestaurants from '../utils/filterRestaurants';

export interface RestaurantsMenuViewerProps {
    restaurants: Restaurant[],
}

export function RestaurantsMenuViewer ({restaurants}: RestaurantsMenuViewerProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [selectCategory, setSelectCategory] = useState<string>('전체');

  const categories = restaurants.reduce((acc: string[], restaurant: Restaurant) => {
      return acc.includes(restaurant.category) ? acc : [...acc, restaurant.category];
  }, []);

  const filteredRestaurants = filterRestaurants(restaurants, {
    filterText, selectCategory,
  });
  
  return (
    <div>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setSelectCategory}
      />
     <RestaurantTable/>
    </div>
  );
}
