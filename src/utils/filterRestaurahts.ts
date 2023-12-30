import { Restaurants } from "../types/Restaurants";

interface FilterRestaurantsProps {
  restaurants: Restaurants[];
  query: string;
}

export const filterRestaurants = ({ restaurants, query }: FilterRestaurantsProps) => {
  if (!query) {
    return restaurants;
  }

  const trimQuery = query.trim()
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.includes(trimQuery)
  );

  return filteredRestaurants;
};
