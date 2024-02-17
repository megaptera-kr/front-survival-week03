import jsonData from '../../restaurants.json';
import useFilteredRestaurants from '../hooks/useFilteredRestaurants';
import { FoodCategoryWithAll, Restaurants } from '../types';
import FoodCategories from './FoodCategories';
import RestaurantsTable from './RestaurantTable';
import SearchInput from './SearchInput';

export default function FilterableRestaurantTable() {
  const { restaurants } = jsonData;
  const {
    filter, setFilter,
    filteredRestaurants,
  } = useFilteredRestaurants(restaurants as unknown as Restaurants);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({
      ...filter,
      name: e.target.value.trim(),
    });
  };

  const handleClickCategory = (category: FoodCategoryWithAll) => {
    setFilter({
      ...filter,
      category,
    });
  };

  return (
    <>
      <h1>오늘의 메뉴</h1>
      <SearchInput handleFilterChange={handleFilterChange} />
      <FoodCategories
        handleClickCategory={handleClickCategory}
        filter={filter}
        restaurants={restaurants as unknown as Restaurants}
      />
      <RestaurantsTable filteredRestaurants={filteredRestaurants} />
    </>
  );
}
