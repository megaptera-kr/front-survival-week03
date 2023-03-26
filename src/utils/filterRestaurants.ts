import Restaurant from '../types/Restaurant';

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

type filterStatus = {
  filterText: string;
  selectCategory: string;
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, selectCategory }: filterStatus,
): Restaurant[] {
  const selecList = (restaurant: Restaurant) => (restaurant.category === filterCategory);

  const filteredRestaurants = filterCategory === '전체'
    ? restaurants
    : restaurants.filter(match);

  const query = normalize(filterText);

  if (!query) {
    return filteredRestaurants;
  }

  const contains = (restaurant: Restaurant) => (
    normalize(restaurant.name).includes(query)
  );

  return filteredRestaurants.filter(contains);
}
