import Restaurant from '../type/Restaurant';

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  textFiled: string,
): Restaurant[] {
  return restaurants.filter((restaurant) => normalize(restaurant.name).includes(textFiled));
}
