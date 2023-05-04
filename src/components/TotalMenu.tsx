import '../App.css';

import { useState } from 'react';
import MenuHeader from './MenuHeader';
import NavBar from './NavBar';
import RestaurantsInCategory from './RestaurantsInCategory';

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
    <>
      <h1>오늘의 메뉴</h1>
      <div className="TotalMenu">
        <NavBar
          foodCategory={foodCategory}
          searchText={searchText}
          setSearchText={setSearchText}
          setClickCategory={setClickCategory}
        />
        <div>
          <table>
            <thead>
              <MenuHeader />
            </thead>
            <tbody>
              <RestaurantsInCategory restaurant={filteredResFood} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
