import { useState } from 'react';

import data from '../restaurants.json';
import SearchInput from './components/SearchInput';
import Category from './components/Category';
import RestaurantsTable from './components/RestaurantsTable';

import { Restaurants } from './type/Restaurants';

export default function App() {
  const [searchText, setSearchText] = useState<string>('');
  const [category, setCategory] = useState<string>('전체');
  const { restaurants } = data;

  // eslint-disable-next-line max-len
  const categories = restaurants.reduce((acc: string[], cur: Restaurants) => (acc?.includes(cur.category) ? acc : [...acc, cur.category]), ['전체']);

  const filteredRestaurants = category === '전체' ? restaurants : restaurants.filter((restaurant) => restaurant.category === category);

  return (
    <>
      <h3>오늘의 메뉴</h3>
      <SearchInput placeholder="식당 이름을 입력해주세요." setSearchText={setSearchText} />
      <Category category={category} categories={categories} setCategory={setCategory} />
      <RestaurantsTable restaurants={filteredRestaurants} />
    </>
  );
}
