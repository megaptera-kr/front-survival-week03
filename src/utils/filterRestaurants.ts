import ECategory from '../types/category';
import IRestaurant from '../types/restaurant';

function nomalize(query: string): string {
  return query.trim().toLowerCase();
}

function matchCategory(restaurants: IRestaurant[], category: string) {
  return restaurants.filter((restaurant) => restaurant.category === category);
}

function containRestaurants(restaurants: IRestaurant[], query: string) {
  return restaurants.filter((restaurant) => nomalize(restaurant.name).includes(query));
}

type FilterConditions = {
  filterQuery: string;
  filterCategory: string;
};

export default function filterRestaurants(
  restaurants: IRestaurant[],
  { filterQuery, filterCategory }: FilterConditions,
): IRestaurant[] {
  const filteredRestaurants = filterCategory === ECategory.all
    ? restaurants
    : matchCategory(restaurants, filterCategory);

  const query = nomalize(filterQuery);

  if (!query) {
    return filteredRestaurants;
  }

  const result = containRestaurants(filteredRestaurants, query);

  return result;
}
