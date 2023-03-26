import type { Restaurant } from '../types/restaurants';

const selectCategories = (
  restaurants: Restaurant[],
): string[] => restaurants.reduce((acc: string[], restaurant: Restaurant) => {
  const { category } = restaurant;

  return acc.includes(category)
    ? acc
    : [...acc, category];
}, []);

export default selectCategories;
