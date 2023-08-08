import { Restaurants } from '../types/restaurants';

export default function selectCategories(restaurants: Restaurants) {
  return restaurants
    .reduce<string[]>((acc, restaurant) => {
      const { category } = restaurant;
      if (!acc.includes(category)) {
        return [...acc, category];
      }

      return acc;
    }, ['전체']);
}
