import Restaurant from '../types/restaurant';

export default function selectCategories(restaurants: Restaurant[]) {
  return restaurants.reduce((acc: string[], restaurant) => {
    const { category } = restaurant;
    return acc.includes(category) ? acc : [...acc, category];
  }, ['전체']);
}
