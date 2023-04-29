import { Restaurant } from '../types/Restaurant';

type FilterConditions = {
    searchText: string,
    filterCategory: string,
}

export default function filterData(
  restaurants: Restaurant[],
  { searchText, filterCategory } : FilterConditions,
) {
  let filteredRestaurants = filterCategory === '전체'
    ? restaurants
    : restaurants.filter((restaurant) => (
      restaurant.category === filterCategory
    ));

  if (searchText.length) {
    const query = searchText.replace(/\s/g, '');
    filteredRestaurants = filteredRestaurants.filter((restaurant) => (
      restaurant.name.includes(query)
    ));
  }

  return filteredRestaurants;
}
