import { Restaurants } from '../types/restaurants';

type filterRestaurantsOption = Partial<{
  searchText: string;
  selectedCategory: string;
}>

export default function filterRestaurants(
  restaurants: Restaurants,
  option: filterRestaurantsOption,
) {
  const { searchText, selectedCategory } = option;
  return restaurants
    .filter((restaurant) => {
      if (!searchText) {
        return true;
      }

      return restaurant.name.includes(searchText.trim());
    })
    .filter((restaurant) => {
      if (!selectedCategory || selectedCategory === '전체') {
        return true;
      }

      return restaurant.category === selectedCategory;
    });
}
