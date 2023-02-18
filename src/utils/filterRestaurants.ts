import { Restaurants } from '../types/filterableProductTable';

function normalize(text: string) {
  return text.trim();
}

function filterRestaurants(items: Restaurants[], filterText: string) {
  const query = normalize(filterText);

  if (!query) return items;

  const contains = (item:Restaurants) => item.category.includes(query);

  return items.filter(contains);
}
export default filterRestaurants;
