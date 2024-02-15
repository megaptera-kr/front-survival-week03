import Restaurant from '../types/RestaurantType';

export default function selectRestaurantsBySearchText(
  restaurants: Restaurant[],
  searchText: string = ''
): Restaurant[] {
  const query: string = searchText.trim();
  console.log(searchText);

  return !query.length
    ? restaurants
    : restaurants.filter((restaurant) => restaurant.name.includes(searchText));
}
