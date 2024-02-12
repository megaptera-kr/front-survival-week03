import Restaurants from '../types/Restaurants';

function selectCategories(restaurants: Restaurants[]): string[] {
  return restaurants.reduce((acc: string[], restaurant: Restaurants) => {
    const { category } = restaurant;
    return acc.includes(category) ? acc : [...acc, category];
  }, ['전체']);
}

export default selectCategories;
