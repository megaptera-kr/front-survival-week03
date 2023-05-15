import RestaurantsType from '../types/RestaurantsType';

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

type FilterMenuType = {
    filterText: string,
    filterCategories: string
}

export default function filterRestaurants(
  restaurants: RestaurantsType[],
  { filterText, filterCategories }: FilterMenuType,
): RestaurantsType[] {
  const match = (restaurant: RestaurantsType) => (restaurant.category === filterCategories);

  const filteredRestaurants = filterCategories === '전체' ? restaurants : restaurants.filter(match);

  const query = normalize(filterText);

  if (!query) {
    return filteredRestaurants;
  }

  const contains = (restaurant: RestaurantsType) => (
    normalize(restaurant.name).includes(query)
  );

  return filteredRestaurants.filter(contains);
}
