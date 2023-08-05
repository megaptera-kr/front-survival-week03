import { Restaurant } from '../types/Restaurant';

export default function selectCategories(restaurantsData:Restaurant[]):string[] {
  return restaurantsData.reduce((acc:string[], restaurant:Restaurant) => {
    const { category } = restaurant;
    return acc.includes(category) ? acc : [...acc, category];
  }, []);
}
