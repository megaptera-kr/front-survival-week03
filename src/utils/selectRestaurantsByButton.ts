import Restaurant from '../types/RestaurantType';

export default function selectRestaurantsByButton(
  restaurants: Restaurant[],
  category = '',
): Restaurant[] {
  return !category.length
    ? restaurants
    : restaurants.filter((restaurant) => restaurant.category === category);
}
