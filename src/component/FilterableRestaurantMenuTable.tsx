import RestaurantMenuTableTitle from './RestaurantMenuTableTitle';
import RestaurantMenuSearchBar from './RestaurantMenuSearchBar';
import RestaurantTable from './RestaurantTable';

import Restaurant from '../types/RestaurantType';
import { useState } from 'react';

type FiterableMenuTableProps = {
  restaurants: Restaurant[];
};

export default function FilterableRestaurantMenuTable({
  restaurants,
}: FiterableMenuTableProps) {
  const MENU_TABLE_TITLE = '오늘의 메뉴';

  const [textField, setTextField] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const handleTextField = (value: string) => {
    setTextField(value);
  };

  const handleButton = (value: string) => {
    setCategory(value);
  };

  const filteredRestaurants = restaurants
    .filter((restaurant) => restaurant.name.includes(textField))
    .filter((restaurant) => {
      console.log(category);

      return category ? restaurant.category === category : restaurant;
    });

  return (
    <>
      <div className='filtered-menu-container'>
        <RestaurantMenuTableTitle title={MENU_TABLE_TITLE} />
        <RestaurantMenuSearchBar
          textField={textField}
          handleTextField={handleTextField}
          category={category}
          handleButton={handleButton}
        />
        <RestaurantTable restaurants={filteredRestaurants} />
      </div>
    </>
  );
}
