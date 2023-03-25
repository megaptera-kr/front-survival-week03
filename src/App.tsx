import { useState } from 'react';

import SearchFilter from './components/searchFilter/SearchFilter';
import ResturantTable from './components/restaurantTable/RestaurantTable';
import { RestaurantFilter } from './types/restaurants';

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
      <SearchFilter
        searchText={filter.searchText}
        onChangeSearchText={handleChangeSearchText}
        onClickCategoryFilter={handleClickCategoryFilter}
      />
      <ResturantTable filter={filter} />
    </>
  );
}
