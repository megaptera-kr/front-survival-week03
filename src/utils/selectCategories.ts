/* eslint-disable comma-dangle */
import { RestaurantType } from '../types/RestaurantType';

export default function selcectCategories(
  restaurants: RestaurantType[]
): string[] {
  return restaurants.reduce(
    (acc, restaurant) => {
      const { category } = restaurant;
      return acc.includes(category) ? acc : [...acc, category];
    },
    ['전체']
  );
}
