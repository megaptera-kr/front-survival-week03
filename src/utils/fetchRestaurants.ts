import restaurantsData from '../../restaurants.json';

import IRestaurant from '../types/restaurant';

export default function fetchRestaurants(): IRestaurant[] {
  const { restaurants }: { restaurants: IRestaurant[] } = restaurantsData;
  return restaurants;
}
