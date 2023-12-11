import { useState } from 'react';
import filterRestaurants from '../utils/filterRestaurants';
import getCategories from '../utils/selectCategories';
import MenuTable from './MenuTable';
import SearchBar from './SearchBar';

type FilterableMenuTableProps = {
  restaurantList: Restaurant[];
};

export default function FilterableMenuTable({
  restaurantList,
}: FilterableMenuTableProps) {
  // 검색어 상태
  const [filterText, setFilterText] = useState<string>('');

  // 음식점 종류 상태
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const categories = getCategories(restaurantList);

  const filteredRestaurant = filterRestaurants(restaurantList, {
    filterText,
    filterCategory,
  });

  return (
    <>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <MenuTable restaurantList={filteredRestaurant} />
    </>
  );
}
