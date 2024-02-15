import { useState } from 'react';

import RestaurantMenuTableTitle from './RestaurantMenuTableTitle';
import RestaurantMenuSearchBar from './RestaurantMenuSearchBar';
import RestaurantTable from './RestaurantTable';

import selectRestaurantCategories from '../utils/selectRestaurantCategories';
import selectRestaurantsBySearchText from '../utils/selectRestaurantsBySearchText';
import selectRestaurantsByButton from '../utils/selectRestaurantsByButton';

import Restaurant from '../types/RestaurantType';

type FiterableMenuTableProps = {
  restaurants: Restaurant[];
};

export default function FilterableRestaurantMenuTable({
  restaurants,
}: FiterableMenuTableProps) {
  const MENU_TABLE_TITLE = '오늘의 메뉴';

  const [searchText, setSearchText] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const handleSearchText = (value: string) => {
    setSearchText(value);
  };

  const handleButton = (value: string) => {
    setCategory(value);
  };

  const categories = selectRestaurantCategories(restaurants);

  let filteredRestaurants: Restaurant[] = [];
  filteredRestaurants = selectRestaurantsBySearchText(restaurants, searchText);
  filteredRestaurants = selectRestaurantsByButton(
    filteredRestaurants,
    category,
  );

  return (
    <div className='filtered-menu-container'>
      <RestaurantMenuTableTitle title={MENU_TABLE_TITLE} />
      <RestaurantMenuSearchBar
        searchText={searchText}
        handleSearchText={handleSearchText}
        category={category}
        handleButton={handleButton}
        categories={categories}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}
