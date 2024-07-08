import { useState } from 'react';
import Heading from './components/Heading';
import Search from './components/Search';
import { Category, Restaurant } from './types';
import FilterField from './components/FilterField';
import TodayMenuTable from './components/TodayMenuTable';

import restaurantsJson from '../restaurants.json';

export default function App() {
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState<Category>('전체');

  const isFilteredRestaurant = (restaurant: Restaurant) => {
    if (filter === '전체') {
      return true;
    }
    return restaurant.category === filter;
  };

  const filterRestaurantName = (restaurant: Restaurant) => {
    const trimedValue = value.trim();
    return restaurant.name.includes(trimedValue);
  };

  const filteredRestaurants: Restaurant[] = restaurantsJson.restaurants
    .filter(isFilteredRestaurant)
    .filter(filterRestaurantName);

  return (
    <main>
      <Heading title="오늘의 메뉴" />
      <Search value={value} setValue={setValue} />
      <FilterField setFilter={setFilter} />
      <TodayMenuTable filteredRestaurants={filteredRestaurants} />
    </main>
  );
}
