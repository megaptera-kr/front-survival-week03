import { restaurants } from '../../restaurants.json';
import { Restaurants } from '../types/Restaurants';

interface FilterConditions {
    filterText: string;
    filterMenu: any;
}

function filterMenus({ filterText, filterMenu }: FilterConditions) {
  const query = filterText.trim();

  if (!query && !filterMenu) {
    return restaurants;
  }

  const filteredMenus = restaurants.filter((restaurant) => filterMenu || restaurant);

  const contains = (restaurant: Restaurants) => (
    restaurant.name.includes(query)
  );

  return filteredMenus.filter(contains);
}

export default filterMenus;
