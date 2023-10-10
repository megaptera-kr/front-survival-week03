import ECategory from '../types/category';
import IRestaurant from '../types/restaurant';

export default function selectCategories(restaurants: IRestaurant[]): string[] {
  const categories = restaurants.reduce(
    (acc: string[], restaurant: IRestaurant) => {
      const { category } = restaurant;
      return acc.includes(category) ? acc : [...acc, category];
    },
    [],
  );

  return [ECategory.all, ...categories];
}
