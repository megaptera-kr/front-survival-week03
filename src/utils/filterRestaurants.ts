import { FilterOptions, Restaurant } from '../types/types';

const filterRestaurants = (
  restaurants: Restaurant[],
  filterOptions : FilterOptions,
) => {
  const check = (restaurant: Restaurant) => {
    const includeName = restaurant.name.includes(filterOptions.name);
    const includeCategory = restaurant.category.includes(filterOptions.category);

    return filterOptions.category === '전체'
      ? includeName
      : includeName && includeCategory;
  };

  const filterResult = restaurants.filter(check);

  return filterResult;
};

export default filterRestaurants;
