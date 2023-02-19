import { useState } from 'react';
import { RestaurantsTable } from '../types/filterableRestaurant';
import FilterableTable from './common/FilterableTable';
import SearchBar from './SearchBar';
import FilterCategoryButtonGroup from './FilterCategoryButtonGroup';
import Restaurants from './Restaurants';
import filterRestaurants from '../utils/filterRestaurants';

type FilterableRestaurantProps = {
  data: RestaurantsTable[]
}

const CategoryButtonMap: Record<string, string> = {
  0: '전체',
  1: '중식',
  2: '한식',
  3: '일식',
};

function FilterableRestaurantsTable({ data }:FilterableRestaurantProps) {
  const [filterSearchText, setFilterSearchText] = useState('');
  const [filterCategoryButton, setFilterCategoryButton] = useState('');

  const filteredRestaurants = filterRestaurants(data, { filterSearchText, filterCategoryButton });

  const onClickFilterButton = (currentValue: string) => {
    const selectedButtonValue = CategoryButtonMap[currentValue];
    setFilterCategoryButton(selectedButtonValue);
  };

  return (
    <div className="restaurants">
      <FilterableTable>
        <FilterableTable.Toolbar toolbar={(
          <>
            <SearchBar
              filterText={filterSearchText}
              onChangeFilterText={(value: string) => setFilterSearchText(value)}
            />
            <FilterCategoryButtonGroup
              onClickFilterButton={(value: string) => onClickFilterButton(value)}
            />
          </>
        )}
        />
        <FilterableTable.View view={<Restaurants restaurants={filteredRestaurants} />} />
      </FilterableTable>
    </div>
  );
}

export default FilterableRestaurantsTable;
