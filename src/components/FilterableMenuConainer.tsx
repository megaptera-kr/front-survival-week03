import FilterableMenuTitle from './FilterableMenuTitle';

import FilterableMenuSearch from './FilterableMenuSearch';

import FilterableMenuFilterCategory from './FilterableMenuFilterCategory';

import FilterableMenuTable from './FilterableMenuTable';
import useInput from '../hooks/useInput';
import useFilter from '../hooks/useFilter';

export default function FilterableMenuContainer() {
  const { searchText, handleChangeSearchText } = useInput();

  const { filterCategory, handleClickFilterCategory } = useFilter();

  return (
    <div>
      <FilterableMenuTitle title="오늘의 메뉴" />

      <FilterableMenuSearch
        htmlFor="input-search"
        placeholder="식당 이름"
        searchText={searchText}
        handleChangeSearchText={handleChangeSearchText}
      />

      <FilterableMenuFilterCategory
        handleClickFilterCategory={handleClickFilterCategory}
      />

      <FilterableMenuTable />
    </div>
  );
}
