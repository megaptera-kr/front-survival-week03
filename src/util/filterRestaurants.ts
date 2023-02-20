import Restaurant from '../types/Restaurant';

type FilterConditions = {
  filterText: string;
  filterButton: string;
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterButton }: FilterConditions,
): Restaurant[] {
  let filteredRestaurants = restaurants
    .filter((restaurant) => !filterButton || restaurant.category === filterButton);

  const query = filterText.trim();

  if (filterButton === '전체') {
    filteredRestaurants = restaurants;
  }

  return filteredRestaurants.filter((restaurant) => (
    restaurant.name.includes(query)
  ));
}
