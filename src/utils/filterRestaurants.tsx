import Restaurant from '../types/Restaurant';

function flatten(text: string) {
  return text.trim().toLocaleLowerCase();
}

type FilterConditions = {
  filterCategory: string;
  filterText: string;
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  {
    filterCategory,
    filterText,
  } : FilterConditions,
) {
  let filteredRestaurants = restaurants;

  const isCategoryMatch = (restaurant : Restaurant) => (
    restaurant.category === filterCategory
  );

  if (filterCategory && filterCategory !== '전체') {
    filteredRestaurants = restaurants.filter(isCategoryMatch);
  }

  if (!filterText) {
    return filteredRestaurants;
  }

  const contains = flatten(filterText);

  return filteredRestaurants.filter(
    (restaurant) => flatten(restaurant.name).includes(contains),
  );
}
