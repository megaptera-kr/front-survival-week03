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
  const handleTextField = (value: string) => {
    setTextField(value);
  };

  const filteredRestaurants = restaurants.filter((restaurant: Restaurant) =>
    restaurant.name.includes(textField)
  );

  return (
    <>
      <div className='filtered-menu-container'>
        <RestaurantMenuTableTitle title={MENU_TABLE_TITLE} />
        <RestaurantMenuSearchBar
          textField={textField}
          handleTextField={handleTextField}
        />
        <RestaurantTable restaurants={filteredRestaurants} />
      </div>
    </>
  );
}
