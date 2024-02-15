import Restaurant from '../types/RestaurantType';

export default function selectRestaurantsBySearchText(
  restaurants: Restaurant[],
  searchText = '',
): Restaurant[] {
  const query: string = searchText.trim();

  return !query.length
    ? restaurants
    : restaurants.filter((restaurant) => restaurant.name.includes(searchText));
}
