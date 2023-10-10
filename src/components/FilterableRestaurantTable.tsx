import { useState } from 'react';

import selectCategories from '../utils/selectCategories';
import RestaurantTable from './RestaurantTable';
import SearchBar from './SearchBar';
import Title from './Title';

import filterRestaurants from '../utils/filterRestaurants';
import ECategory from '../types/category';
import IRestaurant from '../types/restaurant';
import RestaurantFilterButtons from './RestaurantFilterButtons';

type FilterableRestaurantTableProps = {
  restaurants: IRestaurant[];
};

export default function FilterableRestaurantTable({
  restaurants,
}: FilterableRestaurantTableProps) {
  const [filterQuery, setFilterQuery] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>(ECategory.all);

  const categories = selectCategories(restaurants);
  const filteredRestaurants = filterRestaurants(restaurants, {
    filterQuery,
    filterCategory,
  });

  return (
    <>
      <Title label="오늘의 메뉴" />
      <SearchBar
        label="검색"
        placeholder="식당 이름"
        setFilterQuery={setFilterQuery}
      />
      <RestaurantFilterButtons
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </>
  );
}
