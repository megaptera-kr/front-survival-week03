import Restaurant from '../types/Restaurant';

export default function selectCategories(restaurants: Restaurant[]) {
  return restaurants.reduce((arr:string[], restaurant:Restaurant) => {
    const { category } = restaurant;
    return arr.includes(category) ? arr : [...arr, category];
  }, ['전체']);
}
