import Restaurant from '../types/restaurant';

export default function filterRestaurants(
  filterText: string,
  restaurants: Restaurant[],
): Restaurant[] {
  if (!filterText) return restaurants;

  const filteredRestaurant = restaurants
    .filter((restaurant: Restaurant) => restaurant.name
      .includes(filterText.trim()));

  return filteredRestaurant;
}
