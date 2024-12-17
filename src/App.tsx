import React, { useState } from 'react';

import { restaurants } from '../restaurants.json';

import RestaurantsTable from './components/RestaurantsTable';
import ButtonList from './components/ButtonList';
import SearchBox from './components/SearchBox';

export default function App() {
  // filterMenu가 있어야 하는 곳
  const [filterMenu, setFilterMenu] = React.useState(restaurants);
  // filterText가 있어야 하는 곳
  const [filterText, setFilterText] = useState<string>('');

  // eslint-disable-next-line max-len
  const filteredRestaurants = filterMenu.filter((restaurant) => restaurant.name.includes(filterText));

  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <SearchBox
        placeholder="식당 이름"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ButtonList
        setFilterMenu={setFilterMenu}
        restaurants={restaurants}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
    </div>
  );
}
