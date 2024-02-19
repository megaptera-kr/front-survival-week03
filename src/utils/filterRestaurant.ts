import { Restaurants } from '../types/Restaurants';

function nomalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

type FilterRestaurant = {
  filterText: string;
  selectedCategory: string;
}

function filterRestaurant(
  restaurants: Restaurants[],
  { filterText, selectedCategory }: FilterRestaurant,
): Restaurants[] {
  const filteredRestaurants = restaurants
    .filter((restaurant) => selectedCategory === '전체'
    || restaurant.category === selectedCategory);

  const query = nomalize(filterText);

  if (!query) {
    return filteredRestaurants;
  }

  const contains = (restaurant: Restaurants) => (
    nomalize(restaurant.name).includes(query)
  );

  return filteredRestaurants.filter(contains);
}

export default filterRestaurant;
