import { Restaurants } from '../types/filterableProductTable';

function filterRestaurants(items: Restaurants[], category: string) {
  return items.filter((item) => item.category === category);
}
export default filterRestaurants;
