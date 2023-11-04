import { Restaurant } from '../types/Restaurant';

type filterConditionsType = {
  filterText: string;
  category: string;
}

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  {
    filterText,
    category,
  }:filterConditionsType,
) {
  const query = normalize(filterText);
  const filterCategory = restaurants.filter((el) => el.category === category);
  const contains = (restaurant: Restaurant) => restaurant.name.includes(query);

  if (category === '전체') return restaurants.filter(contains);
  if (!query && category === '전체') {
    return restaurants;
  }

  if (!query) {
    return filterCategory;
  }

  return restaurants.filter(contains);
}
