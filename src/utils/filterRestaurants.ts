import Restaurant from '../types/Restaurant';

type filterRestaurantsType = (
  restaurants: Restaurant[],
  filters: { filterText: string, filterCategory: string }
) => Restaurant[];

const filterRestaurants: filterRestaurantsType = (restaurants, { filterText, filterCategory }) => {
  const query = filterText.trim();

  const filteredRestaurants = restaurants
    .filter((restaurant) => (filterCategory === '전체' || restaurant.category === filterCategory));

  const contains = (restaurant: Restaurant) => (
    restaurant.name.includes(query)
  );

  return filteredRestaurants.filter(contains);
};

export default filterRestaurants;
