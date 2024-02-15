import { useState } from 'react';

import RestaurantMenuTableTitle from './RestaurantMenuTableTitle';
import RestaurantMenuSearchBar from './RestaurantMenuSearchBar';
import RestaurantTable from './RestaurantTable';

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

  const filteredRestaurants = restaurants
    .filter((restaurant) => restaurant.name.includes(searchText))
    .filter((restaurant) => {
      return category ? restaurant.category === category : restaurant;
    });

  return (
    <>
      <div className='filtered-menu-container'>
        <RestaurantMenuTableTitle title={MENU_TABLE_TITLE} />
        <RestaurantMenuSearchBar
          searchText={searchText}
          handleSearchText={handleSearchText}
          category={category}
          handleButton={handleButton}
        />
        <RestaurantTable restaurants={filteredRestaurants} />
      </div>
    </>
  );
}
