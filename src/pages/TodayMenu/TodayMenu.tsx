import { useState } from 'react';

import {
  Title, SearchBar, Category, Table,
} from '../../components/TodayMenu';

import restaurantsJson from '../../../restaurants.json';

export default function Menu() {
  const [restaurants] = useState(restaurantsJson.restaurants);

  const [restaurantName, setRestaurantName] = useState('');
  const [category, setCategory] = useState('전체');

  return (
    <>
      <Title />
      <SearchBar
        restaurantName={restaurantName}
        setRestaurantName={setRestaurantName}
      />
      <Category restaurants={restaurants} setCategory={setCategory} />
      <Table
        restaurants={restaurants}
        restaurantName={restaurantName}
        category={category}
      />
    </>
  );
}
