/* eslint-disable comma-dangle */

import { RestaurantType } from '../types/RestaurantType';

type FilterConditionProps = {
  searchText: string;
  selectCategory: string;
};

const noramlize = (text: string) => text.trim().toLowerCase();

export default function filterRestaurant(
  restaurants: RestaurantType[],
  { searchText, selectCategory }: FilterConditionProps
) {
  const filteredRestaurants =
    selectCategory === '전체'
      ? restaurants
      : restaurants.filter(
          (restaurant) => selectCategory === restaurant.category
        );

  const query = noramlize(searchText);
  if (!query) return filteredRestaurants;

  const contains = (restaurant: RestaurantType) =>
    noramlize(restaurant.name).includes(query);

  return filteredRestaurants.filter(contains);
}
