import { FilterableRestaurantTableProps, Restaurant } from '../types/Restaurant';

const selectCategories = (restaurants : Restaurant[]): string[] => (
  restaurants.reduce((acc: string[], restaurant: Restaurant) => {
    const { category } = restaurant;
    return acc.includes(category) ? acc : [...acc, category];
  }, []));

export default selectCategories;
