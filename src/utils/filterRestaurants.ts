import Restaurant from '../types/restaurant';

type filterConditions = {
  searchRestaurantText: string;
  filterCategoryText: string;
}

function textNormalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

export default function filterRestaurant(
  restaurants: Restaurant[],
  { searchRestaurantText, filterCategoryText }: filterConditions,
) {
  let filterCategoryQuery: Restaurant[] = restaurants;
  if (filterCategoryText !== '전체') {
    filterCategoryQuery = restaurants
      .filter((restaurant: Restaurant) => restaurant.category === filterCategoryText);
  }

  const query = textNormalize(searchRestaurantText);
  return filterCategoryQuery
    .filter((restaurant: Restaurant) => textNormalize(restaurant.name).includes(query));
}
