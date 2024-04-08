import { Category } from '../types/Category';
import { Restaurant } from '../types/Restaurant';

export default function filterRestaurantByCategory(
  restaurants: Restaurant[],
  { category, filterText } : {category:Category; filterText:string;},
) {
  const query = filterText.trim();

  return restaurants.filter(
    (restaurant) => (
      category === '전체'
        ? restaurants
        : restaurant.category === category),
  ).filter((restaurant) => restaurant.name.includes(query));
}
