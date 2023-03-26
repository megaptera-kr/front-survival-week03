import Restaurant from '../types/Restaurant';

type FilterConditions = {
  valueText: string;
  selectCategory: string;
}

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

export default function filter(
  restaurants: Restaurant[],
  { valueText, selectCategory }: FilterConditions,
): Restaurant[] {
  const filteredRestaurants = selectCategory === '전체'
    ? restaurants
    : restaurants.filter(
      (restaurant) => selectCategory === restaurant.category,
    );

  const query = normalize(valueText);

  if (!query) {
    return filteredRestaurants;
  }

  const contains = (restaurant: Restaurant) => (
    normalize(restaurant.name).includes(query)
  );

  return filteredRestaurants.filter(contains);
}
