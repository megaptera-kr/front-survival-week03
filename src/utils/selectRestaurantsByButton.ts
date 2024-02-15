import Restaurant from '../types/RestaurantType';

export default function selectRestaurantsByButton(
  restaurants: Restaurant[],
  category: string = ''
): Restaurant[] {
  return !category.length
    ? restaurants
    : restaurants.filter((restaurant) => restaurant.category === category);
}
