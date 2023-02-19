import { useState } from 'react';
import { Restaurants } from '../types/filterableRestaurant';
import FilterableTable from './common/FilterableTable';
import SearchBar from './SearchBar';
import FilterCategoryButtonGroup from './FilterCategoryButtonGroup';
import RestaurantTable from './RestaurantTable';
import filterRestaurants from '../utils/filterRestaurants';

type FilterableRestaurantProps = {
  data: Restaurants[]
}

const CategoryButtonMap: Record<string, string> = {
  0: '전체',
  1: '중식',
  2: '한식',
  3: '일식',
};

function Restaurant({ data }:FilterableRestaurantProps) {
  const [filterText, setFilterText] = useState('');
  const [filterButton, setFilterButton] = useState('');

  const filteredRestaurants = filterRestaurants(data, { filterText, filterButton });

  const onClickFilterButton = (currentValue: string) => {
    const selectedButtonValue = CategoryButtonMap[currentValue];
    setFilterButton(selectedButtonValue);
  };

  return (
    <div className="restaurants">
      <FilterableTable>
        <FilterableTable.Toolbar toolbar={(
          <>
            <SearchBar
              filterText={filterText}
              onChangeFilterText={(value: string) => setFilterText(value)}
            />
            <FilterCategoryButtonGroup
              onClickFilterButton={(value: string) => onClickFilterButton(value)}
            />
          </>
        )}
        />
        <FilterableTable.View view={<RestaurantTable restaurants={filteredRestaurants} />} />
      </FilterableTable>
    </div>
  );
}

export default Restaurant;
