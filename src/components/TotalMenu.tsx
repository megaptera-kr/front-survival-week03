import { useState } from 'react';

import NavBar from './NavBar';
import RestaurantTable from './RestaurantTable';

import Restaurant from '../types/Restaurant';

import filterResFood from '../utils/filterResFood';
import selectCategory from '../utils/selectCategory';

type TotalMenuProps = {
    restaurant: Restaurant[];
}

export default function TotalMenu({ restaurant }: TotalMenuProps) {
  const foodCategory = selectCategory(restaurant);

  const [searchText, setSearchText] = useState<string>('');
  const [clickCategory, setClickCategory] = useState<string>('');

  const filteredResFood = filterResFood({ clickCategory, searchText }, restaurant);

  return (
    <div>
      <NavBar
        foodCategory={foodCategory}
        searchText={searchText}
        setSearchText={setSearchText}
        setClickCategory={setClickCategory}
      />
      <RestaurantTable filteredResFood={filteredResFood} />
    </div>
  );
}
