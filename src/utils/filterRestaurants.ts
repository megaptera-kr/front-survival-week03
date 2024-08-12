import Restaurant from '../type/Restaurant';

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

type FilterConditions = {
  filterText: string;
  filterCategory: string;
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterCategory }: FilterConditions,
): Restaurant[] {
  const match = (restaurant: Restaurant) => (restaurant.category === filterCategory);
  const filteredRestaurants = filterCategory === '전체' ? restaurants : restaurants.filter(match);

  const query = normalize(filterText);

  if (!query) {
    return filteredRestaurants;
  }

  const contain = (restaurant: Restaurant) => (normalize(restaurant.name).includes(query));
  return filteredRestaurants.filter(contain);
}
