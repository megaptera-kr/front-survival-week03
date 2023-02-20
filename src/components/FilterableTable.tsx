import { useState } from 'react';
import SearchForm from './SearchForm';
import Tabs from './Tabs';
import RestaurantTable from './RestaurantTable';

import { HEADS, TABS } from '../constants/restaurant';

import { restaurants } from '../../restaurants.json';

import filterRestaurant from '../utils/filterRestaurant';

function FilterableTable() {
  const [tabIndex, setTabIndex] = useState(0);
  const [filterText, setFilterText] = useState('');

  const filteredRestaurants = filterRestaurant(restaurants, { tabIndex, filterText });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <h1>오늘의 메뉴</h1>
      <SearchForm filterText={filterText} setFilterText={setFilterText} />
      <Tabs tabs={TABS} setTabIndex={setTabIndex} />
      <RestaurantTable heads={HEADS} restaurants={filteredRestaurants} />
    </div>
  );
}

export default FilterableTable;
