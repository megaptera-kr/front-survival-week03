import Restaurant from '../types/Restaurant';

export default function selectCategory(restaurant: Restaurant[]) {
  return restaurant.reduce((acc: string[], restaurants) => (
    acc.includes(restaurants.category) ? acc : [...acc, restaurants.category]), ['전체']);
}
