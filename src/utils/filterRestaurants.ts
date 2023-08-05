import { Restaurant, RestaurantFilterConditions } from '../types/restaurants';

export default function filterRestaurants(
  restaurants: Restaurant[],
  { query, foodType }: RestaurantFilterConditions,
): Restaurant[] {
  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (foodType === '전체') return restaurant;
    return restaurant.category === foodType;
  });

  if (!query.length) {
    return filteredRestaurants;
  }

  return filteredRestaurants.filter(
    (restaurant) => restaurant.name.includes(query),
  );
}
