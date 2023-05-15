import data from '../../restaurants.json';

import { Data } from '../types/types';

export default function selectCategories():string[] {
  const { restaurants } = data as Data;

  return restaurants.reduce(
    (acc, restaurant) => (acc.includes(restaurant.category)
      ? acc : [...acc, restaurant.category]),
    ['전체'],
  );
}
