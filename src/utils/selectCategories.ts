import Restaurant from '../types/Restaurant';

const selectCategoires = (restaurants: Restaurant[]): string[] => (
  restaurants.reduce((acc, restaurant) => (
    acc.includes(restaurant.category) ? acc : [...acc, restaurant.category]
  ), ['전체']));

export default selectCategoires;
