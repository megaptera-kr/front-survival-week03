import { useState } from 'react';

import FilterableRestaurantTable from './components/filterableRestaurantTable/FilterableRestaurantTable';

import { RestaurantFilter } from './types/restaurants';

import { restaurants } from '../restaurants.json';

export default function App() {
  const [filter, setFilter] = useState<RestaurantFilter>({
    searchText: '',
    category: '',
  });

  const handleChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilter((prev) => ({ ...prev, searchText: value.trim() }));
  };

  const handleClickCategoryFilter = (ctg: string) => () => {
    setFilter((prev) => ({ ...prev, category: ctg }));
  };

  return (
    <>
      <h1>오늘의 메뉴</h1>
      <FilterableRestaurantTable restaurants={restaurants} />
    </>
  );
}
