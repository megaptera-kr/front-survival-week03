import { Category } from '../types/Category';
import { Restaurant } from '../types/Restaurant';

export default function getCategoriesFromRestaurant(restaurants:
  Restaurant[]):Category[] {
  return ['전체', ...restaurants.reduce(
    (acc: Category[], restaurant) => (acc.includes(restaurant.category)
      ? acc : [...acc, restaurant.category])
    , [],
  )];
}
