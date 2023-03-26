import { Restaurants } from '../types/Restaurants';

interface FilterConditions {
    restaurants: Restaurants[];
    filterText: string;
    filterCategory: string;
}

function filterMenus({ restaurants, filterText, filterCategory }: FilterConditions) {
  const query = filterText.trim();

  let filteredRestaurants = restaurants;

  const filteredRestaurantsMenu = (filterCategoryName: string) => filteredRestaurants
    .filter((filteredRestaurant) => filteredRestaurant.category === filterCategoryName);

  const filteredRestaurantsName = (queryText: string) => filteredRestaurants
    .filter((filteredRestaurant) => filteredRestaurant.name.includes(queryText));

  if (filterCategory) {
    filteredRestaurants = filteredRestaurantsMenu(filterCategory);
  }

  if (query) {
    filteredRestaurants = filteredRestaurantsName(query);
  }

  return filteredRestaurants;
}

export default filterMenus;
