import { useState } from 'react';

import SearchFilter from '../searchFilter/SearchFilter';
import ResturantTable from '../restaurantTable/RestaurantTable';

import { Restaurant, RestaurantFilter } from '../../types/restaurants';

import { filterRestaurant } from '../../utils/filter';
import selectCategories from '../../utils/select';

interface FilterableRestaurantTableProps {
  restaurants: Restaurant[];
}

export default function FilterableRestaurantTable({ restaurants }: FilterableRestaurantTableProps) {
  const [filter, setFilter] = useState<RestaurantFilter>({
    searchText: '',
    category: '전체',
  });

  const handleChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilter((prev) => ({ ...prev, searchText: value.trim() }));
  };

  const handleClickCategoryFilter = (ctg: string) => () => {
    setFilter((prev) => ({ ...prev, category: ctg }));
  };

  const categories = selectCategories(restaurants);
  const filteredRestaurants = filterRestaurant(restaurants, filter);

  return (
    <div>
      <SearchFilter
        searchText={filter.searchText}
        categories={categories}
        onChangeSearchText={handleChangeSearchText}
        onClickCategoryFilter={handleClickCategoryFilter}
      />
      <ResturantTable restaurants={filteredRestaurants} />
    </div>
  );
}
