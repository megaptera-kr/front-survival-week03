import { Restaurant, RestaurantFilter } from '../types/restaurants';

export const filterRestaurantName = (restaurants: Restaurant[], name: string): Restaurant[] => {
  if (!name) return restaurants;
  const regexp = new RegExp(`.*${name}.*`, 'g');

  return restaurants.filter((restaurant) => regexp.test(restaurant.name));
};

export const filterRestaurantCategory = (
  restaurants: Restaurant[],
  category: string,
): Restaurant[] => {
  const match = (restaurant: Restaurant) => restaurant.category === category;

  return category === '전체' ? restaurants : restaurants.filter(match);
};

export const filterRestaurant = (
  restaurants: Restaurant[],
  { searchText, category }: RestaurantFilter,
) => filterRestaurantCategory(filterRestaurantName(restaurants, searchText), category);
