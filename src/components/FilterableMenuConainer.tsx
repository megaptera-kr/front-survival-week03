import { useMemo } from 'react';
import FilterableMenuTitle from './FilterableMenuTitle';
import FilterableMenuSearch from './FilterableMenuSearch';
import FilterableMenuFilterCategory from './FilterableMenuFilterCategory';
import FilterableMenuTable from './FilterableMenuTable';

import useInput from '../hooks/useInput';
import useFilter from '../hooks/useFilter';

import data from '../../restaurants.json';

import { RestaurantsItem } from '../types/restaurantItemType';
import select from '../utils/select';
import filterByName from '../utils/filterBySearchText';
import useDebounce from '../hooks/useDebounce';

export default function FilterableMenuContainer() {
  const { searchText, handleChangeSearchText } = useInput();

  const { filterCategory, handleClickFilterCategory } = useFilter();

  const { restaurants } = data as RestaurantsItem;

  const filteredRestaurants = useMemo(() => {
    let result;

    if (filterCategory === '전체') {
      result = filterByName([...restaurants], searchText);
    } else {
      result = filterByName(
        select([...restaurants], 'category', filterCategory),
        searchText,
      );
    }

    return result;
  }, [searchText, filterCategory]);

  const debouncedFilteredRestaurants = useDebounce(filteredRestaurants, 200);

  return (
    <div>
      <FilterableMenuTitle title="오늘의 메뉴" />
      <FilterableMenuSearch
        htmlFor="input-검색"
        placeholder="식당 이름"
        searchText={searchText}
        handleChangeSearchText={handleChangeSearchText}
      />
      <FilterableMenuFilterCategory
        handleClickFilterCategory={handleClickFilterCategory}
      />
      <FilterableMenuTable restaurants={debouncedFilteredRestaurants} />
    </div>
  );
}
