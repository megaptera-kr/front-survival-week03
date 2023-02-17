import Restaurant from '../types/Restaurant';

function normalize(text: string) {
  return text.trim().toLowerCase();
}

type FilterCondition = {
    filterText: string;
    filterCategory: string;
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterCategory } : FilterCondition,
): Restaurant[] {
  const filteredRestaurants = filterCategory === '전체'
    ? restaurants
    : restaurants
      .filter((restaurant) => filterCategory === restaurant.category);

  const query = normalize(filterText);

  if (!query) {
    return filteredRestaurants;
  }

  const contains = (restaurant: Restaurant) => (
    normalize(restaurant.name).includes(query)
  );

  return filteredRestaurants.filter(contains);
}
