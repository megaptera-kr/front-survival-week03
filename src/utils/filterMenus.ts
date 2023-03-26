import { restaurants } from '../../restaurants.json';
import { Restaurants } from '../types/Restaurants';

interface FilterConditions {
    filterText: string;
    filterCategory: string;
}

function filterMenus({ filterText, filterCategory }: FilterConditions) {
  const query = filterText.trim();

  if (!query && !filterCategory) {
    return restaurants;
  }

  const filteredMenus = restaurants.filter((restaurant) => filterCategory || restaurant);

  const nameContains = (restaurant: Restaurants) => (
    restaurant.name.includes(query)
  );

  const categoryContains = (restaurant: Restaurants) => (
    restaurant.category.includes(filterCategory)
  );

  if (filterCategory === '전체') {
    return restaurants;
  }

  const searchResult = filteredMenus.filter(nameContains) && filteredMenus.filter(categoryContains);

  return searchResult;
}

export default filterMenus;
