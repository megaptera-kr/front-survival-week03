import { useState, useMemo } from 'react';
import { Filter, Restaurant } from '../types';

const useFilteredRestaurants = (restaurants: Restaurant[]) => {
  const [filter, setFilter] = useState<Filter>({
    name: '',
    category: '전체',
  });

  const filteredRestaurants = useMemo(() => restaurants.filter((restaurant) => {
    const nameFilter = filter.name.trim() === '' || restaurant.name.includes(filter.name);
    const categoryFilter = filter.category === '전체' || restaurant.category === filter.category;
    return nameFilter && categoryFilter;
  }), [filter, restaurants]);

  return { filter, setFilter, filteredRestaurants };
};

export default useFilteredRestaurants;
