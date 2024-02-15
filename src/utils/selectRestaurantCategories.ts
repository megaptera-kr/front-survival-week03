import Restaurant from '../types/RestaurantType';

export default function selectRestaurantCategories(
  restaurants: Restaurant[]
): string[] {
  const categories: string[] = [
    '',
    ...Array.from(
      new Set(restaurants.map((restaurant) => restaurant.category))
    ).filter(Boolean),
  ];

  return categories;
}
