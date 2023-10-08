import Restaurant from '../types/Restaurant';

export default function selectCategories(restaurants: Restaurant[]) {
  return restaurants.reduce(
    (acc: string[], restaurant: any) => {
      const { category } = restaurant;
      return acc.includes(category) ? acc : [...acc, category];
    },
    ['전체'],
  );
}
