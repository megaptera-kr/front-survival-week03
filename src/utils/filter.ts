import { Restaurant, RestaurantFilter } from '../types/restaurants';

export const filterRestaurantName = (restaurants: Restaurant[], name: string): Restaurant[] => {
  if (!name) return restaurants;
  const regexp = new RegExp(`.*${name}.*`, 'g');

  return restaurants.filter((restaurant) => regexp.test(restaurant.name));
};

export const filterRestaurantCategory = (
  restaurants: Restaurant[],
  category: string,
): Restaurant[] => restaurants.filter(
  (restaurant) => !category || restaurant.category === category,
);

export const filterRestaurant = (
  restaurants: Restaurant[],
  opt: RestaurantFilter,
) => filterRestaurantCategory(filterRestaurantName(restaurants, opt.searchText), opt.category);
