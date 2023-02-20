import Restaurant from '../types/Restaurant';

export default function makeCategories(restaurants: Restaurant[]) {
  return ['전체', ...restaurants.reduce((acc: string[], restaurant: Restaurant) => {
    const { category } = restaurant;

    return acc.includes(category) ? acc : [...acc, category];
  }, [])];
}
