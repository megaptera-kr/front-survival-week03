import Restaurant from '../types/Restaurant';

// const filterRestaurants = (
//   category === "전체"
//     ? restaurants
//     : restaurants.filter((restaurant) =>
//         restaurant.category.includes(category)
//       )
// ).filter((restaurant) => restaurant.name.includes(filterText));

type FilterConditions = {
  filterText: string;
  category: string;
}

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, category }: FilterConditions,
): Restaurant[] {
  const match = (restaurant: Restaurant) => (restaurant.category === category);

  const filteredRestaurants = category === '전체'
    ? restaurants
    : restaurants.filter(match);

  const query = normalize(filterText);

  if (!query) {
    return filteredRestaurants;
  }

  const contains = (restaurant: Restaurant) => (
    normalize(restaurant.name).includes(query)
  );

  return filteredRestaurants.filter(contains);
}
