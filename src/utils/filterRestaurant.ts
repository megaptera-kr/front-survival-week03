import { IRestaurant } from '../types/restaurant';

import { TABS } from '../constants/restaurant';

type FilterOptions = {
  tabIndex: number;
  filterText: string;
};

const normalize = (text: string) => text.trim();

const filterRestaurant = (
  restaurants: IRestaurant[],
  { tabIndex, filterText }: FilterOptions,
) => {
  const query = normalize(filterText);

  const filteredRestaurants = restaurants.filter(
    (restaurant) => !tabIndex || restaurant.category === TABS[tabIndex],
  );

  if (!query) {
    return filteredRestaurants;
  }

  const contain = (restaurant: IRestaurant) => normalize(restaurant.name)
    .includes(query);

  return filteredRestaurants.filter(contain);
};

export default filterRestaurant;
